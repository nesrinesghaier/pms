/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services.REST;

import java.util.List;
import java.util.Map;
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
import tn.rnu.eniso.pms.core.ejb.entities.DependencyType;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItemDependency;
import tn.rnu.eniso.pms.core.ejb.entities.Story;
import tn.rnu.eniso.pms.core.ejb.services.ProductBacklogItemService;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;

/**
 *
 * @author nesrine
 */
@Path("backlogitem")
@Produces("application/json")
@Consumes(MediaType.APPLICATION_JSON)
public class ProductBacklogItemWebService {

    @EJB(name = "backlogItemService")
    private ProductBacklogItemService backlogItemService;

    @GET
    @Path("/{id}")
    public JsonObject getProductBacklogItemById(@PathParam("id") Long id) {
        ProductBacklogItem backlogItem = backlogItemService.get(id);
        if (backlogItem != null) {
            return JSONUtils.jsonify(backlogItem);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @GET
    public JsonStructure getAllProductBacklogItems() {
        List<ProductBacklogItem> backlogItems = backlogItemService.getAll();
        return JSONUtils.jsonifyList(backlogItems);
    }

    @GET
    @Path("/{id}/stories")
    public JsonStructure getAllStories(@PathParam("id") Long id) {
        List<Story> stories = backlogItemService.getAllStories(id);
        return JSONUtils.jsonifyList(stories);
    }

    @GET
    @Path("/{id}/dependencies")
    public JsonStructure getAllDependencies(@PathParam("id") Long id) {
        List<ProductBacklogItemDependency> dependencies = backlogItemService.getAllDependencies(id);
        return JSONUtils.jsonifyList(dependencies);
    }

    @POST
    @Path("/{projectId}")
    public JsonObject addProductBacklogItem(@PathParam("projectId") Long projectId, ProductBacklogItem backlogItem) {
        if (backlogItem != null) {
            backlogItem = backlogItemService.add(projectId, backlogItem);
            if (backlogItem != null) {
                return JSONUtils.jsonify(backlogItem);
            }
            return JSONUtils.sendMessage("Project not found!!");
        }
        return JSONUtils.sendMessage("Bad formed data!!");
    }

    @POST
    @Path("/addDependency")
    public JsonObject addDependency(Map<String, Object> data) {
        if (data.containsKey("parentId") && data.containsKey("childId") && data.containsKey("type")) {
            Long parentId = Long.parseLong(data.get("parentId").toString());
            Long childId = Long.parseLong(data.get("childId").toString());
            String typeName = data.get("type").toString();
            DependencyType type = DependencyType.valueOf(typeName);
            if (type != null && backlogItemService.addDependency(parentId, childId, type)) {
                return JSONUtils.sendMessage("Added");
            }
            return JSONUtils.sendMessage("Dependency cycle found or Not Same Project!!");
        }
        return JSONUtils.sendMessage("Bad formed data!!");
    }

    @PUT
    public JsonObject updateProductBacklogItem(ProductBacklogItem backlogItem) {
        if (backlogItem != null) {
            ProductBacklogItem t = backlogItemService.update(backlogItem);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/{id}")
    public JsonStructure deleteProductBacklogItem(@PathParam("id") Long id) {
        backlogItemService.delete(id);
        List<ProductBacklogItem> backlogItems = backlogItemService.getAll();
        return JSONUtils.jsonifyList(backlogItems);
    }

}
