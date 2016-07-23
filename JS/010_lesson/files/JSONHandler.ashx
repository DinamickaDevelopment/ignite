<%@ WebHandler Language="C#" Class="JSONHandler" %>

using System;
using System.Web;

public class JSONHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        // ContentType указывающий на наличие JSON объекта в ответе.
        context.Response.ContentType = "application/json";
        
        // отправка JSON объекта 
        // { "firstName":"Ivan", "lastName":"Ivanov" } - объект со свойтсвами firstName и lastName.
        context.Response.Write("{\"firstName\":\"Ivan\", \"lastName\":\"Ivanov\"}");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}