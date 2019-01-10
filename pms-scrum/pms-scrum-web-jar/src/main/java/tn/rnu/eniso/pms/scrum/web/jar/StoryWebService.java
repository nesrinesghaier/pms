/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.scrum.web.jar;

import java.util.List;
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
import tn.rnu.eniso.pms.core.ejb.entities.Story;
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
import tn.rnu.eniso.pms.core.ejb.services.StoryService;

/**
 *
 * @author bacali
 */
@RestController
@RequestMapping("/ws/story")
public class StoryWebService {

    @Autowired
    private StoryService storyService;

    @GetMapping("/{id}")
    public Response getStoryById(@PathVariable("id") Long id) {
        Story story = storyService.get(id);
        if (story != null) {
            return Response.ok(Utils.jsonify(story)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Story not found!!"))
                .build();
    }

    @GetMapping
    public Response getAllStories() {
        List<Story> stories = storyService.getAll();
        return Response.ok(Utils.jsonifyList(stories)).build();
    }

    @GetMapping("/{id}/tasks")
    public Response getAllTasks(@PathVariable("id") Long id) {
        List<Task> tasks = storyService.getAllTasks(id);
        if (tasks != null) {
            return Response.ok(Utils.jsonifyList(tasks)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Story not found!!"))
                .build();
    }

    @PostMapping("/{backlogItemId}")
    public Response addStory(@PathVariable("backlogItemId") Long backlogItemId, Story story) {
        if (story != null) {
            story = storyService.add(backlogItemId, story);
            if (story != null) {
                return Response.ok(Utils.jsonify(story)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Story not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @PutMapping
    public Response updateStory(Story story) {
        if (story != null) {
            story = storyService.update(story);
            if (story != null) {
                return Response.ok(Utils.jsonify(story)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("Resource not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @DeleteMapping("/{id}")
    public Response deleteStory(@PathVariable("id") Long id) {
        storyService.delete(id);
        List<Story> stories = storyService.getAll();
        return Response.ok(Utils.jsonifyList(stories)).build();
    }
}
