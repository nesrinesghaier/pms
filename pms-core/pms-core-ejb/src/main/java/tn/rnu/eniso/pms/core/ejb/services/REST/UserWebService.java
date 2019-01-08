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
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.User;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
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

    @GET
    @Path("/{id}")
    public Response getUserById(@PathParam("id") Long id) {
        User user = userService.get(id);
        if (user != null) {
            return Response.ok(Utils.jsonify(user)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("User not found!!"))
                .build();
    }

    @GET
    public Response getAllUsers() {
        List<User> users = userService.getAll();
        return Response.ok(Utils.jsonifyList(users)).build();
    }

    @GET
    @Path("/{id}/resources")
    public Response getAllResources(@PathParam("id") Long id) {
        List<Resource> resources = userService.getAllResources(id);
        if (resources != null) {
            return Response.ok(Utils.jsonifyList(resources)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("User not found!!"))
                .build();
    }

    @POST
    public Response addUser(User user) {
        if (user != null) {
            user = userService.add(user);
            if (user != null) {
                return Response.ok(Utils.jsonify(user)).build();
            }
            return Response.status(Status.INTERNAL_SERVER_ERROR)
                    .entity(Utils.sendMessage("Internal Error!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @PUT
    public Response updateUser(User user) {
        if (user != null) {
            user = userService.update(user);
            if (user != null) {
                return Response.ok(Utils.jsonify(user)).build();
            }
            return Response.status(Status.NOT_FOUND)
                    .entity(Utils.sendMessage("User not found!!"))
                    .build();
        }
        return Response.status(Status.BAD_REQUEST)
                .entity(Utils.sendMessage("Bad formed data!!"))
                .build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteUser(@PathParam("id") Long id) {
        userService.delete(id);
        List<User> users = userService.getAll();
        return Response.ok(Utils.jsonifyList(users)).build();
    }
}
