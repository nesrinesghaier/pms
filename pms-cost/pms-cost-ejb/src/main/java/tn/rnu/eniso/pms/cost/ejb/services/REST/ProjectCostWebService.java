/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.cost.ejb.services.REST;

import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import static javax.ws.rs.HttpMethod.PUT;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import tn.rnu.eniso.pms.cost.ejb.entities.ProjectCost;
import tn.rnu.eniso.pms.cost.ejb.services.ProjectCostService;
import tn.rnu.eniso.pms.cost.ejb.utils.Utils;

/**
 *
 * @author ameni
 */
@Path("projectcost")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProjectCostWebService {

    @EJB(name = "projectcostService")
    private ProjectCostService projectCostService;

    @GET
    @Path("/{id}")
    public Response getProjectCostById(@PathParam("id") Long id) {
        ProjectCost project = projectCostService.get(id);
        if (project != null) {
            return Response.ok(Utils.jsonify(project)).build();
        }
        return Response.status(Status.NOT_FOUND).entity(Utils.sendMessage("Project not found!!")).build();
    }
    
    @PUT
    public Response updateProject(ProjectCost project) {
        if (project != null) {
            project = projectCostService.update(project);
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
}