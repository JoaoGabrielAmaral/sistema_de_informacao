/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Pack1;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author 16248643
 */
@WebServlet(name = "Servlet2", urlPatterns = {"/Servlet2"})
public class Servlet2 extends HttpServlet {
    protected int ValidaParametro(HttpServletRequest request, PrintWriter out, String parametro) {
        int ret = 0;
        try {
            String param = request.getParameter(parametro);
            if (param == null || param == "")
                out.println("<p>Favor informar o parâmetro \"" + parametro + "\"</p>");
            else
                ret = Integer.parseInt(param);
            
            if (ret == 0)
                out.println("<p>Parâmetro \"" + parametro + "\" deve ser maior que 0</p>");
        } catch (Exception e) {
            out.println("<p>Favor informar o parâmetro \"" + parametro + "\" somente com números</p>");
        }
        return ret;
    }
    
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Servlet2</title>");            
            out.println("</head>");
            out.println("<body>");
            
            int linhas = ValidaParametro(request, out, "linhas"), 
                colunas = ValidaParametro(request, out, "colunas");
            
            if (linhas > 0 && colunas > 0) {
                out.println("<table style=\"border: 1px solid #000; text-align: center;\">");
                
                String rowContent = "";
                for (int c = 1; c <= colunas; c++)
                    rowContent += "<td style=\"border: 1px solid #000;\">C" + c + "</td>";
                
                for (int l = 1; l <= linhas; l++)
                    out.println("<tr>" + rowContent + "</tr>");
                
                out.println("</table>");
            }
            
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
