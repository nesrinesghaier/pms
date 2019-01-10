/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import tn.rnu.eniso.pms.core.ejb.services.BudgetService;
import tn.rnu.eniso.pms.core.ejb.services.ProductBacklogItemService;
import tn.rnu.eniso.pms.core.ejb.services.ProjectService;
import tn.rnu.eniso.pms.core.ejb.services.ResourceService;
import tn.rnu.eniso.pms.core.ejb.services.StoryService;
import tn.rnu.eniso.pms.core.ejb.services.TaskConsumptionService;
import tn.rnu.eniso.pms.core.ejb.services.TaskService;
import tn.rnu.eniso.pms.core.ejb.services.UserService;

/**
 *
 * @author bacali
 */
@Configuration
public class AppConfiguration {

    @Bean
    public BudgetService budgetService() {
        return new BudgetService();
    }

    @Bean
    public ProductBacklogItemService backlogItemService() {
        return new ProductBacklogItemService();
    }

    @Bean
    public ProjectService projectService() {
        return new ProjectService();
    }

    @Bean
    public ResourceService resourceService() {
        return new ResourceService();
    }

    @Bean
    public StoryService storyService() {
        return new StoryService();
    }

    @Bean
    public TaskConsumptionService consumptionService() {
        return new TaskConsumptionService();
    }

    @Bean
    public TaskService taskService() {
        return new TaskService();
    }

    @Bean
    public UserService userService() {
        return new UserService();
    }
}
