/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.cost.web.jar;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.rnu.eniso.pms.core.ejb.entities.Budget;
import tn.rnu.eniso.pms.core.ejb.services.BudgetService;

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
    public ResponseEntity<Budget> getBudgetById(@PathVariable("id") Long id) {
        Budget budget = budgetService.get(id);
        if (budget != null) {
           return  new ResponseEntity<>(budget,HttpStatus.OK);
        }
         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<Budget>> getAllBudgets() {
        List<Budget> budgets = budgetService.getAll();
       return  new ResponseEntity<>(budgets,HttpStatus.OK);
    }

    
    @PostMapping("{projectId}")
    public ResponseEntity<Budget> addBudget(@PathVariable("projectId") Long projectId,@RequestBody Budget budget) {
        if (budget != null) {
            budget = budgetService.add(projectId, budget);
            if (budget != null) {
                return  new ResponseEntity<>(budget,HttpStatus.OK);
            }
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
       return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<Budget> updateBudget(@RequestBody Budget budget) {
        if (budget != null) {
            budget = budgetService.update(budget);
            if (budget != null) {   
            return  new ResponseEntity<>(budget,HttpStatus.OK);
            }
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
       return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Budget>> deleteBudget(@PathVariable("id") Long id) {
        budgetService.delete(id);
        List<Budget> budgets = budgetService.getAll();
      return new ResponseEntity<>(budgets, HttpStatus.OK);
    }
}
