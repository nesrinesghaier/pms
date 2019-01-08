/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.cost.ejb.entities;

/**
 *
 * @author ameni
 */


import com.google.gson.annotations.Expose;
import java.util.Map;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.Table;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
@Entity
@Table(name = "TBL_PROJECTCOST")
public class ProjectCost extends Project{
    @Expose
    private Map<String,Long> budget;

    public ProjectCost() {
    }

    public Map<String, Long> getBudget() {
        return budget;
    }

    public void setBudget(Map<String, Long> budget) {
        this.budget = budget;
    }

    @Override
    public String toString() {
        return "ProjectCost{" + "budget=" + budget + '}';
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 97 * hash + Objects.hashCode(this.budget);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final ProjectCost other = (ProjectCost) obj;
        if (!Objects.equals(this.budget, other.budget)) {
            return false;
        }
        return true;
    }

    
}

