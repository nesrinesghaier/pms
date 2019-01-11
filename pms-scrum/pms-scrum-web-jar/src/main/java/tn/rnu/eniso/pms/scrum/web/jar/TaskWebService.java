/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.scrum.web.jar;

import java.util.List;
import java.util.Map;
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
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.entities.TaskDependency;
import tn.rnu.eniso.pms.core.ejb.services.TaskService;

/**
 *
 * @author bacali
 */
@RestController
@RequestMapping("/ws/task")
public class TaskWebService {

    @Autowired
    private TaskService taskService;

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable("id") Long id) {
        Task task = taskService.get(id);
        if (task != null) {
            return new ResponseEntity<>(task, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskService.getAll();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @GetMapping("/{id}/consumptions")
    public ResponseEntity<List<TaskConsumption>> getAllConsumptions(@PathVariable("id") Long id) {
        List<TaskConsumption> consumptions = taskService.getAllConsumptions(id);
        if (consumptions != null) {
            return new ResponseEntity<>(consumptions, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/dependencies")
    public ResponseEntity<List<TaskDependency>> getAllDependencies(@PathVariable("id") Long id) {
        List<TaskDependency> dependencies = taskService.getAllDependencies(id);
        if (dependencies != null) {
            return new ResponseEntity<>(dependencies, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{storyId}")
    public ResponseEntity<Task> addTask(@PathVariable("storyId") Long storyId, @RequestBody Task task) {
        if (task != null) {
            task = taskService.add(storyId, task);
            if (task != null) {
                return new ResponseEntity<>(task, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/addDependency")
    public ResponseEntity<TaskDependency> addDependency(@RequestBody Map<String, Object> data) {
        if (data.containsKey("parentId") && data.containsKey("childId") && data.containsKey("type")) {
            Long parentId = Long.parseLong(data.get("parentId").toString());
            Long childId = Long.parseLong(data.get("childId").toString());
            String type = data.get("type").toString();
            TaskDependency dependency = taskService.addDependency(parentId, childId, type);
            if (dependency != null) {
                return new ResponseEntity<>(dependency, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<Task> updateTask(@RequestBody Task task) {
        if (task != null) {
            task = taskService.update(task);
            if (task != null) {
                return new ResponseEntity<>(task, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Task>> deleteTask(@PathVariable("id") Long id) {
        taskService.delete(id);
        List<Task> tasks = taskService.getAll();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

}
