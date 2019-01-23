/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.web.jar;

import java.io.IOException;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.servlet.RequestDispatcher;
import tn.rnu.eniso.pms.core.ejb.entities.User;
import tn.rnu.eniso.pms.core.ejb.services.UserService;

/**
 *
 * @author nesrine
 */
@ManagedBean
@SessionScoped
public class LoginController {

    private Model model = new Model();

    @EJB
    private UserService loginService;

    public String validateUserLogin() throws IOException {
        String login = getModel().getLogin();
        String password = getModel().getPassword();
        System.out.println(login + "  " + password);
        String url = "/pms-global-web/index.html?url=dashboard";
        FacesContext.getCurrentInstance().getExternalContext().redirect(url);
        return "";
    }

    public Model getModel() {
        return model;
    }

    public static class Model {

        private String login;
        private String password;
        private User currentUser;

        public String getLogin() {
            return login;
        }

        public void setLogin(String login) {
            this.login = login;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public User getCurrentUser() {
            return currentUser;
        }

        public void setCurrentUser(User currentUser) {
            this.currentUser = currentUser;
        }

    }
}
