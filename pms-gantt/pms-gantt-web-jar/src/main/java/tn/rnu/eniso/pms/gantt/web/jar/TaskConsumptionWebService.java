/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.gantt.web.jar;

import java.util.Collection;
import java.util.List;
import javax.ejb.EJB;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import tn.rnu.eniso.pms.core.ejb.entities.TaskConsumption;
import tn.rnu.eniso.pms.core.ejb.services.TaskConsumptionService;

/**
 *
 * @author ameni
 */
@RequestMapping("/ws/taskconsumption")
public class TaskConsumptionWebService {

    @EJB(name = "taskConsumptionService")
    private TaskConsumptionService taskConsumptionService;

    @GetMapping("/{id}")
    public ResponseEntity<TaskConsumption> getTaskConsumptionById(@PathVariable("id") Long id) {
        TaskConsumption consumption = taskConsumptionService.get(id);
        if (consumption != null) {
            return new ResponseEntity<>(consumption, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<Collection<TaskConsumption>> getAllTaskConsumptions() {
        List<TaskConsumption> consumptions = taskConsumptionService.getAll();
        return new ResponseEntity<>(consumptions, HttpStatus.OK);
    }

    @PostMapping("/{taskId}/{resourceId}")
    public ResponseEntity<TaskConsumption> addTaskConsumption(@PathVariable("taskId") Long taskId,
            @PathVariable("resourceId") Long resourceId, @RequestBody TaskConsumption consumption) {
        if (consumption != null) {
            consumption = taskConsumptionService.add(taskId, resourceId, consumption);
            if (consumption != null) {
                return new ResponseEntity<>(consumption, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<TaskConsumption> updateTaskConsumption(@RequestBody TaskConsumption consumption) {
        if (consumption != null) {
            consumption = taskConsumptionService.update(consumption);
            if (consumption != null) {
                return new ResponseEntity<>(consumption, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Collection<TaskConsumption>> deleteTaskConsumptionById(@PathVariable("id") Long id) {
        taskConsumptionService.delete(id);
        List<TaskConsumption> consumptions = taskConsumptionService.getAll();
        return new ResponseEntity<>(consumptions, HttpStatus.OK);
    }

}
