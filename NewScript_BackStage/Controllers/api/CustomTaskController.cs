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
        public isResults<Model.isModels.isTaskQueueExport> Post(int isParameter = -1, int isPage = 0)
        {
            switch (isParameter)
            {
                case 0:
                    return BLL.isDataProcess.isTask.GetRealTimeTask().ToResults<Model.isModels.isTask, Model.isModels.isTaskQueueExport>();
                case 1:
                    return BLL.isDataProcess.isTask.GetHightTask().ToResults<Model.isModels.isTask, Model.isModels.isTaskQueueExport>();
                case 2:
                    return BLL.isDataProcess.isTask.GetMediumTask(isPage).ToResults<Model.isModels.isTask, Model.isModels.isTaskQueueExport>();
                case 3:
                    return BLL.isDataProcess.isTask.GetLowTask(isPage).ToResults<Model.isModels.isTask, Model.isModels.isTaskQueueExport>();
                default:
                    return null;
            }
        }
    }
}
