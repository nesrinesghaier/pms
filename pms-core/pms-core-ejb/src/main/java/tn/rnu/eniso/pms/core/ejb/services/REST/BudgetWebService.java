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
import tn.rnu.eniso.pms.core.ejb.entities.Budget;
import tn.rnu.eniso.pms.core.ejb.services.BudgetService;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;

/**
 *
 * @author ameni
 */
@Path("budget")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class BudgetWebService {

    @EJB(name = "budgetService")
    private BudgetService budgetService;

    @GET
    @Path("/{id}")
    public Response getBudgetById(@PathParam("id") Long id) {
        Budget budget = budgetService.get(id);
        if (budget != null) {
            return Response.ok(Utils.jsonify(budget)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Budget not found!!"))
                .build();
    }

    @GET
    public Response getAllBudgets() {
        List<Budget> resources = budgetService.getAll();
        return Response.ok(Utils.jsonifyList(resources)).build();
    }

    @POST
    @Path("{projectId}")
    public Response addBudget(@PathParam("projectId") Long projectId, Budget budget) {
        if (budget != null) {
            budget = budgetService.add(projectId, budget);
            if (budget != null) {
                return Response.ok(Utils.jsonify(budget)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Project or User not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @PUT
    public Response updateBudget(Budget resource) {
        if (resource != null) {
            resource = budgetService.update(resource);
            if (resource != null) {
                return Response.ok(Utils.jsonify(resource)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Budget not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteBudget(@PathParam("id") Long id) {
        budgetService.delete(id);
        List<Budget> resources = budgetService.getAll();
        return Response.ok(Utils.jsonifyList(resources)).build();
    }
}
