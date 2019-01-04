/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.utils.service;

import java.util.ArrayList;
import java.util.List;
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

    public Task add(Task task) {
        if (task != null) {
            Task addedTask = new Task();
            addedTask.setDescription(task.getDescription());
            addedTask.setEstimationDuration(task.getEstimationDuration());
            addedTask.setStartDate(task.getStartDate());
            addedTask.setEndDate(task.getEndDate());
            addedTask.setComplexity(task.getComplexity());
            addedTask.setTaskConsumptions(new ArrayList<TaskConsumption>());
            addedTask.setTaskDependencies(new ArrayList<TaskDependency>());
            em.persist(addedTask);
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

    public void delete(Long id) {
        Task task = em.find(Task.class, id);
        if (task != null) {
            em.remove(task);
        }
    }

    public Task update(Task task) {
        if (task != null) {
            em.refresh(task);
            return task;
        }
        return null;

    }

}
