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
public enum DependencyType {
    FS("FS"), SS("SS"), SF("SF");//satrt to finish or finish to start or start to start

    private final String value;

    DependencyType(String text) {
        this.value = text;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return this.getValue();
    }

    public static DependencyType getEnum(String value) {
        for (DependencyType v : values()) {
            if (v.getValue().equalsIgnoreCase(value)) {
                return v;
            }
        }
        throw new IllegalArgumentException();
    }
}
