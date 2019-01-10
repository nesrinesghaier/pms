/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.web.jar;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.rnu.eniso.pms.core.ejb.entities.Budget;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.services.ProjectService;

/**
 *
 * @author nesrine
 */
@RestController
@RequestMapping("/ws/project")
public class ProjectWebService {

    @Autowired
    private ProjectService projectService;

    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable("id") Long id) {
        Project project = projectService.get(id);
        if (project != null) {
            return new ResponseEntity<>(project, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {
        List<Project> projects = projectService.getAll();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @GetMapping("/{id}/resources")
    public ResponseEntity<List<Resource>> getAllResources(@PathVariable("id") Long id) {
        List<Resource> resources = projectService.getAllResources(id);
        if (resources != null) {
            return new ResponseEntity<>(resources, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/budgets")
    public ResponseEntity<List<Budget>> getAllBudgets(@PathVariable("id") Long id) {
        List<Budget> budgets = projectService.getAllBudgets(id);
        if (budgets != null) {
            return new ResponseEntity<>(budgets, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/backlogItems")
    public ResponseEntity<List<ProductBacklogItem>> getAllBacklogItems(@PathVariable("id") Long id) {
        List<ProductBacklogItem> backlogItems = projectService.getAllBacklogItems(id);
        if (backlogItems != null) {
            return new ResponseEntity<>(backlogItems, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Project> addProject(@RequestBody Project project) {
        if (project != null) {
            project = projectService.add(project);
            if (project != null) {
                return new ResponseEntity<>(project, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<Project> updateProject(Project project) {
        if (project != null) {
            project = projectService.update(project);
            if (project != null) {
                return new ResponseEntity<>(project, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Project>> deleteProject(@PathVariable("id") Long id) {
        projectService.delete(id);
        List<Project> projects = projectService.getAll();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }
}
