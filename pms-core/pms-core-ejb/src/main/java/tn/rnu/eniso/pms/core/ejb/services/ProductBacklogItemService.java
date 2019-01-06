/*
 * To change this license header, choose License Headers in ProductBacklogItem Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.List;
import java.util.Objects;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.DependencyType;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItemDependency;

/**
 *
 * @author nesrine
 */
@Stateless(name = "BacklogItemService")
public class ProductBacklogItemService {

    static final Logger logger = Logger.getGlobal();

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public ProductBacklogItem add(ProductBacklogItem backlogItem) {
        if (backlogItem != null) {
            em.persist(backlogItem);
            em.flush();
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

    public void delete(Long id) {
        ProductBacklogItem backlogItem = em.find(ProductBacklogItem.class, id);
        if (backlogItem != null) {
            em.remove(backlogItem);
            em.flush();
        }
    }

    public ProductBacklogItem update(ProductBacklogItem item) {
        if (item != null) {
            ProductBacklogItem t = em.find(ProductBacklogItem.class, item.getId());
            if (t != null) {
                em.merge(item);
                em.flush();
                return item;
            }
        }
        return null;
    }

    public boolean addDependency(Long parentId, Long childId, DependencyType type) {
        ProductBacklogItem parent = em.find(ProductBacklogItem.class, parentId);
        ProductBacklogItem child = em.find(ProductBacklogItem.class, childId);
        if (parent != null && child != null && !checkCycleDependency(child, parent.getId())) {
            ProductBacklogItemDependency dependency = new ProductBacklogItemDependency();
            dependency.setType(type);
            dependency.setDestinationBacklogItem(child);
            em.persist(dependency);
            em.flush();
            parent.getBacklogItemDependencies().add(dependency);
            em.merge(parent);
            return true;
        }
        return false;
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
}
