/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.cost.ejb.jar;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.cost.ejb.entities.Haja;

/**
 *
 * @author bacali
 */
@Stateless
public class MyService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public Haja add(String name) {
        Haja haja = new Haja();
        haja.setName(name);
        em.persist(haja);
        return haja;
    }

    public Haja get(String name) {
        List<Haja> list = em.createQuery("SELECT c FROM Haja c WHERE c.name LIKE :name")
                .setParameter("name", name)
                .getResultList();
        if (list.isEmpty()){
            return null;
        }
        return list.get(0);
    }

}
