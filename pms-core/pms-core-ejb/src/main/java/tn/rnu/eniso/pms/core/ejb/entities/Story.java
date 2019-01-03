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
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author bacali
 */
@Entity
@Table(name = "TBL_STORY")
public class Story implements Serializable  {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long story_id;
    private String actorUser;
    private String action;
    private String purpose;
    private int complexity;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pbi_id")
    private ProductBacklogItem productBacklogItem; 
    
    public Story() {
    }
    
    public Long getId() {
        return story_id;
    }

    public void setId(Long id) {
        this.story_id = id;
    }

    public String getActorUser() {
        return actorUser;
    }

    public void setActorUser(String actorUser) {
        this.actorUser = actorUser;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public int getComplexity() {
        return complexity;
    }

    public void setComplexity(int complexity) {
        this.complexity = complexity;
    }

    public ProductBacklogItem getProductBacklogItem() {
        return productBacklogItem;
    }

    public void setProductBacklogItem(ProductBacklogItem backlogItem) {
        this.productBacklogItem = backlogItem;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (story_id != null ? story_id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the story_id fields are not set
        if (!(object instanceof Story)) {
            return false;
        }
        Story other = (Story) object;
        if ((this.story_id == null && other.story_id != null) || (this.story_id != null && !this.story_id.equals(other.story_id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "tn.rnu.eniso.pms.core.ejb.entities.Story[ id=" + story_id + " ]";
    }
    
}
