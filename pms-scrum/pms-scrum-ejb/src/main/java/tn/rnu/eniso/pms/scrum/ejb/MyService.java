/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.scrum.ejb;

import javax.ejb.Stateless;
import javax.ejb.LocalBean;

/**
 *
 * @author martin
 */
@LocalBean
@Stateless
public class MyService {

    public void businessMethod() {
        System.out.println("Scrum Service!");
    }

}
