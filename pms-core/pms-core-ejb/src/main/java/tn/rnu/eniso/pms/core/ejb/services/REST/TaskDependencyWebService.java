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
import tn.rnu.eniso.pms.core.ejb.entities.TaskDependency;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.services.TaskDependencyService;

/**
 *
 * @author ameni
 */
@Path("taskdependency")
@Produces("application/json")
@Consumes(MediaType.APPLICATION_JSON)
public class TaskDependencyWebService {
        
    @EJB(name = "taskdependencyService")
    private TaskDependencyService taskDependencyService;
    
    @GET
    @Path("/{id}")
    public JsonObject getTaskDependencyById(@PathParam("id") Long id) {
        TaskDependency taskDependency = taskDependencyService.get(id);
        if (taskDependency != null) {
            return JSONUtils.jsonify(taskDependency);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @GET
    public JsonStructure getAllTaskDependencies() {
        List<TaskDependency> taskDependencies = taskDependencyService.getAll();
        return JSONUtils.jsonifyList(taskDependencies);
    }

    @POST
    public JsonObject addTaskDependency(@PathParam("taskId") Long taskId,TaskDependency taskDependency) {
        if (taskDependency != null) {
            TaskDependency t = taskDependencyService.add(taskDependency,taskId);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @PUT
    @Path("/task/{id}")
    public JsonObject updateTaskDependency(@PathParam("taskId") Long taskId,TaskDependency taskDependency) {
        if (taskDependency != null) {
            TaskDependency t = taskDependencyService.update(taskId,taskDependency);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/task/{taskId}/{id}")
    public JsonStructure deleteTaskDependencyById(@PathParam("taskId") Long taskId,@PathParam("id") Long id) {
        taskDependencyService.delete(taskId,id);
        return JSONUtils.jsonifyList(taskDependencyService.getAll());
    }
    
    @GET
    @Path("/task/{id}")
    public JsonStructure getConsumptions(@PathParam("id") Long id) {
        List<TaskDependency> listDependency = taskDependencyService.getTaskDependency(id);
        if (!listDependency.isEmpty()) {
            return JSONUtils.jsonifyList(listDependency);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

}
