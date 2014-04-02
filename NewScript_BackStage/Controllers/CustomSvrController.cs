using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CloudAir.ProtoType.Custom;

namespace NewScript_BackStage.Controllers
{
    public class CustomSvrController : Controller
    {
        //
        // GET: /CustomSvr/

        public ActionResult Index()
        {
            var obj = new SvrHandle();
            var mod = obj.GetAll();
            return View(mod);
        }

    }
}
