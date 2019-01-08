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
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.User;
/**
 *
 * @author nesrine
 */
@Stateless(name = "userService")
public class UserService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    @EJB
    private ResourceService resourceService;

    public User add(User user) {
        em.persist(user);
        return user;
    }

    public User get(Long id) {
        User user = em.find(User.class, id);
        if (user != null) {
            return user;
        }
        return null;
    }

    public List<User> getAll() {
        return em.createQuery("SELECT u FROM User u").getResultList();
    }

    public List<Resource> getAllResources(Long id) {
        User user = em.find(User.class, id);
        if (user != null) {
            return user.getResources();
        }
        return null;
    }

    public User update(User user) {
        User userFromDb = em.find(User.class, user.getId());
        if (userFromDb != null) {
            em.merge(user);
            return user;
        }
        return null;
    }

    public void delete(Long id) {
        User user = em.find(User.class, id);
        if (user != null) {
            List<Resource> resources = new ArrayList<>(user.getResources());
            for (Resource resource : resources) {
                resourceService.delete(resource.getId());
            }
            em.remove(user);
        }
    }

}
