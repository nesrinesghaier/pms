/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.entities;

import com.google.gson.annotations.Expose;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 *
 * @author bacali
 */
@Entity
@Table(name = "TBL_PRODUCT_BACKLOG_ITEM_DEPENDENCY")
public class ProductBacklogItemDependency implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Expose
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Expose
    private DependencyType type;
    @Expose
    @OneToOne
    private ProductBacklogItem destinationBacklogItem;

    public DependencyType getType() {
        return type;
    }

    public void setType(DependencyType type) {
        this.type = type;
    }

    public ProductBacklogItem getDestinationBacklogItem() {
        return destinationBacklogItem;
    }

    public void setDestinationBacklogItem(ProductBacklogItem destinationBacklogItem) {
        this.destinationBacklogItem = destinationBacklogItem;
    }

    public ProductBacklogItemDependency() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the pbid_id fields are not set
        if (!(object instanceof ProductBacklogItemDependency)) {
            return false;
        }
        ProductBacklogItemDependency other = (ProductBacklogItemDependency) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ProductBacklogItemDependency{" + "id=" + id + ", destinationBacklogItem=" + destinationBacklogItem + ", type=" + type + '}';
    }
}