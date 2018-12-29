/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author bacali
 */
@Entity
@Table(name = "TBL_PRODUCT_BACKLOG_ITEM")
public class ProductBacklogItem implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long pbi_id; // product backlog item id 
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    private Project project;
    private int priority;
    private String description;
   
    @OneToMany(mappedBy = "TBL_PRODUCT_BACKLOG_ITEM",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<ProductBacklogItemDependency>backlogItemDependencys;
    
    @OneToMany(mappedBy = "TBL_PRODUCT_BACKLOG_ITEM",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<Story>stories;

    public List<Story> getStories() {
        return stories;
    }

    public void setStories(List<Story> stories) {
        this.stories = stories;
    }
    
    public List<ProductBacklogItemDependency> getBacklogItemDependencys() {
        return backlogItemDependencys;
    }

    public void setBacklogItemDependencys(List<ProductBacklogItemDependency> backlogItemDependencys) {
        this.backlogItemDependencys = backlogItemDependencys;
    }
    
    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    public ProductBacklogItem() {
    }

    public Long getId() {
        return pbi_id;
    }

    public void setId(Long id) {
        this.pbi_id = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (pbi_id != null ? pbi_id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the pbi_id fields are not set
        if (!(object instanceof ProductBacklogItem)) {
            return false;
        }
        ProductBacklogItem other = (ProductBacklogItem) object;
        if ((this.pbi_id == null && other.pbi_id != null) || (this.pbi_id != null && !this.pbi_id.equals(other.pbi_id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem[ id=" + pbi_id + " ]";
    }
    
}
