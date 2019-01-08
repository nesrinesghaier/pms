/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.entities;

import com.google.gson.annotations.Expose;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
    @Expose
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Expose
    private ResourceRole resourceRole;
    @Expose
    private String description;

    @OneToMany(cascade = CascadeType.ALL)
    private List<TaskConsumption> taskConsumptions;

    public List<TaskConsumption> getTaskConsumptions() {
        return taskConsumptions;
    }

    public void setTaskConsumptions(List<TaskConsumption> taskConsumptions) {
        this.taskConsumptions = taskConsumptions;
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
        return "Resource{" + "id=" + id + ", resourceRole=" + resourceRole + ", description=" + description + ", taskConsumptions=" + taskConsumptions + '}';
    }

}
