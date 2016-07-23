<%@ WebHandler Language="C#" Class="PostHandler" %>

using System;
using System.Web;

public class PostHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        
        // Формирование ответа.
        context.Response.Write("Data recieved!");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}