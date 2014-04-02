using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CloudAir.MongoHelper;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Bson;

namespace CloudAir.ProtoType.Custom
{
    #region 入口
    public partial class SvrHandle
    {
        public static MongoCollection Handle = _MongoSvr.Handle("TaskQueue");
    }
    #endregion

    #region 查询 - 数据获取
    public partial class SvrHandle
    {
        public MongoCursor<Model.Task> GetAll()
        {
            return _MongoSvr.Handle("TaskQueue").FindAllAs<Model.Task>();
        }

        public MongoCursor<Model.Task> GetForLast(DateTime _dt)
        {
            var _Query = Query.And(
                Query.GT("inerttime", _dt),
                Query.GTE("dt_Status", 2)
                );
            return _MongoSvr.Handle("TaskQueue").FindAs<Model.Task>(_Query);
        }
    }
    #endregion

    #region 插入 - 新增数据
    public partial class SvrHandle
    {

    }
    #endregion
}
