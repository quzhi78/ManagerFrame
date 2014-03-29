using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Helper
{
    public class Assist
    {
        /// <summary>
        /// 随机数 - 验证码辅助
        /// </summary>
        /// <param name="vcodenum"></param>
        /// <returns></returns>
        public static string rndnum(int vcodenum)
        {
            //Dim vchar As String = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y,Z"
            string vchar = "2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y,Z";
            //Dim vchar As String = "0,1,2,3,4,5,6,7,8,9"
            string[] VcArray = vchar.Split(",".ToCharArray()); //将字符串生成数组  
            string vnum = "";
            byte i = 0;
            System.Random ro = new Random();
            for (i = 1; i <= vcodenum; i++)
            {
                //Random ss = new Random();
                ////vnum = vnum & vcarray(Int(35 * Rnd())) '数组一般从0开始读取，所以这里为35*rnd
                //vnum = vnum + vcarray[(int)Math.Floor(28 * (float)(ss.Next() + ss.Next()) / 2)]; //数组一般从0开始读取，所以这里为35*rnd
                double decA = ro.NextDouble();
                vnum = vnum + VcArray[Convert.ToInt32(32 * decA)];
            }
            return vnum;
        }
    }
}
