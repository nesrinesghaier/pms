/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.utils.service;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.TaskDependency;

/**
 *
 * @author ameni
 */

@Stateless(name = "taskDependencyService")
public class TaskDependencyService {
    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public TaskDependency add(TaskDependency taskDependency) {
        if (taskDependency != null) {
            TaskDependency addedTaskDependency = new TaskDependency();
            addedTaskDependency.setType(taskDependency.getType());
            em.persist(addedTaskDependency);
            return taskDependency;
        }
        return null;
    }

    public TaskDependency get(Long id) {
        TaskDependency taskDependency = em.find(TaskDependency.class, id);
        if (taskDependency != null) {
            return taskDependency;
        }
        return null;
    }

    public List<TaskDependency> getAll() {
        return em.createQuery("SELECT t FROM TaskDependency t").getResultList();
    }

    public void delete(Long id) {
        TaskDependency taskDependency = em.find(TaskDependency.class, id);
        if (taskDependency != null) {
            em.remove(taskDependency);
        }
    }

    public TaskDependency update(TaskDependency taskDependency) {
        if (taskDependency != null) {
            em.refresh(taskDependency);
            return taskDependency;
        }
        return null;

    }

}
