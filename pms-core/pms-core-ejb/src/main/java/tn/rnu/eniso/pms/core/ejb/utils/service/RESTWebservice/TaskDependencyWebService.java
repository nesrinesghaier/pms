/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.utils.service.RESTWebservice;

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
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.entities.TaskDependency;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.utils.service.TaskDependencyService;
import tn.rnu.eniso.pms.core.ejb.utils.service.TaskService;

/**
 *
 * @author ameni
 */
@Path("taskDependency")
@Produces("application/json")
@Consumes(MediaType.APPLICATION_JSON)
public class TaskDependencyWebService {
        
    @EJB(name = "taskDependencyService")
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
    public JsonObject addTaskDependency(TaskDependency taskDependency) {
        if (taskDependency != null) {
            TaskDependency t = taskDependencyService.add(taskDependency);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @PUT
    public JsonObject updateTaskDependency(TaskDependency taskDependency) {
        if (taskDependency != null) {
            TaskDependency t = taskDependencyService.update(taskDependency);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/{id}")
    public JsonStructure deleteTaskDependency(@PathParam("id") Long id) {
        taskDependencyService.delete(id);
        List<TaskDependency> taskDependencies = taskDependencyService.getAll();
        return JSONUtils.jsonifyList(taskDependencies);
    }

}
