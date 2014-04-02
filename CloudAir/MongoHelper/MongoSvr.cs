using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;

namespace CloudAir.MongoHelper
{
    //条件操作符
    //$gt : >
    //$lt : <
    //$gte: >=
    //$lte: <=
    //$ne : !=、<>
    //$in : in
    //$nin: not in
    //$all: all
    //$not: 反匹配(1.3.3及以上版本)


    public enum _MongoEnum
    {
        任务队列,
    }

    public static class _MongoSet
    {
        private static Dictionary<string, string> _TableDictionary;

        public static string _ForEnum(_MongoEnum _enum)
        {
            if (_TableDictionary.Count == null)
            {
                _TableDictionary = new Dictionary<string, string>();
                _TableDictionary.Add("任务队列", "TaskQueue");
            }
            return _TableDictionary[_enum.ToString()];
        }

        //没用,测试
        public static string _ForOject(object _obj)
        {
            return _obj.ToString();
        }
    }
}
