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
import javax.persistence.PrimaryKeyJoinColumn;
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
    private Long id;
    private ResourceRole resourceRole;
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
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
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ResourceRole getResourceRole() {
        return resourceRole;
    }

    public void setResourceRole(ResourceRole role) {
        this.resourceRole = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the resource_id fields are not set
        if (!(object instanceof Resource)) {
            return false;
        }
        Resource other = (Resource) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Resource{" + "id=" + id + ", resourceRole=" + resourceRole + ", description=" + description + ", project=" + project + ", taskConsumptions=" + taskConsumptions + '}';
    }

}
