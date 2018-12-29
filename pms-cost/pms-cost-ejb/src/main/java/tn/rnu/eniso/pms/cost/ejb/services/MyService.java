/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.cost.ejb.services;

import javax.ejb.Stateless;
import javax.ejb.LocalBean;

/**
 *
 * @author ameni
 */
@LocalBean
@Stateless
public class MyService {

    public void businessMethod() {
        System.out.println("cost Service!");
    }

}
