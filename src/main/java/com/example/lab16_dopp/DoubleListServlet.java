package com.example.lab16_dopp;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Map;

@WebServlet(name = "DoubleListServlet", value = "/DoubleListServlet")
public class DoubleListServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Data data = new Data();
        Map<String, ArrayList<String>> list = data.getData();
        int counter = 1;

        out.println("<!DOCTYPE html>\n" +
                "<head>\n" +
                "    <title>List</title>\n" +
                "    <link rel=\"stylesheet\" href=\"style.css\">\n" +
                "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js\"></script>\n" +
                "    <script src=\"script.js\"></script>\n" +
                "    <style></style>\n" +
                "</head>\n" +
                "<body>");

        out.println("<button class=\"submit\" id=\"submit\" onclick=\"addView()\">Add view</button>");

        out.println("<ul class=\"list\" id=\"list\">");
        out.println("<p class=\"hi\" id=\"hi\"></p>");
        for(String header : list.keySet()){
            out.println("<li class=\"span\">" + "<p class=\"lable\">" + counter++ + ". " + header + "</p>");
            out.println("<ul class=\"node\">");
            for (int i = 0; i < list.get(header).size(); i++) {
                out.println("<li class=\"word\">" + list.get(header).get(i) + "</li>");
            }
            out.println("</ul>");
            out.println("</li>");
        }

        out.println("<div id=\"here\"></div>");
        out.println("</ul>");
        out.println("</body>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
