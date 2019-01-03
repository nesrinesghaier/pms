/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.utils.service;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.Project;

/**
 *
 * @author nesrine
 */

@Stateless(name = "projectService")
public class ProjectService {
    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;
    
    
    public Project add(Project project){
        if(project!=null){
            em.persist(project);
            return project;
        }
        return null;
    }
    public Project get(Long id){
        Project project = em.find(Project.class,id);
        if(project!=null){
            return project;
        }
        return null;
    }
    public void delete(Project project){
        if(project!=null){
            em.remove(project);;
        }
    }
    public Project update(Project project){
        if(project!=null){
            em.refresh(project);
            return project;
        }
        return null;
    }
}
