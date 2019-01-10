/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.web.jar;

import java.util.List;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.rnu.eniso.pms.core.ejb.entities.Budget;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
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
    public Response getProjectById(@PathVariable("id") Long id) {
        Project project = projectService.get(id);
        if (project != null) {
            return Response.ok(Utils.jsonify(project)).build();
        }
        return Response.status(Status.NOT_FOUND).entity(Utils.sendMessage("Project not found!!")).build();
    }

    @GetMapping
    public Response getAllProjects() {
        List<Project> projects = projectService.getAll();
        return Response.ok(Utils.jsonifyList(projects)).build();
    }

    @GetMapping("/{id}/resources")
    public Response getAllResources(@PathVariable("id") Long id) {
        List<Resource> resources = projectService.getAllResources(id);
        if (resources != null) {
            return Response.ok(Utils.jsonifyList(resources)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Project not found!!"))
                .build();
    }

    @GetMapping("/{id}/budgets")
    public Response getAllBudgets(@PathVariable("id") Long id) {
        List<Budget> budgets = projectService.getAllBudgets(id);
        if (budgets != null) {
            return Response.ok(Utils.jsonifyList(budgets)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Budget not found!!"))
                .build();
    }

    @GetMapping("/{id}/backlogItems")
    public Response getAllBacklogItems(@PathVariable("id") Long id) {
        List<ProductBacklogItem> backlogItems = projectService.getAllBacklogItems(id);
        if (backlogItems != null) {
            return Response.ok(Utils.jsonifyList(backlogItems)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Project not found!!"))
                .build();
    }

    @PostMapping
    public Response addProject(Project project) {
        if (project != null) {
            project = projectService.add(project);
            if (project != null) {
                return Response.ok(Utils.jsonify(project)).build();
            }
            return Response.status(Status.INTERNAL_SERVER_ERROR)
                    .entity(Utils.sendMessage("Internal Error!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @PutMapping
    public Response updateProject(Project project) {
        if (project != null) {
            project = projectService.update(project);
            if (project != null) {
                return Response.ok(Utils.jsonify(project)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Project not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @DeleteMapping("/{id}")
    public Response deleteProject(@PathVariable("id") Long id) {
        projectService.delete(id);
        List<Project> projects = projectService.getAll();
        return Response.ok(Utils.jsonifyList(projects)).build();
    }
}
