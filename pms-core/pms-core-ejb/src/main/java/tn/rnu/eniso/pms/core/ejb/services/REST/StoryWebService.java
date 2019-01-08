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
import tn.rnu.eniso.pms.entities.Story;
import tn.rnu.eniso.pms.entities.Task;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
import tn.rnu.eniso.pms.core.ejb.services.StoryService;

/**
 *
 * @author nesrine
 */
@Path("story")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class StoryWebService {

    @EJB(name = "storyService")
    private StoryService storyService;

    @GET
    @Path("/{id}")
    public Response getStoryById(@PathParam("id") Long id) {
        Story story = storyService.get(id);
        if (story != null) {
            return Response.ok(Utils.jsonify(story)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Story not found!!"))
                .build();
    }

    @GET
    public Response getAllStories() {
        List<Story> stories = storyService.getAll();
        return Response.ok(Utils.jsonifyList(stories)).build();
    }

    @GET
    @Path("/{id}/tasks")
    public Response getAllTasks(@PathParam("id") Long id) {
        List<Task> tasks = storyService.getAllTasks(id);
        if (tasks != null) {
            return Response.ok(Utils.jsonifyList(tasks)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("Story not found!!"))
                .build();
    }

    @POST
    @Path("/{backlogItemId}")
    public Response addStory(@PathParam("backlogItemId") Long backlogItemId, Story story) {
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

    @PUT
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

    @DELETE
    @Path("/{id}")
    public Response deleteStory(@PathParam("id") Long id) {
        storyService.delete(id);
        List<Story> stories = storyService.getAll();
        return Response.ok(Utils.jsonifyList(stories)).build();
    }
}
