/*
 * To change this license header, choose License Headers in ProductBacklogItem Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.DependencyType;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItemDependency;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.entities.Story;

/**
 *
 * @author nesrine
 */
@Stateless(name = "BacklogItemService")
public class ProductBacklogItemService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    @EJB
    private StoryService storyService;

    public ProductBacklogItem add(Long projectId, ProductBacklogItem backlogItem) {
        Project project = em.find(Project.class, projectId);
        if (project != null) {
            em.persist(backlogItem);
            project.getProductBacklogItems().add(backlogItem);
            em.merge(project);
            return backlogItem;
        }
        return null;
    }

    public ProductBacklogItem get(Long id) {
        ProductBacklogItem backlogItem = em.find(ProductBacklogItem.class, id);
        if (backlogItem != null) {
            return backlogItem;
        }
        return null;
    }

    public List<ProductBacklogItem> getAll() {
        return em.createQuery("SELECT p FROM ProductBacklogItem p").getResultList();
    }

    public List<ProductBacklogItemDependency> getAllDependencies(Long id) {
        ProductBacklogItem backlogItem = em.find(ProductBacklogItem.class, id);
        if (backlogItem != null) {
            return backlogItem.getBacklogItemDependencies();
        }
        return null;
    }

    public List<Story> getAllStories(Long id) {
        ProductBacklogItem backlogItem = em.find(ProductBacklogItem.class, id);
        if (backlogItem != null) {
            return backlogItem.getStories();
        }
        return null;
    }

    public ProductBacklogItem update(ProductBacklogItem item) {
        ProductBacklogItem t = em.find(ProductBacklogItem.class, item.getId());
        if (t != null) {
            em.merge(item);
            return item;
        }
        return null;
    }

    public void delete(Long id) {
        ProductBacklogItem backlogItem = em.find(ProductBacklogItem.class, id);
        if (backlogItem != null) {
            List<Story> stories = new ArrayList<>(backlogItem.getStories());
            for (Story story : stories) {
                storyService.delete(story.getId());
            }
            Project project = (Project) em.createQuery("SELECT p from Project p WHERE :b MEMBER OF p.productBacklogItems")
                    .setParameter("b", backlogItem).getSingleResult();
            if (project != null) {
                project.getProductBacklogItems().remove(backlogItem);
                em.merge(project);
            }
            em.remove(backlogItem);
        }
    }

    public ProductBacklogItemDependency addDependency(Long parentId, Long childId, String type) {
        ProductBacklogItem parent = em.find(ProductBacklogItem.class, parentId);
        ProductBacklogItem child = em.find(ProductBacklogItem.class, childId);
        if (parent != null && child != null && sameProject(parent, child) && !checkCycleDependency(child, parent.getId())) {
            ProductBacklogItemDependency dependency = new ProductBacklogItemDependency();
            dependency.setType(DependencyType.valueOf(type));
            dependency.setDestinationBacklogItem(child);
            em.persist(dependency);
            em.flush();
            parent.getBacklogItemDependencies().add(dependency);
            em.merge(parent);
            return dependency;
        }
        return null;
    }

    private boolean checkCycleDependency(ProductBacklogItem backlogItem, Long parentId) {
        if (Objects.equals(parentId, backlogItem.getId())) {
            return true;
        }
        for (ProductBacklogItemDependency dependency : backlogItem.getBacklogItemDependencies()) {
            if (checkCycleDependency(dependency.getDestinationBacklogItem(), parentId)) {
                return true;
            }
        }
        return false;
    }

    private boolean sameProject(ProductBacklogItem parent, ProductBacklogItem child) {
        Long projectId1 = (Long) em.createQuery("SELECT p.id FROM Project p WHERE :parent MEMBER OF p.productBacklogItems")
                .setParameter("parent", parent).getSingleResult();
        Long projectId2 = (Long) em.createQuery("SELECT p.id FROM Project p WHERE :child MEMBER OF p.productBacklogItems")
                .setParameter("child", child).getSingleResult();
        return Objects.equals(projectId1, projectId2);
    }
}
