/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services.REST;

import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
import tn.rnu.eniso.pms.core.ejb.services.ProjectService;

/**
 *
 * @author nesrine
 */
@Path("project")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProjectWebService {

    @EJB(name = "projectService")
    private ProjectService projectService;

    @GET
    @Path("/{id}")
    public Response getProjectById(@PathParam("id") Long id) {
        Project project = projectService.get(id);
        if (project != null) {
            return Response.ok(Utils.jsonify(project)).build();
        }
        return Response.status(Status.NOT_FOUND).entity(Utils.sendMessage("Project not found!!")).build();
    }

    @GET
    public Response getAllProjects() {
        List<Project> projects = projectService.getAll();
        return Response.ok(Utils.jsonifyList(projects)).build();
    }

    @GET
    @Path("/{id}/resources")
    public Response getAllResources(@PathParam("id") Long id) {
        List<Resource> resources = projectService.getAllResources(id);
        if (resources != null) {
            return Response.ok(Utils.jsonifyList(resources)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Project not found!!"))
                .build();
    }

    @GET
    @Path("/{id}/backlogItems")
    public Response getAllBacklogItems(@PathParam("id") Long id) {
        List<ProductBacklogItem> backlogItems = projectService.getAllBacklogItems(id);
        if (backlogItems != null) {
            return Response.ok(Utils.jsonifyList(backlogItems)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Project not found!!"))
                .build();
    }

    @POST
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

    @PUT
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

    @DELETE
    @Path("/{id}")
    public Response deleteProject(@PathParam("id") Long id) {
        projectService.delete(id);
        List<Project> projects = projectService.getAll();
        return Response.ok(Utils.jsonifyList(projects)).build();
    }
}
