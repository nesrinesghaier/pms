/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.gantt.web.jar;

import java.util.Collection;
import java.util.List;
import java.util.Map;
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
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItemDependency;
import tn.rnu.eniso.pms.core.ejb.entities.Story;
import tn.rnu.eniso.pms.core.ejb.services.ProductBacklogItemService;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;

/**
 *
 * @author nesrine
 */
@RestController
@RequestMapping("/ws/story")
public class ProductBacklogItemWebService {

    @Autowired
    private ProductBacklogItemService backlogItemService;

    @GetMapping("/{id}")
    public ResponseEntity<ProductBacklogItem> getProductBacklogItemById(@PathVariable("id") Long id) {
        ProductBacklogItem backlogItem = backlogItemService.get(id);
        if (backlogItem != null) {
            return new ResponseEntity<>(backlogItem, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<Collection<ProductBacklogItem>> getAllProductBacklogItems() {
        List<ProductBacklogItem> backlogItems = backlogItemService.getAll();
        return new ResponseEntity<>(backlogItems, HttpStatus.OK);
    }

    @GetMapping("/{id}/stories")
    public ResponseEntity<Collection<Story>> getAllStories(@PathVariable("id") Long id) {
        List<Story> stories = backlogItemService.getAllStories(id);
        if (stories != null) {
            return new ResponseEntity<>(stories, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/dependencies")
    public ResponseEntity<Collection<ProductBacklogItemDependency>> getAllDependencies(@PathVariable("id") Long id) {
        List<ProductBacklogItemDependency> dependencies = backlogItemService.getAllDependencies(id);
        if (dependencies != null) {
            return new ResponseEntity<>(dependencies, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{projectId}")
    public ResponseEntity<ProductBacklogItem> addProductBacklogItem(@PathVariable("projectId") Long projectId, @RequestBody ProductBacklogItem backlogItem) {
        if (backlogItem != null) {
            backlogItem = backlogItemService.add(projectId, backlogItem);
            if (backlogItem != null) {
                return new ResponseEntity<>(backlogItem, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/addDependency")
    public ResponseEntity<ProductBacklogItemDependency> addDependency(@RequestBody Map<String, Object> data) {
        if (data.containsKey("parentId") && data.containsKey("childId") && data.containsKey("type")) {
            Long parentId = Long.parseLong(data.get("parentId").toString());
            Long childId = Long.parseLong(data.get("childId").toString());
            String type = data.get("type").toString();
            ProductBacklogItemDependency dependency = backlogItemService.addDependency(parentId, childId, type);
            if (dependency != null) {
                return new ResponseEntity<>(dependency, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.LOOP_DETECTED);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<ProductBacklogItem> updateProductBacklogItem(@RequestBody ProductBacklogItem backlogItem) {
        if (backlogItem != null) {
            backlogItem = backlogItemService.update(backlogItem);
            if (backlogItem != null) {
                return new ResponseEntity<>(backlogItem, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Collection<ProductBacklogItem>> deleteProductBacklogItem(@PathVariable("id") Long id) {
        backlogItemService.delete(id);
        List<ProductBacklogItem> backlogItems = backlogItemService.getAll();
        return new ResponseEntity<>(backlogItems, HttpStatus.OK);
    }

}
