/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.DependencyType;
import tn.rnu.eniso.pms.core.ejb.entities.Story;
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.entities.TaskDependency;

/**
 *
 * @author ameni
 */
@Stateless(name = "taskService")
public class TaskService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    @EJB
    private TaskConsumptionService consumptionService;

    public Task add(Long storyId, Task task) {
        Story story = em.find(Story.class, storyId);
        if (story != null) {
            em.persist(task);
            story.getTasks().add(task);
            em.merge(story);
            return task;
        }
        return null;
    }

    public Task get(Long id) {
        Task task = em.find(Task.class, id);

        if (task != null) {
            return task;
        }
        return null;
    }

    public List<Task> getAll() {
        return em.createQuery("SELECT t FROM Task t").getResultList();
    }

    public List<TaskConsumption> getAllConsumptions(Long id) {
        Task task = em.find(Task.class, id);
        if (task != null) {
            return task.getTaskConsumptions();
        }
        return null;
    }

    public List<TaskDependency> getAllDependencies(Long id) {
        Task task = em.find(Task.class, id);
        if (task != null) {
            return task.getTaskDependencies();
        }
        return null;
    }

    public Task update(Task task) {
        Task t = em.find(Task.class, task.getId());
        if (t != null) {
            em.merge(task);
            return task;
        }
        return null;
    }

    public void delete(Long id) {
        Task task = em.find(Task.class, id);
        if (task != null) {
            List<TaskConsumption> consumptions = new ArrayList<>(task.getTaskConsumptions());
            for (TaskConsumption consumption : consumptions) {
                consumptionService.delete(consumption.getId());
            }
            Story story = (Story) em.createQuery("SELECT s from Story s WHERE :t MEMBER OF s.tasks")
                    .setParameter("t", task).getSingleResult();
            if (story != null) {
                story.getTasks().remove(task);
                em.merge(story);
            }
            em.remove(task);
        }
    }

    public TaskDependency addDependency(Long parentId, Long childId, String type) {
        Task parent = em.find(Task.class, parentId);
        Task child = em.find(Task.class, childId);
        if (parent != null && child != null && !checkCycleDependency(child, parent.getId())) {
            TaskDependency dependency = new TaskDependency();
            dependency.setType(DependencyType.valueOf(type));
            dependency.setDestinationTask(child);
            em.persist(dependency);
            em.flush();
            parent.getTaskDependencies().add(dependency);
            em.merge(parent);
            return dependency;
        }
        return null;
    }

    private boolean checkCycleDependency(Task task, Long parentId) {
        if (Objects.equals(parentId, task.getId())) {
            return true;
        }
        for (TaskDependency dependency : task.getTaskDependencies()) {
            if (checkCycleDependency(dependency.getDestinationTask(), parentId)) {
                return true;
            }
        }
        return false;
    }
}
