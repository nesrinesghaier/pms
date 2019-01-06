/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.entities.User;

/**
 *
 * @author nesrine
 */
@Stateless(name = "resourceService")
public class ResourceService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    @EJB
    private TaskConsumptionService consumptionService;

    public Resource add(Long userId, Long projectId, Resource resource) {
        User user = em.find(User.class, userId);
        if (user != null) {
            Project project = em.find(Project.class, projectId);
            if (project != null) {
                em.persist(resource);
                user.getResources().add(resource);
                project.getResources().add(resource);
                em.merge(project);
                em.merge(user);
                return resource;
            }
        }
        return null;
    }

    public Resource get(Long id) {
        Resource resource = em.find(Resource.class, id);
        if (resource != null) {
            return resource;
        }
        return null;
    }

    public List<Resource> getAll() {
        return em.createQuery("SELECT r FROM Resource r").getResultList();
    }

    public List<TaskConsumption> getAllConsumptions(Long id) {
        Resource resource = em.find(Resource.class, id);
        if (resource != null) {
            return resource.getTaskConsumptions();
        }
        return null;
    }

    public Resource update(Resource resource) {
        Resource resourceFromDb = em.find(Resource.class, resource.getId());
        if (resourceFromDb != null) {
            em.merge(resource);
            return resource;
        }
        return null;
    }

    public void delete(Long id) {
        Resource resource = em.find(Resource.class, id);
        if (resource != null) {
            List<TaskConsumption> consumptions = new ArrayList<>(resource.getTaskConsumptions());
            for (TaskConsumption consumption : consumptions) {
                consumptionService.delete(consumption.getId());
            }
            Project project = (Project) em.createQuery("SELECT p from Project p WHERE :r MEMBER OF p.resources")
                    .setParameter("r", resource).getSingleResult();
            if (project != null) {
                project.getResources().remove(resource);
                em.merge(project);
            }
            User user = (User) em.createQuery("SELECT u from User u WHERE :r MEMBER OF u.resources")
                    .setParameter("r", resource).getSingleResult();
            if (user != null) {
                user.getResources().remove(resource);
                em.merge(user);
            }
            em.remove(resource);
        }
    }

}
