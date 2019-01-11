/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.cost.web.jar;

import java.util.List;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.rnu.eniso.pms.core.ejb.entities.Budget;
import tn.rnu.eniso.pms.core.ejb.services.BudgetService;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;

/**
 *
 * @author ameni
 */
@RestController
@RequestMapping("/ws/budget")
public class BudgetWebService {

    @Autowired
    private BudgetService budgetService;

    @GetMapping("/{id}")
    public Response getBudgetById(@PathVariable("id") Long id) {
        Budget budget = budgetService.get(id);
        if (budget != null) {
            return Response.ok(budget).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Budget not found!!"))
                .build();
    }

    @GetMapping
    public Response getAllBudgets() {
        List<Budget> resources = budgetService.getAll();
        return Response.ok(Utils.jsonifyList(resources)).build();
    }

    
    @PostMapping("{projectId}")
    public Response addBudget(@PathVariable("projectId") Long projectId, Budget budget) {
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

    @PutMapping
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

    @DeleteMapping("/{id}")
    public Response deleteBudget(@PathVariable("id") Long id) {
        budgetService.delete(id);
        List<Budget> resources = budgetService.getAll();
        return Response.ok(Utils.jsonifyList(resources)).build();
    }
}
