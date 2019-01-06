/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.ProductBacklogItem;
import tn.rnu.eniso.pms.core.ejb.entities.Story;
import tn.rnu.eniso.pms.core.ejb.entities.Task;

/**
 *
 * @author nesrine
 */
@Stateless(name = "storyService")
public class StoryService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    @EJB
    private TaskService taskService;

    public Story add(Long backlogItemId, Story story) {
        ProductBacklogItem backlogItem = em.find(ProductBacklogItem.class, backlogItemId);
        if (backlogItem != null) {
            em.persist(story);
            backlogItem.getStories().add(story);
            em.merge(backlogItem);
            return story;
        }
        return null;
    }

    public Story get(Long id) {
        Story story = em.find(Story.class, id);
        if (story != null) {
            return story;
        }
        return null;
    }

    public List<Story> getAll() {
        return em.createQuery("SELECT s FROM Story s").getResultList();
    }

    public List<Task> getAllTasks(Long id) {
        Story s = em.find(Story.class, id);
        return s.getTasks();
    }

    public void delete(Long id) {
        Story story = em.find(Story.class, id);
        if (story != null) {
            List<Task> tasks = new ArrayList<>(story.getTasks());
            for (Task task : tasks) {
                taskService.delete(task.getId());
            }
            ProductBacklogItem backlogItem = 
                    (ProductBacklogItem) em.createQuery("SELECT p from ProductBacklogItem p WHERE :s MEMBER OF p.stories")
                    .setParameter("s", story).getSingleResult();
            if (backlogItem != null) {
                backlogItem.getStories().remove(story);
                em.merge(backlogItem);
            }
            em.remove(story);
        }
    }

    public Story update(Story story) {
        Story storyFromDb = em.find(Story.class, story.getId());
        if (storyFromDb != null) {
            em.merge(story);
        }
        return story;
    }

}
