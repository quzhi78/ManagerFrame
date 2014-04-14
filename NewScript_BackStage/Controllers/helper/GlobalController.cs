using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NewScript_BackStage.Controllers.helper
{
    public class GlobalController : Controller
    {
        public ActionResult ValidateCode()
        {
            string vnum = "123422";
            Session["vnum"] = vnum;
            System.Drawing.Bitmap img = null;
            System.Drawing.Graphics g = null;
            Random r = new Random();
            int gheight = Convert.ToInt32(Math.Floor((decimal)vnum.Length * 14));

            img = new System.Drawing.Bitmap(gheight, 22);
            g = System.Drawing.Graphics.FromImage(img);

            for (int i = 0; i <= 10; i++)
            {
                int x1 = 0;
                x1 = r.Next(img.Width);
                int x2 = r.Next(img.Width);
                int y1 = r.Next(img.Height);
                int y2 = r.Next(img.Height);
                g.DrawLine(new System.Drawing.Pen(System.Drawing.Color.Silver), x1, y1, x2, y2);
            }
            System.Drawing.Font font = null;
            font = new System.Drawing.Font("Arial", 12);
            System.Drawing.Drawing2D.LinearGradientBrush brush = null;
            brush = new System.Drawing.Drawing2D.LinearGradientBrush(new System.Drawing.Rectangle(0, 0, img.Width, img.Height), System.Drawing.Color.Blue, System.Drawing.Color.Blue, 1.2F, true);
            g.DrawString(vnum, font, brush, 2, 2);

            //画图片的边框线 
            g.DrawRectangle(new System.Drawing.Pen(System.Drawing.Color.Silver), 0, 0, img.Width - 1, img.Height - 1);

            System.IO.MemoryStream ms1 = null;
            ms1 = new System.IO.MemoryStream();
            img.Save(ms1, System.Drawing.Imaging.ImageFormat.Png);
            g.Dispose();
            return File(ms1.ToArray(), @"image/Png");
        }

    }
}
