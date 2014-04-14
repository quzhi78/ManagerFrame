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
        public IEnumerable<Model.isModels.isTask> Post(int id = -1, int isPage = 0)
        {
            switch (id)
            {
                case 0:
                    return BLL.isDataProcess.isTask.GetRealTimeTask();
                case 1:
                    return BLL.isDataProcess.isTask.GetHightTask();
                case 2:
                    return BLL.isDataProcess.isTask.GetMediumTask(isPage);
                case 3:
                    return BLL.isDataProcess.isTask.GetLowTask(isPage);
                default:
                    return null;
            }
        }
    }
}
