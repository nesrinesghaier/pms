/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.ejb.utils.service.RESTWebservice;

import javax.ejb.EJB;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import tn.rnu.eniso.pms.core.ejb.entities.Project;
import tn.rnu.eniso.pms.core.ejb.utils.JSONUtils;
import tn.rnu.eniso.pms.core.ejb.utils.service.ProjectService;

/**
 *
 * @author nesrine
 */

@Path("project")
public class ProjectWebService {
    
    @EJB(name = "projectService")
    private ProjectService projectService;
       

    @GET
    @Path("/{id}")
    public JsonObject getUserById(@PathParam("id") Long id) {
        Project project = projectService.get(id);
        if (project != null) {
            return JSONUtils.jsonify(project);
        }
        return JSONUtils.sendResourceNotFoundError();
    }
}
