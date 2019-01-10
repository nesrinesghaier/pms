/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.web.jar;

import java.util.List;
import javax.ws.rs.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.User;
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
    public ResponseEntity<User> getUserById(@PathParam("id") Long id) {
        User user = userService.get(id);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}/resources")
    public ResponseEntity<List<Resource>> getAllResources(@PathParam("id") Long id) {
        List<Resource> resources = userService.getAllResources(id);
        if (resources != null) {
            return new ResponseEntity<>(resources, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<User> addUser(User user) {
        if (user != null) {
            user = userService.add(user);
            if (user != null) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<User> updateUser(User user) {
        if (user != null) {
            user = userService.update(user);
            if (user != null) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
            return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<User>> deleteUser(@PathParam("id") Long id) {
        userService.delete(id);
        List<User> users = userService.getAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
