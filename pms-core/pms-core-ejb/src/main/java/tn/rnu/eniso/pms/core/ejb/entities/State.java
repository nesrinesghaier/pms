/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.entities;

/**
 *
 * @author nesrine
 */
public enum State {
    TODO("TODO"), INPROGRESS("INPROGRESS"), DONE("DONE");

    private final String value;

    State(String text) {
        this.value = text;
    }

    public String getValue() {
        return value;
    }

}
