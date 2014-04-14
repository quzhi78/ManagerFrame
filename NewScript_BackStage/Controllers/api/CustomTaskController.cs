using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NewScript_BackStage.Controllers.api
{
    public class CustomTaskController : ApiController
    {
        public IEnumerable<Model.isModels.isTask> Post(int id = -1, int skip = 0)
        {
            int limit = 20;
            switch (id)
            {
                case 0:
                    return BLL.BTaskQueue.GetRealTimeTask();
                case 1:
                    return BLL.BTaskQueue.GetHightTask(skip, limit);
                case 2:
                    return BLL.BTaskQueue.GetMediumTask(skip, limit);
                case 3:
                    return BLL.BTaskQueue.GetLowTask(skip, limit);
                default:
                    return null;
            }
        }
    }
}
