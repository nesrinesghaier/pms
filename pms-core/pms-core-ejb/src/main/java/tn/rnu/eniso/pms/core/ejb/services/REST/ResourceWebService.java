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
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
import tn.rnu.eniso.pms.core.ejb.services.ResourceService;

/**
 *
 * @author nesrine
 */
@Path("resource")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ResourceWebService {

    @EJB(name = "resourceService")
    private ResourceService resourceService;

    @GET
    @Path("/{id}")
    public Response getResourceById(@PathParam("id") Long id) {
        Resource resource = resourceService.get(id);
        if (resource != null) {
            return Response.ok(Utils.jsonify(resource)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Resource not found!!"))
                .build();
    }

    @GET
    public Response getAllResources() {
        List<Resource> resources = resourceService.getAll();
        return Response.ok(Utils.jsonifyList(resources)).build();
    }

    @GET
    @Path("/{id}/consumptions")
    public Response getAllTasks(@PathParam("id") Long id) {
        List<TaskConsumption> consumptions = resourceService.getAllConsumptions(id);
        if (consumptions != null) {
            return Response.ok(Utils.jsonifyList(consumptions)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Resource not found!!"))
                .build();
    }

    @POST
    @Path("/{userId}/{projectId}")
    public Response addResource(@PathParam("userId") Long userId, @PathParam("projectId") Long projectId, Resource resource) {
        if (resource != null) {
            resource = resourceService.add(userId, projectId, resource);
            if (resource != null) {
                return Response.ok(Utils.jsonify(resource)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Project or User not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @PUT
    public Response updateResource(Resource resource) {
        if (resource != null) {
            resource = resourceService.update(resource);
            if (resource != null) {
                return Response.ok(Utils.jsonify(resource)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Resource not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteResource(@PathParam("id") Long id) {
        resourceService.delete(id);
        List<Resource> resources = resourceService.getAll();
        return Response.ok(Utils.jsonifyList(resources)).build();
    }
}
