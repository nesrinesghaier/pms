/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.entities;

import com.google.gson.annotations.Expose;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
    @Expose
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // product backlog item id 
    @Expose
    private int priority;
    @Expose
    private String description;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ProductBacklogItemDependency> backlogItemDependencies;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Story> stories;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Story> getStories() {
        return stories;
    }

    public void setStories(List<Story> stories) {
        this.stories = stories;
    }

    public List<ProductBacklogItemDependency> getBacklogItemDependencies() {
        return backlogItemDependencies;
    }

    public void setBacklogItemDependencies(List<ProductBacklogItemDependency> backlogItemDependencies) {
        this.backlogItemDependencies = backlogItemDependencies;
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

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the pbi_id fields are not set
        if (!(object instanceof ProductBacklogItem)) {
            return false;
        }
        ProductBacklogItem other = (ProductBacklogItem) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ProductBacklogItem{" + "id=" + id + ", priority=" + priority + ", description=" + description + ", backlogItemDependencies=" + backlogItemDependencies + ", stories=" + stories + '}';
    }

}
