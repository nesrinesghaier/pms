/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services.REST;

import java.util.List;
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
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
import tn.rnu.eniso.pms.core.ejb.services.TaskConsumptionService;

/**
 *
 * @author ameni
 */
@Path("taskconsumption")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskConsumptionWebService {

    @EJB(name = "taskConsumptionService")
    private TaskConsumptionService taskConsumptionService;

    @GET
    @Path("/{id}")
    public Response getTaskConsumptionById(@PathParam("id") Long id) {
        TaskConsumption consumption = taskConsumptionService.get(id);
        if (consumption != null) {
            return Response.ok(Utils.jsonify(consumption)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Task Consumption not found!!"))
                .build();
    }

    @GET
    public Response getAllTaskConsumptions() {
        List<TaskConsumption> consumptions = taskConsumptionService.getAll();
        return Response.ok(Utils.jsonifyList(consumptions)).build();
    }

    @POST
    @Path("/{taskId}/{resourceId}")
    public Response addTaskConsumption(@PathParam("taskId") Long taskId,
            @PathParam("resourceId") Long resourceId, TaskConsumption consumption) {
        if (consumption != null) {
            consumption = taskConsumptionService.add(taskId, resourceId, consumption);
            if (consumption != null) {
                return Response.ok(Utils.jsonify(consumption)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Task or Resource not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();

    }

    @PUT
    public Response updateTaskConsumption(TaskConsumption consumption) {
        if (consumption != null) {
            consumption = taskConsumptionService.update(consumption);
            if (consumption != null) {
                return Response.ok(Utils.jsonify(consumption)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Task Consumption not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteTaskConsumptionById(@PathParam("id") Long id) {
        taskConsumptionService.delete(id);
        List<TaskConsumption> consumptions = taskConsumptionService.getAll();
        return Response.ok(Utils.jsonifyList(consumptions)).build();
    }

}
