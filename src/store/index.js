import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        homedata: [
            { "bvid": "BV1BA411W7sG", "title": "“大头娃娃”卷土重来？！背后真相令人发指！", "play": "230.1万 ", "video_review": "1.3万", "pic": "https://i1.hdslb.com/bfs/archive/03df9124e7ff391b7c894acb3d7658af26c96f1c.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1FK4y1W7Mg", "title": "罗汉鬼套路：lol新版本最骚奶爸 小丑回春流！！", "play": "47.5万 ", "video_review": "2681", "pic": "https://i0.hdslb.com/bfs/archive/0ab5cc902514f5aea0610c43120a7bc5da17c71a.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1ev411x7en", "title": "【何同学】这视频能让你戒手机", "play": "518.3万 ", "video_review": "6.4万", "pic": "https://i0.hdslb.com/bfs/archive/f79332c45ef4fa4387f3e333a704a4ace3c9919f.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1jT4y1N717", "title": "【世界级演唱】海豚音之王VITAS首唱《杀破狼》，中俄双语，挑战人类音域极限！", "play": "47.8万 ", "video_review": "3232", "pic": "https://i1.hdslb.com/bfs/archive/4b14a46445008b24e6aacc49fef113a48d410fc1.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1yv411x7NY", "title": "这就是时尚的代价？？？", "play": "59.1万 ", "video_review": "1.6万", "pic": "https://i1.hdslb.com/bfs/archive/a70bb58182f60f7bf966d5c36060735a72173db8.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Rh41117qa", "title": "长辈试图和你搭话的模样", "play": "137.4万 ", "video_review": "8281", "pic": "https://i1.hdslb.com/bfs/archive/e6307912b91b46940acdd416bcb1a2180af293ef.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1gr4y1T7vr", "title": "慈善之王老番茄", "play": "82.4万 ", "video_review": "8962", "pic": "https://i1.hdslb.com/bfs/archive/e338f9bd67e5f191abeb9ae47c002097a062b606.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1QK411M7bd", "title": "零下两度，50位猫娘coser太震撼了！", "play": "34.4万 ", "video_review": "2657", "pic": "https://i1.hdslb.com/bfs/archive/fb2ec22316e77ae28df7769322e4e9b54eebe8a0.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1mt4y1r7os", "title": "这矿车是玩过音游吗？当萌猴的《funny》音乐可视化后...", "play": "35.4万 ", "video_review": "1143", "pic": "https://i1.hdslb.com/bfs/archive/49d7cb301e3fbc8998270e1fac3e74b31e93fffd.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1nh41127Do", "title": "钱收割人的年代，6大新生存法则【干货多到变态】", "play": "17.9万 ", "video_review": "1350", "pic": "https://i0.hdslb.com/bfs/archive/263caf653ae7e98498d60d5f0f2ce7d583a04d1e.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Lp4y1x7Hc", "title": "从来没想过，不孕会发生在我身上！为了成为妈妈，我都经历了什么？", "play": "26.8万 ", "video_review": "2337", "pic": "https://i1.hdslb.com/bfs/archive/e22cbea2260cb30da2a43e7378609ffcb6601d98.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1br4y1T7A7", "title": "\"是时候来一场文艺复兴了。\"", "play": "43.4万 ", "video_review": "9789", "pic": "https://i0.hdslb.com/bfs/archive/e588f6357cc6c782eaa178516448095d3f63d32c.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1754y147Ay", "title": "《送你一朵小红花》，真的真的好无聊！！", "play": "116.5万 ", "video_review": "2.5万", "pic": "https://i1.hdslb.com/bfs/archive/0b04b8fde8295b6d8408478a72da8e642c26dd17.jpg@480w_270h_1c.webp" },
            { "bvid": "BV14f4y1C7p4", "title": "飞得很远的背锁式纸飞机，LaFOSSE Lock 标准型", "play": "86.2万 ", "video_review": "461", "pic": "https://i1.hdslb.com/bfs/archive/a9995599f6acea05e762e2ccc84268706e2e1ca5.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1gA411H7Do", "title": "错的不是我，而是The World", "play": "38.7万 ", "video_review": "1139", "pic": "https://i1.hdslb.com/bfs/archive/8f15b90c8291f2b5ab7039c738505f85bba1d24b.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1n54y147R4", "title": "蝙蝠侠：我的隐形战机是不可能被发现的！", "play": "61.9万 ", "video_review": "800", "pic": "https://i2.hdslb.com/bfs/archive/dae34d495103d2b8d5eae3c567c94aeb26606a34.jpg@480w_270h_1c.webp" },
            { "bvid": "BV14r4y1T7Nc", "title": "妹妹被马桶吃掉了！这房子太吓人了！", "play": "34.6万 ", "video_review": "8888", "pic": "https://i2.hdslb.com/bfs/archive/29288b33dae2ea62070000f5b6280bb052eae31a.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Zy4y1e7Hk", "title": "【艾叔】粤港澳大湾区4000万豪宅，明珠湾壹号头等舱的视野是什么样", "play": "21.6万 ", "video_review": "2119", "pic": "https://i2.hdslb.com/bfs/archive/fc9c363e8b7f3e954ba25c07858e5ad2cb86f1b2.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Di4y1F7t6", "title": "都进来卧槽！！这炸裂的打戏竟然来自一个15岁女孩！中国演艺圈需要你！", "play": "84.9万 ", "video_review": "2012", "pic": "https://i2.hdslb.com/bfs/archive/585550c5a505e84160e0f18ce0fe83115072235a.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Nv411475X", "title": "当你遇上“出血”和“骨折”等危机情况，该如何救治自己和他人？", "play": "15.7万 ", "video_review": "1695", "pic": "https://i2.hdslb.com/bfs/archive/d84620721b49b023e1e760aecc81fd06e669dae4.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Gy4y1v7uE", "title": "【童姥】揭秘人体交易黑市：你死了，比活着更值钱--黑产揭秘017", "play": "50.6万 ", "video_review": "2384", "pic": "https://i1.hdslb.com/bfs/archive/b1c2a213634c65517588d28cb690895748333d3c.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Sv411x7Da", "title": "记忆重现，UP主罚（shan）站（guang）时刻！【百大UP主颁奖】", "play": "89.3万 ", "video_review": "428", "pic": "https://i1.hdslb.com/bfs/archive/77233b77f2692181d74eadeb096a7e802732a5bf.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1hK4y157SM", "title": "【钢琴】《所念皆星河 》Oskar Roman Jezior CMJ", "play": "64.7万 ", "video_review": "633", "pic": "https://i0.hdslb.com/bfs/archive/df86c6a7b9405686ca82730d39bdff4909b7432b.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1jr4y1T7S6", "title": "徐老师来巡山299：不当人打法，永恩被控到死。", "play": "30.1万 ", "video_review": "1781", "pic": "https://i0.hdslb.com/bfs/archive/5907cd4d1cc7f1561385fb0ad13ebb8dc04135d8.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1wK4y1W71R", "title": "2020年度沙雕新闻盘点！一整年的快乐源泉都在这了", "play": "102.4万 ", "video_review": "7455", "pic": "https://i1.hdslb.com/bfs/archive/2a5714b27becaf56ece89075ca2acee31a8e819d.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1ya4y1n75t", "title": "80元一斤的野生超大花甲王，价格比普通花甲贵了八倍，会更好吃吗？", "play": "38.4万 ", "video_review": "8827", "pic": "https://i1.hdslb.com/bfs/archive/e30478bf2073ab89808ef9f83ed53cc62c60da24.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1XK4y1p7GF", "title": "《明日方舟》EP - 冬涤", "play": "47.6万 ", "video_review": "1987", "pic": "https://i2.hdslb.com/bfs/archive/aeb18a48b6d3a086bdba3b0d0d3fae294e60dee2.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1E54y147gY", "title": "一位27岁癌症患者的自白，年轻人，请别再糟蹋你的身体！", "play": "47万 ", "video_review": "985", "pic": "https://i2.hdslb.com/bfs/archive/0f41468f9724c68afad172c277004de067815afa.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1ur4y1T71J", "title": "当身体被掏空！", "play": "17万 ", "video_review": "1710", "pic": "https://i1.hdslb.com/bfs/archive/32bed3c0761465cf722ffe62bc1114febcba9d23.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Bp4y1s7Th", "title": "英法对决！哈克表情管理名场面！9.8分硬核神剧《是，首相》（06/S2E3&E4）", "play": "63万 ", "video_review": "5455", "pic": "https://i1.hdslb.com/bfs/archive/56baf34fd1035a1a6d1ad3c46203e4e0cb5392ef.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Ap4y1x7aQ", "title": "一款“益智”小玩具，玩一遍感觉智商受到了侮辱", "play": "117.4万 ", "video_review": "684", "pic": "https://i2.hdslb.com/bfs/archive/d898921a40c2d602855380b129c449fe846021fd.jpg@480w_270h_1c.webp" },
            { "bvid": "BV16K4y157NL", "title": "日本真的有女友租赁服务吗？", "play": "14万 ", "video_review": "800", "pic": "https://i2.hdslb.com/bfs/archive/232a3a94ede775baab1e5d13e9229c2aa5f296eb.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1y54y1W7Vb", "title": "高中女生街头借火点烟 竟被要求加微信！", "play": "90.6万 ", "video_review": "3337", "pic": "https://i2.hdslb.com/bfs/archive/7f5cb8629acc1dafd74e02abd394f41063ee4a8f.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1i5411n7WC", "title": "【火影人物志64】人见人爱的美少女，天天 可爱与实力并存的忍具大师！", "play": "12.6万 ", "video_review": "1099", "pic": "https://i1.hdslb.com/bfs/archive/19f6bd1eccd8937006e3ddd82a6411590f9bec89.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Et4y1r7Eu", "title": "骁龙888性能分析：翻车！", "play": "227万 ", "video_review": "2万", "pic": "https://i1.hdslb.com/bfs/archive/b168c77ff9d280b3d9f7f8a134ddc9df9c953ec9.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1RV41147Vo", "title": "华农兄弟：竹林倒下一棵树，刚好可以放香菇，顺便挖点竹笋", "play": "70.8万 ", "video_review": "8916", "pic": "https://i1.hdslb.com/bfs/archive/8927e49f6c08694075b0b8e4d75bcd307dec4c68.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Zz4y1z7Dj", "title": "当南方孩子到了零下20度的北方……", "play": "467.7万 ", "video_review": "4230", "pic": "https://i2.hdslb.com/bfs/archive/73dfe59cbf6510f56dd65fa5c39e4ae3055a3640.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1qv411x7PF", "title": "我的bronya搁这儿装绫波丽呢", "play": "42.4万 ", "video_review": "2558", "pic": "https://i0.hdslb.com/bfs/archive/69fb48f382dae955d5bffd1ac05313b89c5eaa6d.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1dX4y1N7W5", "title": "【王老菊】时代没变", "play": "16.6万 ", "video_review": "2744", "pic": "https://i1.hdslb.com/bfs/archive/efe1743fc2d92f64ee662599055a23980653f912.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1yK4y1576N", "title": "【日本儿童歌谣比赛】2岁霓虹幼崽唱歌太萌了", "play": "33.6万 ", "video_review": "632", "pic": "https://i2.hdslb.com/bfs/archive/35025b3a432d2bb60a854c52ab962cc83ab77bc9.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1ky4y1e7qm", "title": "课 堂 请 勿 对 对 子 5.0 ！！！", "play": "473.4万 ", "video_review": "4.3万", "pic": "https://i2.hdslb.com/bfs/archive/1fd752eb479a8882e059e7e4b01d7429665395d0.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1aX4y1M741", "title": "爷青回！黄晓明baby李菲儿开撕了！资深公关分析文案啦！", "play": "74.7万 ", "video_review": "2673", "pic": "https://i2.hdslb.com/bfs/archive/21fa1b47039e78b4a29e57c461f99b21182f2c5d.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1dA411p7GX", "title": "适合收藏的入门妆教！真滴绝了～", "play": "155.5万 ", "video_review": "5813", "pic": "https://i2.hdslb.com/bfs/archive/c21d30d2ab4d3e5657f22d4dd073be6905ac471e.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1w54y1s7HB", "title": "《 爷 爷 拯 救 计 划 2 ！》", "play": "38.5万 ", "video_review": "2661", "pic": "https://i0.hdslb.com/bfs/archive/4d806eaf28a6fda6af2ea9c61658c4dab81974c1.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1M5411p7PB", "title": "油管7千万播放的暗恋神曲《Crush》，说不出口的悸动，恋爱的感觉！", "play": "131.5万 ", "video_review": "1600", "pic": "https://i1.hdslb.com/bfs/archive/47a57a35a0c5e81368cac68793b475a55e9a9797.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1jK4y1W7fv", "title": "超高校级食材派蒙的处刑记录", "play": "11.8万 ", "video_review": "382", "pic": "https://i2.hdslb.com/bfs/archive/92908f4dd775c946cba1c8a618138d2786f3f0a5.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Kr4y1T7bk", "title": "2077年的美国，有钱人就可以永生吗？「上篇」", "play": "18万 ", "video_review": "724", "pic": "https://i2.hdslb.com/bfs/archive/bc53d437f7237523b1e527afe66d711d9ae1d01b.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Vr4y1T7Xn", "title": "黄 金 搭 档", "play": "109.3万 ", "video_review": "7712", "pic": "https://i0.hdslb.com/bfs/archive/13354acc15680d189fbf236cf4e0e212d6e1e1e6.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1dp4y1s77J", "title": "C4炸弹之 如 来 神 掌！【C4快乐阴人流#13】", "play": "98.4万 ", "video_review": "5108", "pic": "https://i2.hdslb.com/bfs/archive/9e31c9c61247c719376da311e8389bc727905e64.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Wy4y127TH", "title": "一款把“尊重玩家”写进代码的游戏，再次刷新了我对罐头的认识【游戏背后的神】", "play": "22.1万 ", "video_review": "1027", "pic": "https://i1.hdslb.com/bfs/archive/891311170c42fe03a9437ab86a23d70155c22c5f.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1EA411W7uG", "title": "不 愧 是 我 王 冰 冰", "play": "243.2万 ", "video_review": "1295", "pic": "https://i1.hdslb.com/bfs/archive/2b7362e15851b4048bf38022322771d656f1b321.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1fV41147Gb", "title": "台词漏洞百出！打戏笑掉大牙！爆笑吐槽《有翡》第4期", "play": "35.3万 ", "video_review": "4607", "pic": "https://i2.hdslb.com/bfs/archive/85240b512ace564db067a378ba0da5de445bfec7.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Ca4y1n7d8", "title": "阅 冰 仪 式", "play": "97.1万 ", "video_review": "809", "pic": "https://i0.hdslb.com/bfs/archive/3cd0695bf2cece9b057e1fad187f534181cbb383.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Wy4y1v7Vc", "title": "“不小心”把女朋友手机丢进火锅里……会发生什么？？！", "play": "14.6万 ", "video_review": "1157", "pic": "https://i2.hdslb.com/bfs/archive/5477a1411998df58c92931f491de66f9f503151e.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1K54y1472s", "title": "如果我们18岁就在一起了？", "play": "16.8万 ", "video_review": "4075", "pic": "https://i0.hdslb.com/bfs/archive/c5a872c33af5d0a0b374f7dc9ca39192a4cd5522.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Jt4y1r7c8", "title": "3元一串，10元3串，真正的烤面筋真正的实惠。", "play": "13.9万 ", "video_review": "1192", "pic": "https://i0.hdslb.com/bfs/archive/bf8d82f1a89dba181c390b7938da3ab37232d043.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1q5411n7Ji", "title": "妖怪：我不是真正的快乐！", "play": "15.6万 ", "video_review": "1954", "pic": "https://i1.hdslb.com/bfs/archive/b1f83c2184c5df0cb4d76eca86de10aaa55de612.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Za4y1n7ub", "title": "不心动挑战！淑女集结号！", "play": "52.7万 ", "video_review": "3.1万", "pic": "https://i1.hdslb.com/bfs/archive/ada1dcb61b023bfd53098ca2e8c350e79047de5c.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1hX4y1M7cU", "title": "温铁军：印度经济将超越中国？别被西方宣传误导了【温铁军践闻录3-7】", "play": "15.3万 ", "video_review": "1291", "pic": "https://i0.hdslb.com/bfs/archive/7220e3fa098a6b54e6f3d5ca1750ae0a765e6e9a.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Jh41127je", "title": "想吃这道菜要先学“做手术”？【滇西小哥】", "play": "13.2万 ", "video_review": "1630", "pic": "https://i0.hdslb.com/bfs/archive/dbc385dc8ec3ec6a9fb0f22fa4836fce15c4b98d.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1aA411W7EA", "title": "【罗云熙的Reaction】今天我来投币啦~", "play": "11.5万 ", "video_review": "8890", "pic": "https://i0.hdslb.com/bfs/archive/28ea015aea534047370fae35b61730a03c507896.jpg@480w_270h_1c.webp" },
            { "bvid": "BV12z4y1r7bf", "title": "34元买到辣眼打工游戏 妈妈和女儿都有胸毛", "play": "30.2万 ", "video_review": "1303", "pic": "https://i2.hdslb.com/bfs/archive/bc4ad57f82f18b25a740e87253616278ca75b568.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Gr4y1T72a", "title": "【中国电信 X 英雄联盟】K/DA《MORE》炸裂翻跳 | 能成为你的英雄吗？", "play": "40万 ", "video_review": "848", "pic": "https://i0.hdslb.com/bfs/archive/dbb8beed575607f270d61a5945b1336f3f03a4b1.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Lf4y1y7iZ", "title": "危！在女友面前狂夸王冰冰？她吃醋了！", "play": "17.1万 ", "video_review": "2275", "pic": "https://i2.hdslb.com/bfs/archive/622c7d6a703b4ab49465e11be5f820f06e531eba.jpg@480w_270h_1c.webp" },
            { "bvid": "BV16U4y1x7Ve", "title": "公子且细瞧 我们是妖还是仙～原创曲·编舞《盘 丝》", "play": "19.5万 ", "video_review": "1065", "pic": "https://i1.hdslb.com/bfs/archive/23f7addfb78507a90ccc4ea607e3d91e6a071fa3.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Ci4y1w79Q", "title": "蜡笔小新里提过的霓虹美人们", "play": "337.1万 ", "video_review": "7261", "pic": "https://i0.hdslb.com/bfs/archive/8bf5f2638419b3915a125f604b8ed503968a9d9e.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1f54y1x7pJ", "title": "科学技术难道就不值得尊重吗？", "play": "11.7万 ", "video_review": "251", "pic": "https://i0.hdslb.com/bfs/archive/79702c39d5723ed725f466fbadf6d06639ab248a.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Uv411x7EP", "title": "云南最“神秘”火锅，每次吃要等3个小时！猛男看了都打哆嗦", "play": "14.5万 ", "video_review": "3729", "pic": "https://i0.hdslb.com/bfs/archive/00ef7bb6a39bd95ab3787b0ec57ee722d05060e0.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1s5411n7ms", "title": "【高能山寨】小电吹风佩巴第二集-吹风了", "play": "117.8万 ", "video_review": "6110", "pic": "https://i1.hdslb.com/bfs/archive/31edf185104f59bfb9374087389a2f1763fb4843.jpg@480w_270h_1c.webp" },
            { "bvid": "BV175411n7uH", "title": "【虫哥】于正道歉的那部神剧《宫锁连城》到底是有多魔鬼...", "play": "70.1万 ", "video_review": "1.2万", "pic": "https://i1.hdslb.com/bfs/archive/f3fb1b0f0da189d85ce7005a8aa15499e9f9f3b6.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1cV411t7bi", "title": "爆肝30天做出逼死官方的螳螂刀！能弹出，能收回。", "play": "44.2万 ", "video_review": "1166", "pic": "https://i2.hdslb.com/bfs/archive/5f8f82d547b131e4e6aa48be2a700f7bbe955d83.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1554y147Zp", "title": "啵 啵 颂", "play": "13.3万 ", "video_review": "567", "pic": "https://i1.hdslb.com/bfs/archive/589b8ad524cee0d94dc21be50b4357769e8eb9f9.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1ri4y1F7Rg", "title": "我麻了! 这动画太离谱了【阅片无数动漫篇19】", "play": "160.4万 ", "video_review": "1.2万", "pic": "https://i0.hdslb.com/bfs/archive/b644a1da36cb01ea5106a31955ea574d562f9b1a.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1ja4y1n77j", "title": "你 怎 么 睡 得 着 啊 ？", "play": "87.5万 ", "video_review": "648", "pic": "https://i1.hdslb.com/bfs/archive/a2327e38fa0cd94df32f3c6dfa35f882cec6d27a.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1FT4y1T77v", "title": "全国统一的人类共同行为记录② 每日一气╬", "play": "20.1万 ", "video_review": "1816", "pic": "https://i1.hdslb.com/bfs/archive/8d9557100498b793f0bbb34ef514c2cfcfb55f78.jpg@480w_270h_1c.webp" },
            { "bvid": "BV17V411t7Da", "title": "【高圆圆】开启一场18年闺蜜的美好时光 | 再次遇见你真好", "play": "36.2万 ", "video_review": "1899", "pic": "https://i0.hdslb.com/bfs/archive/30dceb673da5db2915a11f8bd09eafa5ed01f3c6.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1HT4y1N7dW", "title": "如何剥出一个生鸡蛋", "play": "65.1万 ", "video_review": "1984", "pic": "https://i0.hdslb.com/bfs/archive/4a72cbc2f54f5dbccfae1454009b6b0d7eb144f1.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Ci4y1F7nV", "title": "如何一键恢复被关掉的“重要”网页？那些巨TMD实用的冷知识！", "play": "2.6万 ", "video_review": "233", "pic": "https://i1.hdslb.com/bfs/archive/e1e6c013e24f0eb4712f88a8ca08b08062035de5.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1wh41127CD", "title": "【逗鱼时刻】第284期 求求你别搞事了！", "play": "84.2万 ", "video_review": "5009", "pic": "https://i0.hdslb.com/bfs/archive/468e261d5c80e74d9dbb581a6c8872c01a06a37b.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1j54y147UQ", "title": "希 望 妖 怪 可 以 活 过 来【最强唐僧#12】", "play": "12.8万 ", "video_review": "290", "pic": "https://i1.hdslb.com/bfs/archive/545400891ce44a576a40e16269a3b0234c861b1d.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Qv411x77y", "title": "北斗星司：热忱之心，不可泯灭！", "play": "38.4万 ", "video_review": "760", "pic": "https://i0.hdslb.com/bfs/archive/cfef5f2fe4d278a0d02e480387194fad8bdeaa02.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Fy4y1v7fd", "title": "【新三国Rap】接着奏乐！接着舞！", "play": "68.1万 ", "video_review": "1256", "pic": "https://i2.hdslb.com/bfs/archive/10d13a8794d7edd129038a74cf51b6dbc5146c7c.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1VV411t7Ge", "title": "我佛了！行业大佬揭秘上流阶级社交内幕！传说中的男装高定凭什么吊打一众大牌？", "play": "4.3万 ", "video_review": "2227", "pic": "https://i1.hdslb.com/bfs/archive/978cbd49b81b0ecb3a387b25c5cb8c6d60646aca.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1sf4y1y7dF", "title": "【三无】今日重到苏澜桥", "play": "4万 ", "video_review": "537", "pic": "https://i1.hdslb.com/bfs/archive/07b7d715fb8a2485f53e8ba6d3781d56755f6754.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1cK4y1W77n", "title": "【汉末风云】（完整合集）大 汉 亡 了！四十年天下大势再解读！", "play": "2万 ", "video_review": "165", "pic": "https://i0.hdslb.com/bfs/archive/cd10ab3938194442da346e494b52e5fe5a64e377.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Zv411x7Ru", "title": "教大家个比“多喝热水”更有效的取暖方式！| 原创动画 | 我的爸爸是条龙哦", "play": "16.2万 ", "video_review": "227", "pic": "https://i1.hdslb.com/bfs/archive/f1362617aed951b9ac0483ec8eb0fc1cd68f6781.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1eV41187kS", "title": "不管了 我的抗寒能力已点满。。", "play": "77.9万 ", "video_review": "74", "pic": "https://i2.hdslb.com/bfs/archive/6d3e352d3fca7912533425a30a054320afac106d.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1aK411M7fk", "title": "女孩子第一次玩我的世界有多呆", "play": "15.7万 ", "video_review": "1240", "pic": "https://i2.hdslb.com/bfs/archive/9901badba152e15169a8618660d4119f2a73deed.jpg@480w_270h_1c.webp" },
            { "bvid": "BV11v411x7gA", "title": "年度土味颁奖典礼！究竟哪些视频能够得奖？！", "play": "8.3万 ", "video_review": "6475", "pic": "https://i2.hdslb.com/bfs/archive/7c459210f547200985ef93267e8ab4925463c4eb.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1KX4y1K7CB", "title": "【原神】月卡15金的欧皇竟然真实存在，主播直接破防", "play": "20.1万 ", "video_review": "1188", "pic": "https://i1.hdslb.com/bfs/archive/c9508ea5d5196f9e022089653e3bf3474022e139.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1kA411W72d", "title": "【散人】全程欢笑 超智障憨憨高尔夫", "play": "17.8万 ", "video_review": "3607", "pic": "https://i1.hdslb.com/bfs/archive/5d1378438aaa99ab63085000a07f78c62c119651.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1hz4y167Cj", "title": "【罗翔】我包庇了德国青年逃票算是共同犯罪吗？", "play": "35万 ", "video_review": "3382", "pic": "https://i0.hdslb.com/bfs/archive/268658c646c8620085b3015d99468abaeff6b74b.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Rv411x7Vy", "title": "【大家测】价值688元小\"米10至尊纪念版\"开箱体验 居然月销上过万件", "play": "25.5万 ", "video_review": "5489", "pic": "https://i1.hdslb.com/bfs/archive/5ce88324af35773f9bc6738858327967b2dd6e09.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1Wt4y1r7km", "title": "【成果展示】3周挑战贝多芬，学习钢琴成果首次公开！", "play": "45.8万 ", "video_review": "3304", "pic": "https://i1.hdslb.com/bfs/archive/64db30533ce7feceb60c1b93e6fb566445ed1c17.jpg@480w_270h_1c.webp" },
            { "bvid": "BV13T4y1N7vi", "title": "一年交往30多个男人捞一亿，她就长封面这样", "play": "66.9万 ", "video_review": "3103", "pic": "https://i0.hdslb.com/bfs/archive/8c9beb577456e6d1948ba1e12474721d85a50384.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1QK411M7gN", "title": "【咸恩静】带你盘点韩国高人气零食", "play": "5.8万 ", "video_review": "1125", "pic": "https://i0.hdslb.com/bfs/archive/e6bf1abaa61b7af96e9aed7105e5468f881981e6.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1So4y1d7op", "title": "呦呦呦，这……人呢？", "play": "12.4万 ", "video_review": "125", "pic": "https://i0.hdslb.com/bfs/archive/c0ca1b4727112b61c4a463f013852bd14204e9d8.png@480w_270h_1c.webp" },
            { "bvid": "BV1jy4y1H7rC", "title": "我在两亿人面前坚持了50秒！！", "play": "175万 ", "video_review": "4.9万", "pic": "https://i2.hdslb.com/bfs/archive/0ed9350676dd7d8ec5bdb9aad2684ab4c4edaf83.jpg@480w_270h_1c.webp" },
            { "bvid": "BV17r4y1T7cQ", "title": "【权术与谋略】艾尔文最后一战——玛利亚之墙夺还战地图详解", "play": "7.1万 ", "video_review": "957", "pic": "https://i2.hdslb.com/bfs/archive/919e9cacc43851836e91f011697f4b85927e810a.jpg@480w_270h_1c.webp" },
            { "bvid": "BV1uz4y167hA", "title": "什么时候结婚？", "play": "51.4万 ", "video_review": "1.1万", "pic": "https://i0.hdslb.com/bfs/archive/546cf5d4592c981c4ab09b8f15d1522a23b756ff.jpg@480w_270h_1c.webp" }
        ],
        classdata: {
            1: [{
                    value: 1,
                    text: "MAD·AMV",
                    classvalue: "24",
                },
                {
                    value: 2,
                    text: "MMD·3D",
                    classvalue: "25",
                },
                {
                    value: 3,
                    text: "短片·手书·配音",
                    classvalue: "47",
                },
                {
                    value: 4,
                    text: "特摄",
                    classvalue: "86",
                },
                {
                    value: 5,
                    text: "综合",
                    classvalue: "27",
                },
            ],
            13: [{
                    value: 1,
                    text: "连载动画",
                    classvalue: "33",
                },
                {
                    value: 2,
                    text: "完结动画",
                    classvalue: "32",
                },
                {
                    value: 3,
                    text: "资讯",
                    classvalue: "51",
                },
                {
                    value: 4,
                    text: "官方延伸",
                    classvalue: "152",
                },
            ],
            167: [{
                    value: 1,
                    text: "国产动画",
                    classvalue: "153",
                },
                {
                    value: 2,
                    text: "国产原创相关",
                    classvalue: "168",
                },
                {
                    value: 3,
                    text: "布袋戏",
                    classvalue: "169",
                },
                {
                    value: 4,
                    text: "动态漫·广播剧",
                    classvalue: "195",
                },
                {
                    value: 5,
                    text: "资讯",
                    classvalue: "170",
                },
            ],
            3: [{
                    value: 1,
                    text: "原创音乐",
                    classvalue: "28",
                },
                {
                    value: 2,
                    text: "翻唱",
                    classvalue: "31",
                },
                {
                    value: 3,
                    text: "VOCALOID·UTAU",
                    classvalue: "30",
                },
                {
                    value: 4,
                    text: "电音",
                    classvalue: "194",
                },
                {
                    value: 5,
                    text: "演奏",
                    classvalue: "59",
                },
                {
                    value: 6,
                    text: "MV",
                    classvalue: "193",
                },
                {
                    value: 7,
                    text: "音乐现场",
                    classvalue: "29",
                },
                {
                    value: 8,
                    text: "音乐综合",
                    classvalue: "130",
                },
            ],
            129: [{
                    value: 1,
                    text: "宅舞",
                    classvalue: "20",
                },
                {
                    value: 2,
                    text: "街舞",
                    classvalue: "198",
                },
                {
                    value: 3,
                    text: "明星舞蹈",
                    classvalue: "199",
                },
                {
                    value: 4,
                    text: "中国舞",
                    classvalue: "200",
                },
                {
                    value: 5,
                    text: "舞蹈综合",
                    classvalue: "154",
                },
                {
                    value: 6,
                    text: "舞蹈教程",
                    classvalue: "156",
                },
            ],
            4: [{
                    value: 1,
                    text: "单机游戏",
                    classvalue: "17",
                },
                {
                    value: 2,
                    text: "电子竞技",
                    classvalue: "171",
                },
                {
                    value: 3,
                    text: "手机游戏",
                    classvalue: "172",
                },
                {
                    value: 4,
                    text: "网络游戏",
                    classvalue: "65",
                },
                {
                    value: 5,
                    text: "桌游棋牌",
                    classvalue: "173",
                },
                {
                    value: 6,
                    text: "GMV",
                    classvalue: "121",
                },
                {
                    value: 7,
                    text: "音游",
                    classvalue: "136",
                },
                {
                    value: 8,
                    text: "Mugen",
                    classvalue: "19",
                },
            ],
            36: [{
                    value: 1,
                    text: "科学科普",
                    classvalue: "201",
                },
                {
                    value: 2,
                    text: "社科人文（趣味科普人文）",
                    classvalue: "124",
                },
                {
                    value: 3,
                    text: "财经",
                    classvalue: "207",
                },
                {
                    value: 4,
                    text: "校园学习",
                    classvalue: "208",
                },
                {
                    value: 5,
                    text: "职业职场",
                    classvalue: "209",
                },
                {
                    value: 6,
                    text: "野生技术协会",
                    classvalue: "122",
                },
                {
                    value: 7,
                    text: "演讲·公开课（已下线）",
                    classvalue: "39",
                },
                {
                    value: 8,
                    text: "星海（已下线）",
                    classvalue: "96",
                },
                {
                    value: 9,
                    text: "机械（已下线）",
                    classvalue: "98",
                },
            ],
            188: [{
                    value: 1,
                    text: "手机平板",
                    classvalue: "95",
                },
                {
                    value: 2,
                    text: "电脑装机",
                    classvalue: "189",
                },
                {
                    value: 3,
                    text: "摄影摄像",
                    classvalue: "190",
                },
                {
                    value: 4,
                    text: "影音智能",
                    classvalue: "191",
                },
            ],
            160: [{
                    value: 1,
                    text: "搞笑",
                    classvalue: "138",
                },
                {
                    value: 2,
                    text: "日常",
                    classvalue: "21",
                },
                {
                    value: 3,
                    text: "美食圈（重定向）",
                    classvalue: "76",
                },
                {
                    value: 4,
                    text: "动物圈",
                    classvalue: "75",
                },
                {
                    value: 5,
                    text: "手工",
                    classvalue: "161",
                },
                {
                    value: 6,
                    text: "绘画",
                    classvalue: "162",
                },
                {
                    value: 7,
                    text: "运动",
                    classvalue: "163",
                },
                {
                    value: 8,
                    text: "汽车",
                    classvalue: "176",
                },
                {
                    value: 9,
                    text: "其他",
                    classvalue: "174",
                },
            ],
            211: [{
                    value: 1,
                    text: "美食制作（原[生活]->[美食圈]）",
                    classvalue: "76",
                },
                {
                    value: 2,
                    text: "美食侦探",
                    classvalue: "212",
                },
                {
                    value: 3,
                    text: "美食测评",
                    classvalue: "213",
                },
                {
                    value: 4,
                    text: "田园美食",
                    classvalue: "214",
                },
                {
                    value: 5,
                    text: "美食记录",
                    classvalue: "215",
                },
            ],
            119: [{
                    value: 1,
                    text: "鬼畜调教",
                    classvalue: "22",
                },
                {
                    value: 2,
                    text: "音MAD",
                    classvalue: "26",
                },
                {
                    value: 3,
                    text: "人力VOCALOID",
                    classvalue: "126",
                },
                {
                    value: 4,
                    text: "鬼畜剧场",
                    classvalue: "216",
                },
                {
                    value: 5,
                    text: "教程演示",
                    classvalue: "127",
                },
            ],
            155: [{
                    value: 1,
                    text: "美妆",
                    classvalue: "157",
                },
                {
                    value: 2,
                    text: "服饰",
                    classvalue: "158",
                },
                {
                    value: 3,
                    text: "健身",
                    classvalue: "164",
                },
                {
                    value: 4,
                    text: "T台",
                    classvalue: "159",
                },
                {
                    value: 5,
                    text: "风尚标",
                    classvalue: "192",
                },
            ],
            202: [{
                    value: 1,
                    text: "热点",
                    classvalue: "203",
                },
                {
                    value: 2,
                    text: "环球",
                    classvalue: "204",
                },
                {
                    value: 3,
                    text: "社会",
                    classvalue: "205",
                },
                {
                    value: 4,
                    text: "综合",
                    classvalue: "206",
                },
            ],
            165: [{
                value: 1,
                text: "广告",
                classvalue: "166",
            }, ],
            5: [{
                    value: 1,
                    text: "综艺",
                    classvalue: "71",
                },
                {
                    value: 2,
                    text: "明星",
                    classvalue: "137",
                },
                {
                    value: 3,
                    text: "Korea相关（已下线）",
                    classvalue: "131",
                },
            ],
            181: [{
                    value: 1,
                    text: "影视杂谈",
                    classvalue: "182",
                },
                {
                    value: 2,
                    text: "影视剪辑",
                    classvalue: "183",
                },
                {
                    value: 3,
                    text: "短片",
                    classvalue: "85",
                },
                {
                    value: 4,
                    text: "预告·资讯",
                    classvalue: "184",
                },
            ],
            177: [{
                    value: 1,
                    text: "人文·历史",
                    classvalue: "37",
                },
                {
                    value: 2,
                    text: "科学·探索·自然",
                    classvalue: "178",
                },
                {
                    value: 3,
                    text: "军事",
                    classvalue: "179",
                },
                {
                    value: 4,
                    text: "社会·美食·旅行",
                    classvalue: "180",
                },
            ],
            23: [{
                    value: 1,
                    text: "华语电影",
                    classvalue: "147",
                },
                {
                    value: 2,
                    text: "欧美电影",
                    classvalue: "145",
                },
                {
                    value: 3,
                    text: "日本电影",
                    classvalue: "146",
                },
                {
                    value: 4,
                    text: "其他国家",
                    classvalue: "83",
                },
            ],
            11: [{
                    value: 1,
                    text: "国产剧",
                    classvalue: "185",
                },
                {
                    value: 2,
                    text: "海外剧",
                    classvalue: "187",
                },
            ],
        },
        bgPic: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII='
    },
    mutations: {},
    actions: {},
    modules: {}
})