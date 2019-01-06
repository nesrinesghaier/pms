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
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.entities.TaskDependency;
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
    public JsonStructure getAllTasks() {
        List<Task> tasks = taskService.getAll();
        return JSONUtils.jsonifyList(tasks);
    }

    @GET
    @Path("/{id}/consumptions")
    public JsonStructure getAllConsumptions(@PathParam("id") Long id) {
        List<TaskConsumption> consumptions = taskService.getAllConsumptions(id);
        return JSONUtils.jsonifyList(consumptions);
    }

    @GET
    @Path("/{id}/dependencies")
    public JsonStructure getAllDependencies(@PathParam("id") Long id) {
        List<TaskDependency> dependencies = taskService.getAllDependencies(id);
        return JSONUtils.jsonifyList(dependencies);
    }

    @POST
    @Path("/{storyId}")
    public JsonObject addTask(@PathParam("storyId") Long storyId, Task task) {
        if (task != null) {
            task = taskService.add(storyId, task);
            if (task != null) {
                return JSONUtils.jsonify(task);
            }
            return JSONUtils.sendMessage("Story not found!!");
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
            if (type != null && taskService.addDependency(parentId, childId, type)) {
                return JSONUtils.sendMessage("Added");
            }
            return JSONUtils.sendMessage("Dependency cycle found!!");
        }
        return JSONUtils.sendMessage("Bad formed data!!");
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
