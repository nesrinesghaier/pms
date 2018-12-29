/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author bacali
 */
@Entity
@Table(name = "TBL_RESOURCE")
public class Resource implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long resource_id;
    private ResourceRole role;
    private String description;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    private Project project;
    
    @ManyToMany(mappedBy = "resources")
    private List<TaskConsumption> taskConsumptions;

    public List<TaskConsumption> getTaskConsumptions() {
        return taskConsumptions;
    }

    public void setTaskConsumptions(List<TaskConsumption> taskConsumptions) {
        this.taskConsumptions = taskConsumptions;
    }
    
    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Resource() {
    }
    

    public Long getId() {
        return resource_id;
    }

    public void setId(Long id) {
        this.resource_id = id;
    }

    public ResourceRole getRole() {
        return role;
    }

    public void setRole(ResourceRole role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (resource_id != null ? resource_id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the resource_id fields are not set
        if (!(object instanceof Resource)) {
            return false;
        }
        Resource other = (Resource) object;
        if ((this.resource_id == null && other.resource_id != null) || (this.resource_id != null && !this.resource_id.equals(other.resource_id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "tn.rnu.eniso.pms.core.ejb.entities.Resource[ id=" + resource_id + " ]";
    }
    
}
