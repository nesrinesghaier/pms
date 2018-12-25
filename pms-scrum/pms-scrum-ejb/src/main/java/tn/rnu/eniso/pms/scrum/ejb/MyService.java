/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.scrum.ejb;

import javax.ejb.Stateless;
import javax.ejb.LocalBean;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.scrum.ejb.entities.Test;

/**
 *
 * @author martin
 */
@Stateless
public class MyService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;
    
    public void businessMethod() {
        Test t = new Test();
        t.setName("ok");
        em.persist(t);
    }


}
