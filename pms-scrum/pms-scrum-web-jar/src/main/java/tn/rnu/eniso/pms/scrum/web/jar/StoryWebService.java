/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.scrum.web.jar;

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
import tn.rnu.eniso.pms.core.ejb.entities.Story;
import tn.rnu.eniso.pms.core.ejb.entities.Task;
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
    public ResponseEntity<Story> getStoryById(@PathVariable("id") Long id) {
        Story story = storyService.get(id);
        if (story != null) {
            return new ResponseEntity<>(story, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<Story>> getAllStories() {
        List<Story> stories = storyService.getAll();
        return new ResponseEntity<>(stories, HttpStatus.OK);
    }

    @GetMapping("/{id}/tasks")
    public ResponseEntity<List<Task>> getAllTasks(@PathVariable("id") Long id) {
        List<Task> tasks = storyService.getAllTasks(id);
        if (tasks != null) {
            return new ResponseEntity<>(tasks, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{backlogItemId}")
    public ResponseEntity<Story> addStory(@PathVariable("backlogItemId") Long backlogItemId, @RequestBody Story story) {
        if (story != null) {
            story = storyService.add(backlogItemId, story);
            if (story != null) {
                return new ResponseEntity<>(story, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<Story> updateStory(@RequestBody Story story) {
        if (story != null) {
            story = storyService.update(story);
            if (story != null) {
                return new ResponseEntity<>(story, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Story>> deleteStory(@PathVariable("id") Long id) {
        storyService.delete(id);
        List<Story> stories = storyService.getAll();
        return new ResponseEntity<>(stories, HttpStatus.OK);
    }
}
