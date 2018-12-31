/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.cost.ejb.jar;

import java.util.Collections;
import java.util.Map;
import javax.ejb.EJB;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.cost.ejb.entities.Haja;

/**
 *
 * @author bacali
 */
@Path("test")
public class TestWS {

    @EJB
    private MyService service;

    @GET
    public JsonObject meth() {
        return Json.createObjectBuilder().add("field", "hello").build();
    }

    @POST
    @Path("/{name}")
    public JsonObject meth2(@PathParam("name") String name) {
        Haja haja = service.add(name);
        return JSONUtils.jsonify(haja);
    }

    @GET
    @Path("/{name}")
    public JsonObject meth3(@PathParam("name") String name) {
        Haja haja = service.get(name);
        if (haja == null) {
            Map<String, String> msg = Collections.singletonMap("message", "404NOTFOUND");
            return JSONUtils.jsonify(msg);
        }
        return JSONUtils.jsonify(haja);
    }

}
