/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services.REST;

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
import tn.rnu.eniso.pms.core.ejb.entities.DependencyType;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
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
    public List<ProductBacklogItem> getAllProductBacklogItems() {
        List<ProductBacklogItem> backlogItems = backlogItemService.getAll();
        return backlogItems;
    }

    @POST
    public JsonObject addProductBacklogItem(ProductBacklogItem backlogItem) {
        if (backlogItem != null) {
            ProductBacklogItem t = backlogItemService.add(backlogItem);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @POST
    @Path("/{parentId}/{childId}")
    public JsonObject addDependency(@PathParam("parentId") Long parentId,
            @PathParam("childId") Long childId,
            String dependencyType) {
        DependencyType type = DependencyType.getEnum(dependencyType);
        if (backlogItemService.addDependency(parentId, childId, type)) {
            return JSONUtils.sendMessage("Added");
        }
        return JSONUtils.sendMessage("Dependency cycle found!!");

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