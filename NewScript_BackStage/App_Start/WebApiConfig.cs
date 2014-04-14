using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace NewScript_BackStage
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultAPI",
                routeTemplate: "api/{controller}/{isParameter}/{isPage}",
                defaults: new { isParameter = RouteParameter.Optional, isPage = RouteParameter.Optional, id = RouteParameter.Optional }
            );
        }
    }
}
