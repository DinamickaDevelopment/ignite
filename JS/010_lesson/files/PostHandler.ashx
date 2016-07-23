<%@ WebHandler Language="C#" Class="PostHandler" %>

using System;
using System.Web;

public class PostHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        
        // Чтение POST данных.
        string aParam = context.Request.Form["a"];
        string bParam = context.Request.Form["b"];

        // Формирование ответа.
        context.Response.Write("<b>POST</b> параметры переданные с запросом: a=" + aParam + ", b=" + bParam);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}