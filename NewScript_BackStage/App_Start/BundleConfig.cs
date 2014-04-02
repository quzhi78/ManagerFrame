using System.Web;
using System.Web.Optimization;

namespace NewScript_BackStage
{
    public class BundleConfig
    {
        //所有脚本不能是Min版本,压缩后代码不能添加在集合里
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Script/Global").Include(
                        "~/Scripts/Global/Helper.js",
                        "~/Scripts/Global/HelperSearch.js"
                        ));

            //顺序不能调整
            //插件包
            bundles.Add(new ScriptBundle("~/Script/Addons").Include(
                        "~/Scripts/Addons/Raphael.js",
                        "~/Scripts/Addons/JustGage/JustGage.js"
                        ));
            bundles.Add(new ScriptBundle("~/Script/Addons/Charts").Include(
                        "~/Scripts/Addons/HighCharts/HighCharts.js"
                        //"~/Scripts/Addons/JustGage/JustGage.js"
                        ));
            bundles.Add(new StyleBundle("~/Style/Addons").Include(
                        ));

            //MVC自带脚本压缩和合并库.脚本会自动进行整合处理
            //脚本写这里   
            //所有脚本请使用    ~/Script/功能模块/脚本类
            bundles.Add(new ScriptBundle("~/Script/jquery").Include(
                        "~/Scripts/OriginalScript/jquery-{version}.js"));
            bundles.Add(new ScriptBundle("~/Script/jqueryui").Include(
                        "~/Scripts/OriginalScript/jquery-ui-{version}.js"));
            bundles.Add(new ScriptBundle("~/Script/jqueryval").Include(
                        "~/Scripts/OriginalScript/jquery.unobtrusive*",
                        "~/Scripts/OriginalScript/jquery.validate*"));

            //样式写这里
            bundles.Add(new StyleBundle("~/Style/default").Include(
                        "~/Content/Global.css"
                        ));

            bundles.Add(new StyleBundle("~/Style/jQuery/default").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));

            // HTML 5 兼容性检测支持库 - MVC 自带
            bundles.Add(new ScriptBundle("~/Script/modernizr").Include(
                        "~/Scripts/OriginalScript/modernizr-*"));
        }
    }
}