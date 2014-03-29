/* 
* 搜索 1.0 
* By : Vito
* Date: 2014-03-28
* 搜索功能模块
*/
(function ($) {
    jQuery.HelperSearch = {};

    jQuery.InitHelperSearch = function () {
        var _HelperSearch = $.HelperSearch;
        var _Helper = $.Helper;

        $.HelperSearch.Html = {

        }

        $.HelperSearch.Form = {
            Show: function () {
            },
            Hide: function () {
            },
            Clear: function () {
            }
        }

        $.HelperSearch.Data = {
        }

        $.HelperSearch.Server = {
        }

        return $.Helper;
    };
})(jQuery);

$(function () {
    //初始化全局库
    $.InitSearchHelper();
})