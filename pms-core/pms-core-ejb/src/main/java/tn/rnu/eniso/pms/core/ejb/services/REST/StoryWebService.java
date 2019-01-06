/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services.REST;

import java.util.List;
import java.util.logging.Logger;
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
import tn.rnu.eniso.pms.core.ejb.entities.Story;
import tn.rnu.eniso.pms.core.ejb.entities.Task;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.services.StoryService;

/**
 *
 * @author nesrine
 */
@Path("story")
@Produces("application/json")
@Consumes(MediaType.APPLICATION_JSON)
public class StoryWebService {

    @EJB(name = "storyService")
    private StoryService storyService;
    static final Logger logger = Logger.getGlobal();

    @GET
    @Path("/{id}")
    public JsonObject getStoryById(@PathParam("id") Long id) {
        Story story = storyService.get(id);
        if (story != null) {
            return JSONUtils.jsonify(story);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @GET
    public JsonStructure getAllStories() {
        List<Story> stories = storyService.getAll();
        return JSONUtils.jsonifyList(stories);
    }

    @GET
    @Path("/{id}/tasks")
    public JsonStructure getAllTasks(@PathParam("id") Long id) {
        List<Task> tasks = storyService.getAllTasks(id);
        return JSONUtils.jsonifyList(tasks);
    }

    @POST
    @Path("/{backlogItemId}")
    public JsonObject addStory(@PathParam("backlogItemId") Long backlogItemId, Story story) {
        if (story != null) {
            story = storyService.add(backlogItemId, story);
            if (story != null) {
                return JSONUtils.jsonify(story);
            }
            return JSONUtils.sendMessage("Product Backlog Item not found!!");
        }
        return JSONUtils.sendMessage("Bad formed data!!");
    }

    @PUT
    public JsonObject updateStory(Story story) {
        if (story != null) {
            Story u = storyService.update(story);
            return JSONUtils.jsonify(u);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/{id}")
    public JsonStructure deleteStory(@PathParam("id") Long id) {
        storyService.delete(id);
        List<Story> storys = storyService.getAll();
        return JSONUtils.jsonifyList(storys);
    }
}
