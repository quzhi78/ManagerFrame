/* 
* jQuery.Helper 1.0 
* By : Vito
* Date: 2014-03-27
* 全功能辅助脚本
*/
(function ($) {
    jQuery.Helper = {};
    jQuery.Help = {};

    jQuery.InitGlobal = function () {
        var _Helper = $.Helper;
        //代码类
        $.Helper.Html = {
            MainLayer: function (Title) {
                var html = '<div class="Main_Container">' +
                '<div class="Main_Title"><h2>{0}</h2></div>' +
                '<div class="Main_Content"></div>' +
                '</div>';
                return typeof (Title) == "string" ? html.replace('{0}', Title) : html;
            },
            LoadingLayer: function (Title) {
                var html = '<div class="LoadingWrap"><div class="LoadingShade"></div><div class="LoadingContainer">' +
                '<div class="LoadingContent"><img src="/Content/Images/Helper/Loading.gif" alt="{0}" /></div>' +
                '</div></div>';
                return (typeof (Title) == "string") ? html.replace("{0}", Title) : html.replace("{0}", "请稍等...");
            },
            Shade: function () {
                var html = '<div class="ShadeWrap"><div class="ShadeContainer"><div class="ShadeContent"></div></div></div>';
                return html;
            },
            Tips: function (IdentName, Content) {
                var html = '<span id="{0}" class="icon-tips">{1}</span>';
                return typeof (Content) == "string" ? html.replace("{0}", IdentName).replace("{1}", Content) : html.replace("{0}", "").replace("{1}", "0");
            }
        }
        $.Helper.StandardSize = {
            HeaderHeight: 72,
            ToolBarWidth: 144,
            MainViewTitle: 78,
        }
        //尺寸
        $.Helper.Size = {
            Height: $(window).height(),
            Width: $(window).width(),
            HeaderHeight: $(".HeaderPanel").height(),
            ToolBarWidth: $(".ToolBar_Wrap").width(),
            ContentHeight: $(window).height() - _Helper.StandardSize.HeaderHeight,
            ContentWidth: $(window).width() - _Helper.StandardSize.ToolBarWidth,
        };
        //选择器
        $.Helper.Selector = {
            Frame: {
                HeaderPanelMenu: $(".HeaderPanelItem"),
                ToolBarPanelMenu: $(".ToolBar_Content"),
                MainContent: $(".Main_Wrap"),
                Wrap: $(".Wrap"),

                HeaderPanelSearchButton: $(".HeaderPanelSearch"),
            },
            Plugs: {
                Loading: function () {
                    return {
                        Wrap: $(".LoadingWrap"),
                        Shade: $(".LoadingShade")
                    }
                },
                Shade: function () {
                    return {
                        Wrap: $(".ShadeWrap")
                    }
                },
                Tips: function () {
                    return $(".icon-tips");
                }
            }
        }
        //类型转换
        $.Helper.Type = {
            PixelToInt: function (Px) {
                return parseInt(Px.replace("px", ""));
            },
            ObjectToLayer: function (Object) {
                var _State = true;
                switch (typeof (Object)) {
                    case "number":
                        _State = true;
                        break;
                    case "object":
                        _State = false;
                        break;
                    case "string":
                        _State = false;
                        break;
                    case "undefined":
                        _State = true;
                        break;
                    default:
                        _State = true;
                        break;
                }
                return {
                    Element: _State ? $("Body") : $(Object),
                    State: _State,
                    Size: {
                        height: _State ? _Helper.Size.Height : $(Object).height(),
                        width: _State ? _Helper.Size.Width : $(Object).width(),
                    },
                    Position: {
                        top: _State ? 0 : $(Object).offset().top,
                        left: _State ? 0 : $(Object).offset().left,
                    },
                    Rect: {
                        height: _State ? _Helper.Size.Height : $(Object).height(),
                        width: _State ? _Helper.Size.Width : $(Object).width(),
                        top: _State ? 0 : $(Object).offset().top,
                        left: _State ? 0 : $(Object).offset().left
                    }
                }
            },
        }
        //操作方法
        $.Helper.View = {
            HeaderView: {
            },
            ToolBarView: {
            },
            MainView: {
                New: function (Title, CallBack) {
                    //var OldElement = $.Helper.Selector.MainWrap.find(".Main_Container");
                    //var ContainerCount = OldElement.length;
                    //var OffsetY = -(ContainerCount * $.Helper.StandardSize.MainViewTitle);
                    //var ContainerHeight = $.Helper.Size.ContentHeight + OffsetY;
                    //OldElement.each(function () {
                    //    if ($.Helper.Type.PixelToInt($(this).css("top")) >= ContainerHeight)
                    //        $(this).stop().css({ top: ContainerHeight - $.Helper.StandardSize.MainViewTitle }).find(".Main_Content").addClass("min")
                    //    else
                    //        $(this).stop().animate({ top: ContainerHeight - $.Helper.StandardSize.MainViewTitle }).find(".Main_Content").addClass("min")
                    //});

                    //$.Helper.Selector.MainWrap.prepend($.Helper.Html.MainLayer(Title));
                    //var OneElement = $.Helper.Selector.MainWrap.find(".Main_Container:eq(0)");
                    //OneElement.css({ top: -$.Helper.Size.ContentHeight }).find(".Main_Content").css({ height: ContainerHeight });
                    //OldElement.stop().animate({ top: ContainerHeight }, function () {

                    //});
                    //OneElement.stop().animate({ top: 0 });
                    if (CallBack) CallBack();
                },
                Open: function (Index, CallBack) {

                },
                Remove: function (Index, CallBack) {

                },
                Search: function (CallBack) {

                }
            },
        }
        //插件
        $.Helper.Plugs = {
            Loading: {
                Load: function (GlobalState, CallBack) {
                    if (_Helper.Selector.Plugs.Loading().Wrap.length == 0) {
                        var _Layer = _Helper.Type.ObjectToLayer(GlobalState);
                        if (_Layer.Element.length == 1) {
                            _Layer.Element.append(_Helper.Html.LoadingLayer());
                            _Helper.Selector.Plugs.Loading().Wrap.css(_Layer.Rect);
                            if (_Layer.State)
                                _Helper.Selector.Plugs.Loading().Shade.css(_Layer.Rect);
                            return (CallBack) ? CallBack() : _Helper.Selector.Plugs.Loading();
                        }
                    }
                },
                LoadForTimeOut: function (GlobalState, TimeOut, CallBack) {
                    if (_Helper.Selector.Plugs.Loading().Wrap.length == 0) {
                        var _Layer = _Helper.Type.ObjectToLayer(GlobalState);
                        if (_Layer.Element.length == 1) {
                            _Layer.Element.append(_Helper.Html.LoadingLayer());
                            _Helper.Selector.Plugs.Loading().Wrap.css(_Layer.Rect);
                            if (_Layer.State)
                                _Helper.Selector.Plugs.Loading().Shade.css(_Layer.Rect);
                            if (typeof (TimeOut) == "number")
                                setTimeout(_Helper.Plugs.Loading.End, TimeOut);
                            return (CallBack) ? CallBack() : _Helper.Selector.Plugs.Loading();
                        }
                    }
                },
                End: function () {
                    _Helper.Selector.Plugs.Loading().Wrap.remove();
                }
            },
            Shade: {
                Load: function (GlobalState, CallBack) {
                    if (_Helper.Selector.Plugs.Shade().Wrap.length == 0) {
                        var _Layer = _Helper.Type.ObjectToLayer(GlobalState);
                        if (_Layer.Element.length == 1) {
                            _Layer.Element.append(_Helper.Html.Shade());
                            _Helper.Selector.Plugs.Shade().Wrap.css(_Layer.Rect);
                            return (CallBack) ? CallBack() : _Helper.Selector.Plugs.Shade();
                        }
                    }
                },
                LoadForTimeOut: function (GlobalState, TimeOut, CallBack) {
                    if (_Helper.Selector.Plugs.Shade().Wrap.length == 0) {
                        var _Layer = _Helper.Type.ObjectToLayer(GlobalState);
                        if (_Layer.Element.length == 1) {
                            _Layer.Element.append(_Helper.Html.Shade());
                            _Helper.Selector.Plugs.Shade().Wrap.css(_Layer.Rect);
                            if (typeof (TimeOut) == "number")
                                setTimeout(_Helper.Plugs.Shade.End, TimeOut);
                            return (CallBack) ? CallBack() : _Helper.Selector.Plugs.Shade();
                        }
                    }
                },
                End: function () {
                    _Helper.Selector.Plugs.Shade().Wrap.remove();
                }
            },
            //暂无用
            Tips: {
                Load: function (InnerLayer, IdentName, Content, Position) {
                    if (typeof (IdentName) == "string")
                        if (_Helper.Selector.Plugs.Tips().find("#" + IdentName).length == 0) {
                            var _Layer = _Helper.Type.ObjectToLayer(InnerLayer);
                            if (_Layer.Element.length == 1) {
                                _Layer.Element.addClass("icon-tips-frame").append(_Helper.Html.Tips(IdentName, Content));
                                if (typeof (Position) != "undefined")
                                    _Helper.Selector.Plugs.Tips().find("#" + IdentName).css(Position);
                            }
                        }
                },
            }
        }
        $.Helper.Effects = {

        }
        $.Helper.Toggle = {
            Class: function (Element, ToggleCondition) {
                var _Toggle = ToggleCondition.split('|');
                var _Element = $(Element);
                var _Attr = _Element.attr("data-toggle");
                if (typeof (_Attr) == "undefined") {
                    _Element.addClass(_Toggle[0]).attr({ "data-toggle": "0" });
                }
                else {
                    if (parseInt(_Attr) == _Toggle.length - 1) {
                        _Element.removeClass(_Toggle[_Toggle.length - 1]).addClass(_Toggle[0]).attr({ "data-toggle": "0" });
                    }
                    else {
                        _Element.removeClass(_Toggle[parseInt(_Attr) - 1]).addClass(_Toggle[parseInt(_Attr) + 1]).attr({ "data-toggle": parseInt(_Attr) + 1 });
                    }
                }
            }
        }
        return $.Helper;
    }

    jQuery.DeBug = function () {
        $.Help.Ver = {
            title: "Helper帮助文档 1.0",
            author: "Vito",
            time: "2014-03-28",
            more: "方法入口和详细介绍会陆续补充"
        }
        $.Help.Effects = {
            name: "特效",
            Shade: {
                name: "遮罩层",
                method: "Start|StartTimeOut|End"
            },
            Wait: {
                name: "等待提示",
                method: "Start|StartTimeOut|End"
            }
        };
        $.Help.View = {
            name: "视图操作",
            method: "NewMainView|OpenMainView|RemoveMainView",
        };
        $.Help.Html = {
            name: "常用HTML",
            method: "MainLayer",
        };
        $.Help.Selector = {
            name: "主选择器封装",
            method: "HeaderPanelMenu|HeaderPanelSearchButton|MainWrap|ToolBarPanelMenu",
        }
        $.Help.Size = {
            name: "主要容器尺寸",
            method: "ContentHeight|ContentWidth|HeaderHeight|Height|ToolBarWidth|Width",
        }
        $.Help.StandardSize = {
            name: "主要元素尺寸",
            method: "HeaderHeight|MainViewTitle|ToolBarWidth",
        }
        $.Help.Type = {
            name: "类型转换|数据提取",
            method: "PixelToInt",
        }
    }
})(jQuery);


$(function () {
    //初始化全局库
    $.InitGlobal();
})