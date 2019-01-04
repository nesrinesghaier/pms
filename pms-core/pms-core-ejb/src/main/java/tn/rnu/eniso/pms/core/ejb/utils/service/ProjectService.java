/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.utils.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;

/**
 *
 * @author nesrine
 */
@Stateless(name = "projectService")
public class ProjectService {

    static final Logger logger = Logger.getGlobal();

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public Project add(Project project) {
        if (project != null) {
            Project addedProject = new Project();
            System.out.println(project);
            addedProject.setName(project.getName());
            addedProject.setLogicName(project.getLogicName());
            addedProject.setDescription(project.getDescription());
            addedProject.setCreationDate(getStartDate(project.getCreationDate()));
            addedProject.setProductBacklogItems(new ArrayList<ProductBacklogItem>());
            addedProject.setResources(new ArrayList<Resource>());
            em.persist(project);
            return project;
        }
        return null;
    }

    public String getStartDate(String startDate) {
        DateTimeFormatter inputFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter outputFormat = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        logger.log(Level.SEVERE, LocalDate.parse(startDate, inputFormat).format(outputFormat));
        return LocalDate.parse(startDate, inputFormat).format(outputFormat);
    }

    public Project get(Long id) {
        Project project = em.find(Project.class, id);
        if (project != null) {
            return project;
        }
        return null;
    }

    public List<Project> getAll() {
        return em.createQuery("SELECT p FROM Project p").getResultList();
    }

    public void delete(Long id) {
        Project project = em.find(Project.class, id);
        if (project != null) {
            em.remove(project);
        }
    }

    public Project update(Long id, Project project) {
        Project projectFromDB = em.find(Project.class, id);
        project.setId(projectFromDB.getId());
        em.merge(project);
        return project;
    }
}
