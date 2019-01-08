/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.entities;

import com.google.gson.annotations.Expose;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 *
 * @author bacali
 */
@Entity
@Table(name = "TBL_TASK")
public class Task implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Expose
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Expose
    private String description;
    @Expose
    private State state;
    @Expose
    private String startDate;
    @Expose
    private String endDate;
    @Expose
    private String realStartDate;
    @Expose
    private String realEndDate;
    
    @Expose
    private int complexity;// une tache elementaire prend une complexity =1 

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<TaskConsumption> taskConsumptions;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<TaskDependency> taskDependencies;

    public Task() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public String getRealStartDate() {
        return realStartDate;
    }

    public void setRealStartDate(String realStartDate) {
        this.realStartDate = realStartDate;
    }

    public String getRealEndDate() {
        return realEndDate;
    }

    public void setRealEndDate(String realEndDate) {
        this.realEndDate = realEndDate;
    }
    

    public List<TaskDependency> getTaskDependencies() {
        return taskDependencies;
    }

    public void setTaskDependencies(List<TaskDependency> taskDependencies) {
        this.taskDependencies = taskDependencies;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public int getComplexity() {
        return complexity;
    }

    public void setComplexity(int Complexity) {
        this.complexity = Complexity;
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
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the task_id fields are not set
        if (!(object instanceof Task)) {
            return false;
        }
        Task other = (Task) object;
        return !((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id)));
    }

    public Task(Long id, String description, State state, String startDate, String endDate, String realStartDate, String realEndDate, int complexity, List<TaskConsumption> taskConsumptions, List<TaskDependency> taskDependencies) {
        this.id = id;
        this.description = description;
        this.state = state;
        this.startDate = startDate;
        this.endDate = endDate;
        this.realStartDate = realStartDate;
        this.realEndDate = realEndDate;
        this.complexity = complexity;
        this.taskConsumptions = taskConsumptions;
        this.taskDependencies = taskDependencies;
    }

}
