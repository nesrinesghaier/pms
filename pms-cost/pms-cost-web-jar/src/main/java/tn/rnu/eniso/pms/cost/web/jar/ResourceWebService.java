/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.cost.web.jar;

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
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
import tn.rnu.eniso.pms.core.ejb.services.ResourceService;

/**
 *
 * @author ameni
 */
@RestController
@RequestMapping("/ws/resource")
public class ResourceWebService {

    @Autowired
    private ResourceService resourceService;

    
    @GetMapping("/{id}")
    public Response getResourceById(@PathVariable("id") Long id) {
        Resource resource = resourceService.get(id);
        if (resource != null) {
            return Response.ok(Utils.jsonify(resource)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Resource not found!!"))
                .build();
    }

    @GetMapping
    public Response getAllResources() {
        List<Resource> resources = resourceService.getAll();
        return Response.ok(Utils.jsonifyList(resources)).build();
    }

    
    @GetMapping("/{id}/consumptions")
    public Response getAllTasks(@PathVariable("id") Long id) {
        List<TaskConsumption> consumptions = resourceService.getAllConsumptions(id);
        if (consumptions != null) {
            return Response.ok(Utils.jsonifyList(consumptions)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Resource not found!!"))
                .build();
    }

    
    @PostMapping("/{userId}/{projectId}")
    public Response addResource(@PathVariable("userId") Long userId, @PathVariable("projectId") Long projectId, Resource resource) {
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

    @PutMapping
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

    
    @DeleteMapping("/{id}")
    public Response deleteResource(@PathVariable("id") Long id) {
        resourceService.delete(id);
        List<Resource> resources = resourceService.getAll();
        return Response.ok(Utils.jsonifyList(resources)).build();
    }
}
