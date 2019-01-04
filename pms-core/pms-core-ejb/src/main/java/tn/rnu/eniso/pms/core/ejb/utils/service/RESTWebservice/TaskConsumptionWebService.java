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
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.utils.service.TaskConsumptionService;
/**
 *
 * @author ameni
 */

@Path("taskConsumption")
@Produces("application/json")
@Consumes(MediaType.APPLICATION_JSON)
public class TaskConsumptionWebService {
    @EJB(name = "taskConsumptionService")
    private TaskConsumptionService taskConsumptionService;
    
    @GET
    @Path("/{id}")
    public JsonObject getTaskConsumptionById(@PathParam("id") Long id) {
        TaskConsumption taskConsumption = taskConsumptionService.get(id);
        if (taskConsumption != null) {
            return JSONUtils.jsonify(taskConsumption);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @GET
    public JsonStructure getAllTaskConsumptions() {
        List<TaskConsumption> taskConsumptions = taskConsumptionService.getAll();
        return JSONUtils.jsonifyList(taskConsumptions);
    }

    @POST
    public JsonObject addTaskConsumption(TaskConsumption taskConsumption) {
        if (taskConsumption != null) {
            TaskConsumption t = taskConsumptionService.add(taskConsumption);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @PUT
    public JsonObject updateTaskConsumption(TaskConsumption taskConsumption) {
        if (taskConsumption != null) {
            TaskConsumption t = taskConsumptionService.update(taskConsumption);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/{id}")
    public JsonStructure deleteTaskConsumption(@PathParam("id") Long id) {
        taskConsumptionService.delete(id);
        List<TaskConsumption> taskConsumptions = taskConsumptionService.getAll();
        return JSONUtils.jsonifyList(taskConsumptions);
    }

}
