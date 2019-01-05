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

/**
 *
 * @author ameni
 */
@Stateless(name = "taskConsumptionService")
public class TaskConsumptionService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public TaskConsumption add(TaskConsumption taskConsumption, Long taskId) {
        if (taskConsumption != null) {
            Task t = em.find(Task.class, taskId);
            TaskConsumption addedTaskConsumption = new TaskConsumption();
            addedTaskConsumption.setAmount(taskConsumption.getAmount());
            addedTaskConsumption.setTaskDate(taskConsumption.getTaskDate());
            em.persist(addedTaskConsumption);
            em.flush();
            if (t.getTaskConsumptions() == null) {
                t.setTaskConsumptions(new ArrayList<TaskConsumption>());
            }
            t.getTaskConsumptions().add(taskConsumption);
            em.persist(t);
            em.flush();
            Long test = addedTaskConsumption.getId();
            System.out.println("persisted id equals " + test);
            return taskConsumption;
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

    public void delete(Long taskId, Long id) {
        TaskConsumption taskConsumption = em.find(TaskConsumption.class, id);
        Task task = em.find(Task.class, taskId);
        if (taskConsumption != null) {
            System.out.println(taskConsumption.toString());
            System.out.println("sout bac ali" + task);
            task.getTaskConsumptions().remove(taskConsumption);
            em.merge(task);
            em.flush();
        }
    }

    public TaskConsumption update(Long taskId, Long id, TaskConsumption taskConsumption) {
        if (taskConsumption != null) {
            Task t = em.find(Task.class, taskId);
            TaskConsumption consumptionToUpdate = em.find(TaskConsumption.class, id);
            if (consumptionToUpdate != null) {
                t.getTaskConsumptions().remove(consumptionToUpdate);
                t.getTaskConsumptions().add(taskConsumption);
                em.merge(t);
                em.flush();
            }
            return taskConsumption;
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

}
