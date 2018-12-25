/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.scrum.web.jar;

import tn.rnu.eniso.pms.scrum.ejb.MyService;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

/**
 *
 * @author bacali
 */
@ManagedBean
public class MainController {
    
    @EJB
    private MyService service;
    
    public void run(){
        service.businessMethod();
    }
}
