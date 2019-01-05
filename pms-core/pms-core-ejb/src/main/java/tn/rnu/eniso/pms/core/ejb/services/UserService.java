/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.User;

/**
 *
 * @author nesrine
 */
@Stateless(name = "userService")
public class UserService {

    static Logger logger = Logger.getGlobal();

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public User add(User user) {
        if (user != null) {
            User addedUser = new User();
            System.out.println(user);
            addedUser.setFirstName(user.getFirstName());
            addedUser.setLastName(user.getLastName());
            addedUser.setEmail(user.getEmail());
            addedUser.setAdress(user.getAdress());
            addedUser.setResources(new ArrayList<Resource>());
            em.persist(addedUser);
            return user;
        }
        return null;
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

    public void delete(Long id) {
        User user = em.find(User.class, id);
        if (user != null) {
            em.remove(user);
        }
    }

    public User update(User user) {
        Query query = em.createQuery("Select u FROM User u WHERE u.email = :email");
        User userFromDB = (User) query.setParameter("email", user.getEmail()).getResultList().get(0);
        user.setId(userFromDB.getId());
        em.merge(user);
        return user;
    }

}
