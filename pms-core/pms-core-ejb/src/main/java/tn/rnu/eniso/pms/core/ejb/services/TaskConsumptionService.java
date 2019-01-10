/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.Story;
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;

/**
 *
 * @author ameni
 */
@Stateless(name = "taskConsumptionService")
public class TaskConsumptionService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    @Transactional
    public TaskConsumption add(Long taskId, Long resourceId, TaskConsumption consumption) {
        Task task = em.find(Task.class, taskId);
        if (task != null) {
            Resource resource = em.find(Resource.class, resourceId);
            if (resource != null && sameProject(task, resource)) {
                em.persist(consumption);
                task.getTaskConsumptions().add(consumption);
                resource.getTaskConsumptions().add(consumption);
                em.merge(task);
                em.merge(resource);
                return consumption;
            }
        }
        return null;
    }

    public TaskConsumption get(Long id) {
        TaskConsumption taskConsumption = em.find(TaskConsumption.class, id);
        if (taskConsumption != null) {
            return taskConsumption;
        }
        return null;
    }

    public List<TaskConsumption> getAll() {
        return em.createQuery("SELECT t FROM TaskConsumption t").getResultList();
    }

    @Transactional
    public TaskConsumption update(TaskConsumption consumption) {
        TaskConsumption consumptionToUpdate = em.find(TaskConsumption.class, consumption.getId());
        if (consumptionToUpdate != null) {
            em.merge(consumption);
            return consumption;
        }
        return null;
    }

    public List<TaskConsumption> getConsumption(Long taskId) {
        Task t = (Task) em.createQuery("Select t FROM Task t WHERE t.id=:id")
                .setParameter("id", taskId).getResultList().get(0);
        List<TaskConsumption> result = new ArrayList<>();
        result.addAll(t.getTaskConsumptions());
        return result;
    }

    @Transactional
    public void delete(Long id) {
        TaskConsumption consumption = em.find(TaskConsumption.class, id);
        if (consumption != null) {
            Resource resource
                    = (Resource) em.createQuery("SELECT r from Resource r WHERE :c MEMBER OF r.taskConsumptions")
                            .setParameter("c", consumption).getSingleResult();
            if (resource != null) {
                resource.getTaskConsumptions().remove(consumption);
                em.merge(resource);
            }
            Task task = (Task) em.createQuery("SELECT t from Task t WHERE :c MEMBER OF t.taskConsumptions")
                    .setParameter("c", consumption).getSingleResult();
            if (task != null) {
                task.getTaskConsumptions().remove(consumption);
                em.merge(task);
            }
            em.remove(consumption);
        }
    }

    private boolean sameProject(Task task, Resource resource) {
        Story story
                = (Story) em.createQuery("SELECT s FROM Story s WHERE :task MEMBER OF s.tasks")
                        .setParameter("task", task)
                        .getSingleResult();
        if (story != null) {
            ProductBacklogItem backlogItem
                    = (ProductBacklogItem) em.createQuery("SELECT b FROM ProductBacklogItem b WHERE :story MEMBER OF b.stories")
                            .setParameter("story", story)
                            .getSingleResult();
            if (backlogItem != null) {
                Long projectId1
                        = (Long) em.createQuery("SELECT p.id FROM Project p WHERE :b MEMBER OF p.productBacklogItems")
                                .setParameter("b", backlogItem)
                                .getSingleResult();

                Long projectId2
                        = (Long) em.createQuery("SELECT p.id FROM Project p WHERE :r MEMBER OF p.resources")
                                .setParameter("r", resource)
                                .getSingleResult();
                return Objects.equals(projectId1, projectId2);
            }

        }
        return false;
    }
}
