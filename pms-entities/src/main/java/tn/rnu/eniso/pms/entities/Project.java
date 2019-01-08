/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.entities;

import com.google.gson.annotations.Expose;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
@Table(name = "TBL_PROJECT")
public class Project implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Expose
    private Long id;
    @Expose
    private String name;
    @Expose
    private String logicName;
    @Expose
    private String creationDate;
    @Expose
    private String description;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ProductBacklogItem> productBacklogItems;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Resource> resources;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogicName() {
        return logicName;
    }

    public void setLogicName(String logicName) {
        this.logicName = logicName;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<ProductBacklogItem> getProductBacklogItems() {
        return productBacklogItems;
    }

    public void setProductBacklogItems(List<ProductBacklogItem> productBacklogItems) {
        this.productBacklogItems = productBacklogItems;
    }

    public List<Resource> getResources() {
        return resources;
    }

    public void setResources(List<Resource> resources) {
        this.resources = resources;
    }

    public String getStartDate(String startDate) {
        DateTimeFormatter inputFormat = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter outputFormat = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        return LocalDate.parse(startDate, inputFormat).format(outputFormat);
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the project_id fields are not set
        if (!(object instanceof Project)) {
            return false;
        }
        Project other = (Project) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Project{" + "id=" + id + ", name=" + name + ", logicName=" + logicName + ", creationDate=" + creationDate + ", description=" + description + ", productBacklogItems=" + productBacklogItems + ", resources=" + resources + '}';
    }

}
