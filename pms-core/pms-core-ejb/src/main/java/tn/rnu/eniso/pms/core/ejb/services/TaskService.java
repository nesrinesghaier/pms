/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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

    static final Logger logger = Logger.getGlobal();

    public Task add(Task task) {
        if (task != null) {
            Task addedTask = new Task();
            addedTask.setTaskConsumptions(new ArrayList<TaskConsumption>());
            addedTask.setDescription(task.getDescription());
            addedTask.setEstimationDuration(task.getEstimationDuration());
            addedTask.setStartDate(task.getStartDate());
            addedTask.setEndDate(task.getEndDate());
            addedTask.setComplexity(task.getComplexity());
            em.persist(addedTask);
            em.flush();
            return addedTask;
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

    public List<TaskConsumption> getTaskConsumptions(Long taskId) {
        Task t = (Task) em.createQuery("SELECT t FROM Task t where t.id = :id")
                .setParameter("id", taskId).getResultList().get(0);
        List<TaskConsumption> result = new ArrayList<>();
        result.addAll(t.getTaskConsumptions());
        return result;
    }

    public List<Task> getAll() {
        return em.createQuery("SELECT t FROM Task t").getResultList();

    }

    public void delete(Long id) {
        Task task = em.find(Task.class, id);
        if (task != null) {
            em.remove(task);
        }
    }

    public Task update(Task task) {
        if (task != null) {
            Task t = em.find(Task.class, task.getId());
            if (t != null) {
                em.merge(task);
                em.flush();
                return task;
            }//baddalt starr test
        }
        return null;
    }
}
