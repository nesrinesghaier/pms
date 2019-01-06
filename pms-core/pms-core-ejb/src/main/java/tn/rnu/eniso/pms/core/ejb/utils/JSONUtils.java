/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.utils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.StringReader;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.json.JsonStructure;

/**
 *
 * @author bacali
 */
public class JSONUtils {

    static Map<String, String> msg_404 = Collections.singletonMap("message", "404NOTFOUND");

    public static JsonObject jsonify(Object o) {
        Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
        String s = gson.toJson(o);
        JsonReader jr = Json.createReader(new StringReader(s));
        return jr.readObject();
    }

    public static <T> JsonStructure jsonifyList(List<T> list) {
        Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
        String s = gson.toJson(list);
        JsonReader jr = Json.createReader(new StringReader(s));
        return jr.readArray();
    }

    public static JsonObject sendResourceNotFoundError() {
        return jsonify(msg_404);
    }

    public static JsonObject sendMessage(String message) {
        Map<String, String> jsonMessage = Collections.singletonMap("message", message);
        return jsonify(jsonMessage);
    }

}
