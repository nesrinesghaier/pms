/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso;

import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

/**
 *
 * @author nesrine
 */
@ManagedBean
@SessionScoped
public class TestController {
    
    @EJB
    TestService service;
    
    public void testMethod(){
        service.test();
    }
    
}
