/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.gantt.web.jar;

import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import tn.rnu.eniso.pms.gantt.ejb.MyService;

/**
 *
 * @author bacali
 */
@ManagedBean(name = "ganttController")
public class MainController {
    
    @EJB
    private MyService service;
    
    public void run(){
        service.businessMethod();
    }
}
