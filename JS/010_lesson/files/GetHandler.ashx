<%@ WebHandler Language="C#" Class="GetHandler" %>

using System;
using System.Web;

public class GetHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";

        // Чтение данных из строки запроса.
        string aParam = context.Request.QueryString["a"];
        string bParam = context.Request.QueryString["b"];
        
        // Формирование ответа.
        context.Response.Write("<b>GET</b> параметры переданные с запросом: a=" + aParam + ", b=" + bParam);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}