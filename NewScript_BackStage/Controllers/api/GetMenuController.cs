using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NewScript_BackStage.Controllers.api
{
    public class GetMenuController : ApiController
    {
        // GET api/getmenu
        public IEnumerable<string> Get()
        {
            //if (System.Web.HttpContext.Current.Session["User"] != null)
            //{
            return new string[] { "value1", "value2" };
            //}
        }
    }
}
