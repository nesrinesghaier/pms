/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;

/**
 *
 * @author bacali
 */
@Entity
@Table(name = "TBL_TASK")
public class Task implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long task_id;
    private String description;
    private Long  estimationDuration;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date startDate;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date endDate;
    @Temporal(javax.persistence.TemporalType.DATE)
    
    private int Complexity ;// une tache elementaire prend une complexity =1 
    
    @OneToMany(mappedBy = "TBL_TASK",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<TaskConsumption> taskConsumptions;
    
    @OneToMany(mappedBy = "TBL_TASK",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<TaskDependency> taskDependencies;

    public List<TaskDependency> getTaskDependencies() {
        return taskDependencies;
    }

    public void setTaskDependencies(List<TaskDependency> taskDependencies) {
        this.taskDependencies = taskDependencies;
    }
    
    public Task() {
    }
    
    public Long getId() {
        return task_id;
    }

    public void setId(Long id) {
        this.task_id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getEstimationDuration() {
        return estimationDuration;
    }

    public void setEstimationDuration(Long estimationDuration) {
        this.estimationDuration = estimationDuration;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDade() {
        return endDate;
    }

    public void setEndDade(Date endDade) {
        this.endDate = endDade;
    }

   
    public int getComplexity() {
        return Complexity;
    }

    public void setComplexity(int Complexity) {
        this.Complexity = Complexity;
    }

    public List<TaskConsumption> getTaskConsumptions() {
        return taskConsumptions;
    }

    public void setTaskConsumptions(List<TaskConsumption> taskConsumptions) {
        this.taskConsumptions = taskConsumptions;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (task_id != null ? task_id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the task_id fields are not set
        if (!(object instanceof Task)) {
            return false;
        }
        Task other = (Task) object;
        if ((this.task_id == null && other.task_id != null) || (this.task_id != null && !this.task_id.equals(other.task_id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "tn.rnu.eniso.pms.core.ejb.entities.Task[ id=" + task_id + " ]";
    }

}
