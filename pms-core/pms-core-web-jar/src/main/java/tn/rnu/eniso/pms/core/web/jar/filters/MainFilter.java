/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tn.rnu.eniso.pms.core.web.jar.filters;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author bacali
 */
public class MainFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res,
            FilterChain chain) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        String requestUrl = request.getRequestURI().replace(request.getContextPath(), "").replaceFirst("/", "");
        if (requestUrl.isEmpty()) {
            response.sendRedirect(request.getContextPath() + "/index.html");
        } else if (requestUrl.startsWith("ws") || requestUrl.startsWith("api") || requestUrl.matches(".*(\\..*){1,}")) {
            chain.doFilter(request, response);
        } else {
            response.sendRedirect(request.getContextPath() + "/index.html?url=" + requestUrl);
        }
    }

    @Override
    public void destroy() {
    }

}
