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
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;

/**
 *
 * @author ameni
 */

@Stateless(name = "taskConsumptionService")
public class TaskConsumptionService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public TaskConsumption add(TaskConsumption taskConsumption) {
        if (taskConsumption != null) {
            TaskConsumption addedTaskConsumption = new TaskConsumption();
            addedTaskConsumption.setAmount(taskConsumption.getAmount());
            addedTaskConsumption.setTaskDate(taskConsumption.getTaskDate());
            em.persist(addedTaskConsumption);
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

    public void delete(Long id) {
        TaskConsumption taskConsumption = em.find(TaskConsumption.class, id);
        if (taskConsumption != null) {
            em.remove(taskConsumption);
        }
    }

    public TaskConsumption update(TaskConsumption taskConsumption) {
        if (taskConsumption != null) {
            em.refresh(taskConsumption);
            return taskConsumption;
        }
        return null;

    }
    
}
