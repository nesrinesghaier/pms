/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.services;

import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.entities.Budget;

/**
 *
 * @author ameni
 */
@Stateless(name = "budgetService")
public class BudgetService {

    @PersistenceContext(unitName = "pms-pu")
    private EntityManager em;

    public Budget add(Long projectId, Budget budget) {
        Project project = em.find(Project.class, projectId);
        if (project != null) {
            em.persist(budget);
            project.getBudgets().add(budget);
            em.merge(project);
            return budget;
        }
        return null;
    }

    public Budget get(Long id) {
        Budget budget = em.find(Budget.class, id);
        if (budget != null) {
            return budget;
        }
        return null;
    }

    public List<Budget> getAll() {
        return em.createQuery("SELECT r FROM Budget r").getResultList();
    }

    public Budget update(Budget budget) {
        Budget budgetFromDb = em.find(Budget.class, budget.getId());
        if (budgetFromDb != null) {
            em.merge(budget);
            return budget;
        }
        return null;
    }

    public void delete(Long id) {
        Budget budget = em.find(Budget.class, id);

        Project project = (Project) em.createQuery("SELECT p from Project p WHERE :r MEMBER OF p.budgets")
                .setParameter("r", budget).getSingleResult();
        if (project != null) {
            project.getBudgets().remove(budget);
            em.merge(project);
        }
        em.remove(budget);
    }
}
