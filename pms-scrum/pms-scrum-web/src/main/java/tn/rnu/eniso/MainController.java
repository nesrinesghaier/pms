/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

/**
 *
 * @author bacali
 */
@ManagedBean
public class MainController {
    
    @EJB
    private Service service;
    
    public void run(){
        service.businessMethod();
    }
}
