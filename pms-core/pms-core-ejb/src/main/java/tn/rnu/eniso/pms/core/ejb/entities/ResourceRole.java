/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.entities;

/**
 *
 * @author ameni
 */
public enum ResourceRole {
    ADMIN("ADMIN"),
    SENIOR_DEVELOPER("SENIOR_DEVELOPER"),
    JUNIOR_DEVELOPER("JUNIOR_DEVELOPER"),
    INTERN("INTERN"),
    PROJECT_MANAGER("PROJECT_MANAGER"),
    EXPERT("EXPERT"),
    ARCHITECT("ARCHITECT");

    private final String value;

    ResourceRole(String text) {
        this.value = text;
    }

    public String getValue() {
        return value;
    }

}
