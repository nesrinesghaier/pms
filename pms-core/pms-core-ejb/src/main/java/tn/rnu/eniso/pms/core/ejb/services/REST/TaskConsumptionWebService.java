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
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.services.TaskConsumptionService;

/**
 *
 * @author ameni
 */
@Path("taskconsumption")
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
    @Path("/{taskId}/{resourceId}")
    public JsonObject addTaskConsumption(@PathParam("taskId") Long taskId,
            @PathParam("resourceId") Long resourceId, TaskConsumption consumption) {
        if (consumption != null) {
            consumption = taskConsumptionService.add(taskId, resourceId, consumption);
            if (consumption != null) {
                return JSONUtils.jsonify(consumption);
            }
            return JSONUtils.sendMessage("Task or Resource not found or they are not in the same Prject!!");
        }
        return JSONUtils.sendMessage("Bad formed data!!");
    }

    @PUT
    @Path("/task/{id}")
    public JsonObject updateTaskConsumption(@PathParam("taskId") Long taskId, TaskConsumption consumption) {
        if (consumption != null) {
            consumption = taskConsumptionService.update(consumption);
            return JSONUtils.jsonify(consumption);
        }
        return JSONUtils.sendMessage("Bad formed data!!");
    }

    @GET
    @Path("/task/{id}")
    public JsonStructure getConsumptions(@PathParam("id") Long id) {
        List<TaskConsumption> list = taskConsumptionService.getConsumption(id);
        if (!list.isEmpty()) {
            return JSONUtils.jsonifyList(list);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/{id}")
    public JsonStructure deleteTaskConsumptionById(@PathParam("id") Long id) {
        taskConsumptionService.delete(id);
        List<TaskConsumption> consumptions = taskConsumptionService.getAll();
        return JSONUtils.jsonifyList(consumptions);
    }

}
