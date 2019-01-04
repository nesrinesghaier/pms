/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.utils.service.RESTWebservice;

import java.util.List;
import javax.ejb.EJB;
import javax.json.JsonObject;
import javax.json.JsonStructure;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.utils.service.ProjectService;

/**
 *
 * @author nesrine
 */
@Path("project")
@Produces("application/json")
@Consumes(MediaType.APPLICATION_JSON)
public class ProjectWebService {

    @EJB(name = "projectService")
    private ProjectService projectService;

    @GET
    @Path("/{id}")
    public JsonObject getProjectById(@PathParam("id") Long id) {
        Project project = projectService.get(id);
        if (project != null) {
            return JSONUtils.jsonify(project);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @GET
    public JsonStructure getAllProjects() {
        List<Project> projects = projectService.getAll();
        return JSONUtils.jsonifyList(projects);
    }

    @POST
    public JsonObject addProject(Project project) {
        if (project != null) {
            Project p = projectService.add(project);
            return JSONUtils.jsonify(p);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @PUT
    @Path("/{id}")
    public JsonObject updateProject(@PathParam("id") Long id, Project project) {
        if (project != null) {
            Project p = projectService.update(id, project);
            return JSONUtils.jsonify(p);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/{id}")
    public JsonStructure deleteProject(@PathParam("id") Long id) {
        projectService.delete(id);
        List<Project> projects = projectService.getAll();
        return JSONUtils.jsonifyList(projects);
    }
}
