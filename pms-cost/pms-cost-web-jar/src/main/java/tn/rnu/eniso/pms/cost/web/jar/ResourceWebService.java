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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
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
    public ResponseEntity<Resource> getResourceById(@PathVariable("id") Long id) {
        Resource resource = resourceService.get(id);
        if (resource != null) {
             return new ResponseEntity<>(resource, HttpStatus.OK);
        }
       return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<Resource>> getAllResources() {
        List<Resource> resources = resourceService.getAll();
         return new ResponseEntity<>(resources, HttpStatus.OK);
    }

    
    @GetMapping("/{id}/consumptions")
    public ResponseEntity<List<TaskConsumption>> getAllTasks(@PathVariable("id") Long id) {
        List<TaskConsumption> consumptions = resourceService.getAllConsumptions(id);
        if (consumptions != null) {
             return new ResponseEntity<>(consumptions, HttpStatus.OK);
        }
       return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    
    @PostMapping("/{userId}/{projectId}")
    public ResponseEntity<Resource> addResource(@PathVariable("userId") Long userId, @PathVariable("projectId") Long projectId,@RequestBody Resource resource) {
        if (resource != null) {
            resource = resourceService.add(userId, projectId, resource);
            if (resource != null) {
                return new ResponseEntity<>(resource, HttpStatus.OK);
            }
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
       return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<Resource> updateResource(@RequestBody Resource resource) {
        if (resource != null) {
            resource = resourceService.update(resource);
            if (resource != null) {
               return new ResponseEntity<>(resource, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<List<Resource>> deleteResource(@PathVariable("id") Long id) {
        resourceService.delete(id);
        List<Resource> resources = resourceService.getAll();
        return new ResponseEntity<>(resources, HttpStatus.OK);
    }
}
