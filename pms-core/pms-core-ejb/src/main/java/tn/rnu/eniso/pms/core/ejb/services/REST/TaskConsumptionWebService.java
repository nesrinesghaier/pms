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
    @Path("/task/{taskId}")
    public JsonObject addTaskConsumption(@PathParam("taskId") Long taskId, TaskConsumption taskConsumption) {
        if (taskConsumption != null) {
            TaskConsumption t = taskConsumptionService.add(taskConsumption, taskId);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @PUT
    @Path("/task/{id}")
    public JsonObject updateTaskConsumption(@PathParam("taskId") Long taskId,TaskConsumption taskConsumption) {
        if (taskConsumption != null) {
            TaskConsumption t = taskConsumptionService.update(taskId,taskConsumption);
            return JSONUtils.jsonify(t);
        }
        return JSONUtils.sendResourceNotFoundError();
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
    @Path("{taskId}/{id}")
    public JsonStructure deleteTaskConsumptionById(@PathParam("taskId") Long taskId, @PathParam("id") Long id) {
        System.out.println(taskId + " got " + id);
        taskConsumptionService.delete(taskId, id);
        return JSONUtils.jsonifyList(taskConsumptionService.getAll());
    }

}
