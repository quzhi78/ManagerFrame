using Model.isModels;
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
        public isResults<isTaskQueueExport> Get()
        {
            //测试数据
            //实际情况为数据层取出
            IList<Model.isModels.isTask> isModel = new List<Model.isModels.isTask>();
            for (var i = 0; i < 10; i++)
            {
                isModel.Add(new Model.isModels.isTask() { id = i, t_mk = string.Format("第{0}条测试", i), accountid = i + 50 });
            }
            return isModel.ToResults<isTask, isTaskQueueExport>();
        }
    }
}
