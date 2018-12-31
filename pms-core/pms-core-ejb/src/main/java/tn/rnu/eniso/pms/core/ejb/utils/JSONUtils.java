/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.utils;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import java.io.StringReader;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonReader;

/**
 *
 * @author bacali
 */
public class JSONUtils {

    public static JsonObject jsonify(Object o) {
        Gson gson = new Gson();
        String s = gson.toJson(o);
        JsonReader jr = Json.createReader(new StringReader(s));
        return jr.readObject();
//        Class c = o.getClass();
//        Field[] fields = c.getDeclaredFields();
//        JsonObjectBuilder res = Json.createObjectBuilder();
//        try {
//            for (Field f : fields) {
//                if (Modifier.isStatic(f.getModifiers()) || f.getName().startsWith("_")) {
//                    continue;
//                }
//                f.setAccessible(true);
//                res.add(f.getName(), f.get(o).toString());
//                f.setAccessible(false);
//            }
//        } catch (IllegalAccessException ex) {
//            Logger.getLogger(JSONUtils.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        return res.build();
    }
}
