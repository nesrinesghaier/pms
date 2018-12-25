/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso;

import javax.ejb.Stateless;
import javax.ejb.LocalBean;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.entities.Test;

/**
 *
 * @author martin
 */
@Stateless
@LocalBean
public class Service {

    @PersistenceContext
    private EntityManager em;
    
    public void businessMethod() {
        Test t = new Test();
        t.setName("ok");
        em.persist(t);
    }


}
