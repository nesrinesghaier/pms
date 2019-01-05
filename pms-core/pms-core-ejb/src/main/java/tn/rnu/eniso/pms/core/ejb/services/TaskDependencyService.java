/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.entities.TaskDependency;

/**
 *
 * @author ameni
 */

@Stateless(name = "taskDependencyService")
public class TaskDependencyService {
    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public TaskDependency add(TaskDependency taskDependency,Long taskId) {
      if (taskDependency != null) {
            Task t = em.find(Task.class, taskId);
            TaskDependency addedTaskDependency = new TaskDependency();
            addedTaskDependency.setType(taskDependency.getType());
            em.persist(addedTaskDependency);
            em.flush();
            if (t.getTaskDependencies() == null) {
                t.setTaskDependencies(new ArrayList<TaskDependency>());
            }
            t.getTaskDependencies().add(taskDependency);
            em.persist(t);
            em.flush();
            Long test = addedTaskDependency.getId();
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

    public void delete(Long taskId,Long id) {
        TaskDependency taskDependency = em.find(TaskDependency.class, id);
        Task task = em.find(Task.class, taskId);
        if (taskDependency != null && task!=null) {
            task.getTaskDependencies().remove(taskDependency);
            em.merge(task);
            em.flush();
        }
    }

    public TaskDependency update(Long taskId,TaskDependency taskDependency) {
        Task t = em.find(Task.class, taskId);
        TaskDependency dependencyToUpdate = em.find(TaskDependency.class, taskDependency.getId());
        if (dependencyToUpdate != null) {
            t.getTaskConsumptions().remove(dependencyToUpdate);
            t.getTaskDependencies().add(taskDependency);
            em.merge(t);
            em.flush();
        }
        return taskDependency;

    }
     public List<TaskDependency> getTaskDependency(Long taskId) {
        Task t = (Task) em.createQuery("Select t FROM Task t WHERE t.id=:id")
                .setParameter("id", taskId).getResultList().get(0);
        List<TaskDependency> result = new ArrayList<>();
        result.addAll(t.getTaskDependencies());
        return result;
    }

}
