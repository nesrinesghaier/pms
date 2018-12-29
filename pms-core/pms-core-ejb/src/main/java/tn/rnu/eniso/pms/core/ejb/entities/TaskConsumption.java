/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;

/**
 *
 * @author bacali
 */
@Entity
@Table(name = "TBL_TASK_CONSUMPTION")
public class TaskConsumption implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long taskConsumption_id;
    private String amount;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date date;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_id")
    private Task task;
    
    @ManyToMany(cascade = {
        CascadeType.PERSIST,
        CascadeType.MERGE
    })
    @JoinTable(name = "resource_taskConsumption",
        joinColumns = @JoinColumn(name = "taskConsumption_id"),
        inverseJoinColumns = @JoinColumn(name = "resource_id"))
    private List<Resource> resources;

    public List<Resource> getResources() {
        return resources;
    }

    public void setResources(List<Resource> resources) {
        this.resources = resources;
    }

    
    
    public TaskConsumption() {
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Task getTask() {
        return task;
    }

    public void setTask(Task task) {
        this.task = task;
    }
    
    public Long getId() {
        return taskConsumption_id;
    }

    public void setId(Long id) {
        this.taskConsumption_id = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (taskConsumption_id != null ? taskConsumption_id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the taskConsumption_id fields are not set
        if (!(object instanceof TaskConsumption)) {
            return false;
        }
        TaskConsumption other = (TaskConsumption) object;
        if ((this.taskConsumption_id == null && other.taskConsumption_id != null) || (this.taskConsumption_id != null && !this.taskConsumption_id.equals(other.taskConsumption_id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption[ id=" + taskConsumption_id + " ]";
    }

}
