/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services.REST;

import java.util.List;
import java.util.logging.Logger;
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
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.services.ResourceService;

/**
 *
 * @author nesrine
 */
@Path("resource")
@Produces("application/json")
@Consumes(MediaType.APPLICATION_JSON)
public class ResourceWebService {

    @EJB(name = "resourceService")
    private ResourceService resourceService;
    static final Logger logger = Logger.getGlobal();

    @GET
    @Path("/{id}")
    public JsonObject getResourceById(@PathParam("id") Long id) {
        Resource resource = resourceService.get(id);
        if (resource != null) {
            return JSONUtils.jsonify(resource);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @GET
    public JsonStructure getAllResources() {
        List<Resource> resources = resourceService.getAll();
        return JSONUtils.jsonifyList(resources);
    }

    @GET
    @Path("/{id}/consumptions")
    public JsonStructure getAllTasks(@PathParam("id") Long id) {
        List<TaskConsumption> consumptions = resourceService.getAllConsumptions(id);
        return JSONUtils.jsonifyList(consumptions);
    }

    @POST
    @Path("/{userId}/{projectId}")
    public JsonObject addResource(@PathParam("userId") Long userId, @PathParam("projectId") Long projectId, Resource resource) {
        if (resource != null) {
            resource = resourceService.add(userId, projectId, resource);
            if (resource != null) {
                return JSONUtils.jsonify(resource);
            }
            return JSONUtils.sendMessage("User or Project not found!!");
        }
        return JSONUtils.sendMessage("Bad formed data!!");
    }

    @PUT
    public JsonObject updateResource(Resource resource) {
        if (resource != null) {
            Resource u = resourceService.update(resource);
            return JSONUtils.jsonify(u);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/{id}")
    public JsonStructure deleteResource(@PathParam("id") Long id) {
        resourceService.delete(id);
        List<Resource> resources = resourceService.getAll();
        return JSONUtils.jsonifyList(resources);
    }
}
