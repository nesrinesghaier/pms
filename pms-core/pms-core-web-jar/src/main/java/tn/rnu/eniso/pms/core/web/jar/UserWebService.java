/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.web.jar;

import java.util.List;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.User;
import tn.rnu.eniso.pms.core.ejb.utils.Utils;
import tn.rnu.eniso.pms.core.ejb.services.UserService;

/**
 *
 * @author nesrine
 */
@RestController
@RequestMapping("/ws/user")
public class UserWebService {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public Response getUserById(@PathParam("id") Long id) {
        User user = userService.get(id);
        if (user != null) {
            return Response.ok(Utils.jsonify(user)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("User not found!!"))
                .build();
    }

    @GetMapping
    public Response getAllUsers() {
        List<User> users = userService.getAll();
        return Response.ok(Utils.jsonifyList(users)).build();
    }

    @GetMapping("/{id}/resources")
    public Response getAllResources(@PathParam("id") Long id) {
        List<Resource> resources = userService.getAllResources(id);
        if (resources != null) {
            return Response.ok(Utils.jsonifyList(resources)).build();
        }
        return Response.status(Status.NOT_FOUND)
                .entity(Utils.sendMessage("User not found!!"))
                .build();
    }

    @PostMapping
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

    @PutMapping
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

    @DeleteMapping("/{id}")
    public Response deleteUser(@PathParam("id") Long id) {
        userService.delete(id);
        List<User> users = userService.getAll();
        return Response.ok(Utils.jsonifyList(users)).build();
    }
}
