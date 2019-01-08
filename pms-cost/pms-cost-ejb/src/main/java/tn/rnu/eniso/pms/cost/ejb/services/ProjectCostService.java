/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.cost.ejb.services;

import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.cost.ejb.entities.ProjectCost;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.services.ProductBacklogItemService;
import tn.rnu.eniso.pms.core.ejb.services.ResourceService;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
/**
 *
 * @author ameni
 */
@Stateless(name = "projectcostService")
public class ProjectCostService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;
    
     @EJB
    private ResourceService resourceService;

    @EJB
    private ProductBacklogItemService backlogItemService;

    public ProjectCost add(ProjectCost cost) {
        em.persist(cost);
        return cost;
    }

    public ProjectCost get(Long id) {
        ProjectCost cost = em.find(ProjectCost.class, id);
        if (cost != null) {
            return cost;
        }
        return null;
    }

    public ProjectCost update(ProjectCost project) {
        ProjectCost projectFromDB = em.find(ProjectCost.class, project.getId());
        if (projectFromDB != null) {
            em.merge(project);
        }
        return project;
    }

    public void delete(Long id) {
        ProjectCost project = em.find(ProjectCost.class, id);
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
