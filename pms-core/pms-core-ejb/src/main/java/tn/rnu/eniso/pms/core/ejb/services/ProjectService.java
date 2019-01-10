/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import tn.rnu.eniso.pms.core.ejb.entities.Budget;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;

/**
 *
 * @author nesrine
 */
@Stateless(name = "projectService")
public class ProjectService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    @EJB
    private ResourceService resourceService;

    @EJB
    private ProductBacklogItemService backlogItemService;

    @Transactional
    public Project add(Project project) {
        em.persist(project);
        return project;
    }

    public String getStartDate(String startDate) {
        DateTimeFormatter inputFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter outputFormat = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return LocalDate.parse(startDate, inputFormat).format(outputFormat);
    }

    public Project get(Long id) {
        Project project = em.find(Project.class, id);
        if (project != null) {
            return project;
        }
        return null;
    }

    public List<Project> getAll() {
        return em.createQuery("SELECT p FROM Project p").getResultList();
    }

    public List<Resource> getAllResources(Long id) {
        Project project = em.find(Project.class, id);
        if (project != null) {
            return project.getResources();
        }
        return null;
    }

    public List<Budget> getAllBudgets(Long id) {
        Project project = em.find(Project.class, id);
        if (project != null) {
            return project.getBudgets();
        }
        return null;
    }

    public List<ProductBacklogItem> getAllBacklogItems(Long id) {
        Project project = em.find(Project.class, id);
        if (project != null) {
            return project.getProductBacklogItems();
        }
        return null;
    }

    @Transactional
    public Project update(Project project) {
        Project projectFromDB = em.find(Project.class, project.getId());
        if (projectFromDB != null) {
            em.merge(project);
        }
        return project;
    }

    
    @Transactional
    public void delete(Long id) {
        Project project = em.find(Project.class, id);
        if (project != null) {
            List<Resource> resources = new ArrayList<>(project.getResources());
            for (Resource resource : resources) {
                resourceService.delete(resource.getId());
            }
            List<ProductBacklogItem> backlogItems = new ArrayList<>(project.getProductBacklogItems());
            for (ProductBacklogItem item : backlogItems) {
                backlogItemService.delete(item.getId());
            }
            em.remove(project);
        }
    }

}
