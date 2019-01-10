/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.scrum.web.jar;

import java.util.List;
import java.util.Map;
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
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.entities.TaskDependency;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
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
    public Response getTaskById(@PathVariable("id") Long id) {
        Task task = taskService.get(id);
        if (task != null) {
            return Response.ok(Utils.jsonify(task)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Task not found!!"))
                .build();
    }

    @GetMapping
    public Response getAllTasks() {
        List<Task> tasks = taskService.getAll();
        return Response.ok(Utils.jsonifyList(tasks)).build();
    }

    @GetMapping("/{id}/consumptions")
    public Response getAllConsumptions(@PathVariable("id") Long id) {
        List<TaskConsumption> consumptions = taskService.getAllConsumptions(id);
        if (consumptions != null) {
            return Response.ok(Utils.jsonifyList(consumptions)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Task not found!!"))
                .build();
    }

    @GetMapping("/{id}/dependencies")
    public Response getAllDependencies(@PathVariable("id") Long id) {
        List<TaskDependency> dependencies = taskService.getAllDependencies(id);
        if (dependencies != null) {
            return Response.ok(Utils.jsonifyList(dependencies)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Task not found!!"))
                .build();
    }

    @PostMapping("/{storyId}")
    public Response addTask(@PathVariable("storyId") Long storyId, Task task) {
        if (task != null) {
            task = taskService.add(storyId, task);
            if (task != null) {
                return Response.ok(Utils.jsonify(task)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Story not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @PostMapping("/addDependency")
    public Response addDependency(Map<String, Object> data) {
        if (data.containsKey("parentId") && data.containsKey("childId") && data.containsKey("type")) {
            Long parentId = Long.parseLong(data.get("parentId").toString());
            Long childId = Long.parseLong(data.get("childId").toString());
            String type = data.get("type").toString();
            TaskDependency dependency = taskService.addDependency(parentId, childId, type);
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

    @PutMapping
    public Response updateTask(Task task) {
        if (task != null) {
            task = taskService.update(task);
            if (task != null) {
                return Response.ok(Utils.jsonify(task)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Task not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @DeleteMapping("/{id}")
    public Response deleteTask(@PathVariable("id") Long id) {
        taskService.delete(id);
        List<Task> tasks = taskService.getAll();
        return Response.ok(Utils.jsonifyList(tasks)).build();
    }

}
