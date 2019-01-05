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
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.services.TaskService;

/**
 *
 * @author ameni
 */
@Path("task")
@Produces("application/json")
@Consumes(MediaType.APPLICATION_JSON)
public class TaskWebService {

    @EJB(name = "taskService")
    private TaskService taskService;

    @GET
    @Path("/{id}")
    public JsonObject getTaskById(@PathParam("id") Long id) {
        Task task = taskService.get(id);
        if (task != null) {
            return JSONUtils.jsonify(task);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @GET
    public List<Task> getAllTasks() {
        List<Task> tasks = taskService.getAll();
        return tasks;
    }

    @POST
    public JsonObject addTask(Task task) {
        if (task != null) {
            Task t = taskService.add(task);
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
        if (taskService.addDependency(parentId, childId, type)) {
            return JSONUtils.sendMessage("Added");
        }
        return JSONUtils.sendMessage("Dependency cycle found!!");

    }

    @PUT
    public JsonObject updateTask(Task task) {
        if (task != null) {
            Task t = taskService.update(task);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/{id}")
    public JsonStructure deleteTask(@PathParam("id") Long id) {
        taskService.delete(id);
        List<Task> tasks = taskService.getAll();
        return JSONUtils.jsonifyList(tasks);
    }

}
