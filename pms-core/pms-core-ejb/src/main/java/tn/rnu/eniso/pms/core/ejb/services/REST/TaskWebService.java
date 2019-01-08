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
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.entities.TaskDependency;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
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
    public Response getTaskById(@PathParam("id") Long id) {
        Task task = taskService.get(id);
        if (task != null) {
            return Response.ok(Utils.jsonify(task)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Task not found!!"))
                .build();
    }

    @GET
    public Response getAllTasks() {
        List<Task> tasks = taskService.getAll();
        return Response.ok(Utils.jsonifyList(tasks)).build();
    }

    @GET
    @Path("/{id}/consumptions")
    public Response getAllConsumptions(@PathParam("id") Long id) {
        List<TaskConsumption> consumptions = taskService.getAllConsumptions(id);
        if (consumptions != null) {
            return Response.ok(Utils.jsonifyList(consumptions)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Task not found!!"))
                .build();
    }

    @GET
    @Path("/{id}/dependencies")
    public Response getAllDependencies(@PathParam("id") Long id) {
        List<TaskDependency> dependencies = taskService.getAllDependencies(id);
        if (dependencies != null) {
            return Response.ok(Utils.jsonifyList(dependencies)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Task not found!!"))
                .build();
    }

    @POST
    @Path("/{storyId}")
    public Response addTask(@PathParam("storyId") Long storyId, Task task) {
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

    @POST
    @Path("/addDependency")
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

    @PUT
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

    @DELETE
    @Path("/{id}")
    public Response deleteTask(@PathParam("id") Long id) {
        taskService.delete(id);
        List<Task> tasks = taskService.getAll();
        return Response.ok(Utils.jsonifyList(tasks)).build();
    }

}
