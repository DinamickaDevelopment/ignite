<%@ WebHandler Language="C#" Class="PostHandler" %>

using System;
using System.Web;

public class PostHandler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";

        string name = context.Request.Form["name"];
        string sname = context.Request.Form["sname"];


        // Формирование ответа.
        if (context.Request.Form["name"] == "Ivan" && context.Request.Form["surname"] == "Ivanov") {
            context.Response.Write("Data recieved!");
        }


    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}