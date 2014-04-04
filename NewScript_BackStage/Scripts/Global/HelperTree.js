/* 
* 树形列标 1.0 
* By : Vito
* Date: 2014-03-28
* 树形列表模块
* 依赖组件 - Helper.js
*/
(function ($) {
    jQuery.HelperTree = {};

    jQuery.InitHelperTree = function () {
        var _HelperTree = $.HelperTree;
        var _Helper = $.Helper;

        $.HelperTree.Html = {
            NodeType: function () {
                var Range = 3 - 0;
                var Rand = Math.random();
                var ranNum = (0 + Math.round(Rand * Range));
                alert(ranNum);
                var x = ['RealTimeNode', 'HighNode', 'MediumNode', 'LowNode'];
                return x[ranNum];
            },
            NodeCode: function (sClass) {
                var html = '<li class="{0}"><span class="TaskIco"></span><div class="TaskWrap"><span class="iconfont icon_arrow">&#xf01a8;</span></div></li>';
                return html.replace('{0}', sClass);
            },
            NodeContentCode: function (args) {
                var html = '<div class="TaskContent"><a href="javascript:;" onClick="$.HelperTree.View.Go(this,{0})"><p class="TaskType">{1}</p><p class="TaskDetails">{2}</p><p class="TaskTime tr">{3}</p></a></div>';
                var i = 0;
                while (i < args.length) {
                    html = html.replace('{' + i + '}', args[i]);
                    i++;
                }
                return html;
            }
        }

        $.HelperTree.Css = {
        }

        $.HelperTree.Selector = {
            TreeList: function () {
                return $(".Center_Box ul", _Helper.Selector.Frames.MiddlePanel);
            }
        }

        $.HelperTree.Text = {
            Task: function (sMinCode) {
                switch (sMinCode) {
                    case "YEST_REG_UNLOG":
                        return {
                            TaskType: "[回访任务]",
                            TaskDetails: "昨日注册今日未登录"
                        };
                    default:
                        return {
                            TaskType: "[Error]",
                            TaskDetails: "请联系开发人员"
                        }
                }
            }
        }

        $.HelperTree.Handle = {
            NewNode: function (json, nType) {
                $.each(json, function (nIndex, oItem) {
                    _HelperTree.Selector.TreeList().append(_HelperTree.Html.NodeCode(_HelperTree.Html.NodeType([nType])));
                    var oTextMod = _HelperTree.Text.Task(oItem.t_mk);
                    _HelperTree.Selector.TreeList().find("li:last div.TaskWrap").append(_HelperTree.Html.NodeContentCode([oItem.id, oTextMod.TaskType, oTextMod.TaskDetails, _Helper.Type.MongoDateToDate(oItem.dt_Time)]));
                });
            },
            RemoveNode: function (obj) {
            },
            ChangeNode: function (obj) {
            }
        }

        $.HelperTree.Effects = {
            Node: {
                FadeOut: function () {
                },
                FadeIn: function () {
                },
                Opicaty: function (opt) {
                }
            }
        }

        $.HelperTree.Server = {
            Request: {
                GetLast: function () {
                },
                GetTaskGroup: function (nTask) {
                    $.ajax({
                        type: "POST",
                        url: "/API/CustomTask/" + nTask,
                        dataType: "json",
                        success: function (data) {
                            if (data != null)
                                _HelperTree.Handle.NewNode(data, nTask);
                        },
                        error: function (msg) {
                            //错误处理
                        }
                    });
                }
            }
        }

        return $.HelperTree;
    };
})(jQuery);

$(function () {
    //初始化全局库
    $.InitHelperTree();
    //$.HelperTree.Server.Request.GetTaskGroup(2);
})