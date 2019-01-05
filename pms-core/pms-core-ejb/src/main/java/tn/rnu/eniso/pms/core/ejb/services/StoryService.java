/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import tn.rnu.eniso.pms.core.ejb.entities.Resource;
import tn.rnu.eniso.pms.core.ejb.entities.Story;

/**
 *
 * @author nesrine
 */
@Stateless(name = "storyService")
public class StoryService {

    static Logger logger = Logger.getGlobal();

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public Story add(Story story) {
        if (story != null) {
            em.persist(story);
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

    public void delete(Long id) {
        Story story = em.find(Story.class, id);
        if (story != null) {
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
