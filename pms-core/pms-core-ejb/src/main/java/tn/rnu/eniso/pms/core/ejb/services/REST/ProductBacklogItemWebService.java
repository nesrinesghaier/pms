/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services.REST;

import java.util.List;
import java.util.Map;
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
import tn.rnu.eniso.pms.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.entities.ProductBacklogItemDependency;
import tn.rnu.eniso.pms.entities.Story;
import tn.rnu.eniso.pms.core.ejb.services.ProductBacklogItemService;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;

/**
 *
 * @author nesrine
 */
@Path("backlogitem")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProductBacklogItemWebService {

    @EJB(name = "backlogItemService")
    private ProductBacklogItemService backlogItemService;

    @GET
    @Path("/{id}")
    public Response getProductBacklogItemById(@PathParam("id") Long id) {
        ProductBacklogItem backlogItem = backlogItemService.get(id);
        if (backlogItem != null) {
            return Response.ok(Utils.jsonify(backlogItem)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Product Backlog Item not found!!"))
                .build();
    }

    @GET
    public Response getAllProductBacklogItems() {
        List<ProductBacklogItem> backlogItems = backlogItemService.getAll();
        return Response.ok(Utils.jsonifyList(backlogItems)).build();
    }

    @GET
    @Path("/{id}/stories")
    public Response getAllStories(@PathParam("id") Long id) {
        List<Story> stories = backlogItemService.getAllStories(id);
        if (stories != null) {
            return Response.ok(Utils.jsonifyList(stories)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Product Backlog Item not found!!"))
                .build();
    }

    @GET
    @Path("/{id}/dependencies")
    public Response getAllDependencies(@PathParam("id") Long id) {
        List<ProductBacklogItemDependency> dependencies = backlogItemService.getAllDependencies(id);
        if (dependencies != null) {
            return Response.ok(Utils.jsonifyList(dependencies)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Product Backlog Item not found!!"))
                .build();
    }

    @POST
    @Path("/{projectId}")
    public Response addProductBacklogItem(@PathParam("projectId") Long projectId, ProductBacklogItem backlogItem) {
        if (backlogItem != null) {
            backlogItem = backlogItemService.add(projectId, backlogItem);
            if (backlogItem != null) {
                return Response.ok(Utils.jsonify(backlogItem)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Project not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @POST
    @Path("/addDependency")
    public Response addDependency(Map<String, Object> data) {
        if (data.containsKey("parentId") && data.containsKey("childId") && data.containsKey("type")) {
            Long parentId = Long.parseLong(data.get("parentId").toString());
            Long childId = Long.parseLong(data.get("childId").toString());
            String type = data.get("type").toString();
            ProductBacklogItemDependency dependency = backlogItemService.addDependency(parentId, childId, type);
            if (dependency != null) {
                return Response.ok(Utils.jsonify(dependency)).build();
            }
            return Response.status(Status.CONFLICT)
                    .entity(Utils.sendMessage("Dependency cycle found or Not Same Project!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @PUT
    public Response updateProductBacklogItem(ProductBacklogItem backlogItem) {
        if (backlogItem != null) {
            backlogItem = backlogItemService.update(backlogItem);
            if (backlogItem != null) {
                return Response.ok(Utils.jsonify(backlogItem)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Product Backlog Item not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteProductBacklogItem(@PathParam("id") Long id) {
        backlogItemService.delete(id);
        List<ProductBacklogItem> backlogItems = backlogItemService.getAll();
        return Response.ok(Utils.jsonifyList(backlogItems)).build();
    }

}
