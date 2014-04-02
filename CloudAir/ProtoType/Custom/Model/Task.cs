using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CloudAir.ProtoType.Custom.Model
{
    public partial class Task
    {
        public ObjectId id { get; set; }
        public int accountid { get; set; }
        public string t_mk { get; set; }
        public int vm_id { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime dt_Time { get; set; }
        public int dt_Level { get; set; }
        public int dt_Status { get; set; }
        public string dt_name { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime inerttime { get; set; }
        public string insetName { get; set; }
    }
}
