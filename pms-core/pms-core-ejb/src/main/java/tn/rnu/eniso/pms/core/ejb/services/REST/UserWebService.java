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
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.User;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.services.UserService;

/**
 *
 * @author nesrine
 */
@Path("user")
@Produces("application/json")
@Consumes(MediaType.APPLICATION_JSON)
public class UserWebService {

    @EJB(name = "userService")
    private UserService userService;
    static final Logger logger = Logger.getGlobal();

    @GET
    @Path("/{id}")
    public JsonObject getUserById(@PathParam("id") Long id) {
        User user = userService.get(id);
        if (user != null) {
            return JSONUtils.jsonify(user);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @GET
    public JsonStructure getAllUsers() {
        List<User> users = userService.getAll();
        return JSONUtils.jsonifyList(users);
    }

    @GET
    @Path("/{id}/resources")
    public JsonStructure getAllResources(@PathParam("id") Long id) {
        List<Resource> resources = userService.getAllResources(id);
        if (resources != null) {
            return JSONUtils.jsonifyList(resources);
        }
        return JSONUtils.sendMessage("User not found");

    }

    @POST
    public JsonObject addUser(User user) {
        if (user != null) {
            user = userService.add(user);
            return JSONUtils.jsonify(user);
        }
        return JSONUtils.sendMessage("Bad formed data!!");
    }

    @PUT
    public JsonObject updateUser(User user) {
        if (user != null) {
            User u = userService.update(user);
            return JSONUtils.jsonify(u);
        }
        return JSONUtils.sendResourceNotFoundError();
    }

    @DELETE
    @Path("/{id}")
    public JsonStructure deleteUser(@PathParam("id") Long id) {
        userService.delete(id);
        List<User> users = userService.getAll();
        return JSONUtils.jsonifyList(users);
    }
}
