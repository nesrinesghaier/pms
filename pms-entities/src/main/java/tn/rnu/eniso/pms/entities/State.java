/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.entities;

/**
 *
 * @author bacali
 */
public enum State {
    TODO("TODO"), INPROGRESS("INPROGRESS"), DONE("DONE");

    private String value;

    private State(String value) {
        this.value = value;
    }
}
