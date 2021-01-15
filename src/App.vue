<template>
  <div id="app">
    <div class="sreach" v-show="!$route.meta.isShowSreach">
      <div class="tohome" @click="tohome"></div>
      <div class="searchbtn">
        <div></div>
        <van-icon
          @click="toSreachComp"
          class="schbtn"
          size="30px"
          color="#aaa"
          name="search"
        />
      </div>
      <van-button
        color="#fb7299"
        class="downloadbtn"
        url="http://d.bilibili.com/download_app.html?preUrl=http%3A%2F%2Fm.bilibili.com%2Findex.html&schema=bilibili%3A%2F%2Fhome%3Ftab_name%3D%E7%83%AD%E9%97%A8&h5awaken=cHZpZD1CMkY5MTYzQy0yQTkyLTQ3MTEtODBGNi1EMTkyOTI5REJCMzk1Mzk0MGluZm9jXzBfMTYxMDM0NzEzNTIyMiZ1YT1Nb3ppbGxhJTJGNS4wJTIwKGlQaG9uZSUzQiUyMENQVSUyMGlQaG9uZSUyME9TJTIwMTNfMl8zJTIwbGlrZSUyME1hYyUyME9TJTIwWCklMjBBcHBsZVdlYktpdCUyRjYwNS4xLjE1JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMFZlcnNpb24lMkYxMy4wLjMlMjBNb2JpbGUlMkYxNUUxNDglMjBTYWZhcmklMkY2MDQuMSUyMEVkZyUyRjg3LjAuNDI4MC4xNDEmaXNBdXRvT3Blbj1mYWxzZSZic291cmNlPXVuZGVmaW5lZCYmb3Blbl9hcHBfZnJvbV90eXBlPWg1Jm9wZW5fYXBwX3V1aWQ9QTU1ODcwQkMtRjU2NS1BQUNELTgxNTgtOTZENTRDRjRBMjJENjgwNzdpbmZvYyZvcGVuX2FwcF9ncm91cGlkPSU3QiU3RCZvcGVuX2FwcF91cmw9aHR0cHMlM0ElMkYlMkZtLmJpbGliaWxpLmNvbSUyRiZvcGVuX2FwcF9hZGRpdGlvbj0lN0IlMjJzcG1pZCUyMiUzQSUyMjMzMy40MDAuY2xpY2sudG9wRG93bmxvYWQlMjIlMkMlMjJncm91cF9pZCUyMiUzQTExJTJDJTIyYnNvdXJjZSUyMiUzQSUyMmRlZmF1bHQlMjIlMkMlMjJ1bmlxdWVfayUyMiUzQW51bGwlMkMlMjJzZXNzaW9uSWQlMjIlM0ElMjJsajRoY2o4Y2owZyUyMiUyQyUyMnVhU291cmNlJTIyJTNBJTIyJTIyJTdE"
        type="default"
        >下载bilibili</van-button
      >
    </div>
    <!-- <router-link to="/">aaa</router-link>
    <router-link to="About">bbb</router-link> -->

    <div v-show="$route.meta.isShowNav" class="top">
      <van-tabs
        sticky
        color="#fb7299"
        title-active-color="#fb7299"
        class="tabsbar"
        v-model="dropdownValue"
      >
        <van-tab
          v-for="item in Channel"
          :title="item.text"
          :to="`about?query=` + item.channelvalue"
          :key="item.num"
        >
        </van-tab>
      </van-tabs>

      <van-dropdown-menu  active-color="#fb7299" :class="{ dropdown: 1 }">
        <van-dropdown-item
          ref="xxx"
          @change="dropdownClickFn"
          v-model="dropdownValue"
          :options="Channel"
        >
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function () {
    return {
      openedbool: false,
      dropdownValue: "",
      dropdownValuetext: "",
      asdasdChannel: [
        { text: "home", value: 0 },
        { text: "dougaL", value: 1 },
        // 动画
        { text: "anime", value: 13 },
        { text: "guochang", value: 167 },
        { text: "music", value: 3 },
        { text: "dance", value: 129 },
        { text: "game", value: 4 },
        { text: "technology", value: 36 },
        { text: "digital", value: 188 },
        { text: "life", value: 160 },
        { text: "food", value: 211 },
        { text: "kichiku", value: 119 },
        { text: "fashion", value: 155 },
        { text: "information", value: 202 },
        { text: "ent", value: 5 },
        // 乐
        { text: "cinephile", value: 181 },
        { text: "documentary", value: 177 },
        { text: "movie", value: 23 },
        { text: "tv", value: 11 },
      ],
      Channel: [
        { value: 0, text: "首页", channelvalue: 0 },
        { value: 1, text: "动画", channelvalue: 1 },
        { value: 2, text: "番剧", channelvalue: 13 },
        { value: 3, text: "国创", channelvalue: 167 },
        { value: 4, text: "音乐", channelvalue: 3 },
        { value: 5, text: "舞蹈", channelvalue: 129 },
        { value: 6, text: "游戏", channelvalue: 4 },
        { value: 7, text: "知识", channelvalue: 36 },
        { value: 8, text: "数码", channelvalue: 188 },
        { value: 9, text: "生活", channelvalue: 160 },
        { value: 10, text: "美食", channelvalue: 211 },
        { value: 11, text: "鬼畜", channelvalue: 119 },
        { value: 12, text: "时尚", channelvalue: 155 },
        { value: 13, text: "娱乐", channelvalue: 5 },
        { value: 14, text: "影视", channelvalue: 181 },
        { value: 15, text: "纪录片", channelvalue: 177 },
        { value: 16, text: "电影", channelvalue: 23 },
        { value: 17, text: "电视", channelvalue: 11 },
      ],
      homedata: [
        {
          bvid: "BV1ev411x7en",
          title: "488.5万\n6.2万\n\n【何同学】这视频能让你戒手机",
          viewAndCommentCount: "488.5万\n6.2万",
          img:
            "https://i0.hdslb.com/bfs/archive/f79332c45ef4fa4387f3e333a704a4ace3c9919f.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV14f4y1C7p4",
          title: "76.5万\n399\n\n飞得很远的背锁式纸飞机，LaFOSSE Lock 标准型",
          viewAndCommentCount: "76.5万\n399",
          img:
            "https://i1.hdslb.com/bfs/archive/a9995599f6acea05e762e2ccc84268706e2e1ca5.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1754y147Ay",
          title: "83.8万\n2万\n\n《送你一朵小红花》，真的真的好无聊！！",
          viewAndCommentCount: "83.8万\n2万",
          img:
            "https://i1.hdslb.com/bfs/archive/0b04b8fde8295b6d8408478a72da8e642c26dd17.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1qv411x7PF",
          title: "19.1万\n1483\n\n我的bronya搁这儿装绫波丽呢",
          viewAndCommentCount: "19.1万\n1483",
          img:
            "https://i0.hdslb.com/bfs/archive/69fb48f382dae955d5bffd1ac05313b89c5eaa6d.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1RV41147Vo",
          title:
            "42.1万\n5867\n\n华农兄弟：竹林倒下一棵树，刚好可以放香菇，顺便挖点竹笋",
          viewAndCommentCount: "42.1万\n5867",
          img:
            "https://i1.hdslb.com/bfs/archive/8927e49f6c08694075b0b8e4d75bcd307dec4c68.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1XK4y1p7GF",
          title: "31.4万\n1542\n\n《明日方舟》EP - 冬涤",
          viewAndCommentCount: "31.4万\n1542",
          img:
            "https://i2.hdslb.com/bfs/archive/aeb18a48b6d3a086bdba3b0d0d3fae294e60dee2.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV17V411t7Da",
          title:
            "9.8万\n773\n\n【高圆圆】开启一场18年闺蜜的美好时光 | 再次遇见你真好",
          viewAndCommentCount: "9.8万\n773",
          img:
            "https://i0.hdslb.com/bfs/archive/30dceb673da5db2915a11f8bd09eafa5ed01f3c6.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1E54y147gY",
          title:
            "14.7万\n341\n\n一位27岁癌症患者的自白，年轻人，请别再糟蹋你的身体！",
          viewAndCommentCount: "14.7万\n341",
          img:
            "https://i2.hdslb.com/bfs/archive/0f41468f9724c68afad172c277004de067815afa.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1dp4y1s77J",
          title: "84.9万\n4586\n\nC4炸弹之 如 来 神 掌！【C4快乐阴人流#13】",
          viewAndCommentCount: "84.9万\n4586",
          img:
            "https://i2.hdslb.com/bfs/archive/9e31c9c61247c719376da311e8389bc727905e64.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1wK4y1W71R",
          title:
            "67.5万\n5927\n\n2020年度沙雕新闻盘点！一整年的快乐源泉都在这了",
          viewAndCommentCount: "67.5万\n5927",
          img:
            "https://i1.hdslb.com/bfs/archive/2a5714b27becaf56ece89075ca2acee31a8e819d.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Bp4y1s7Th",
          title:
            "48.1万\n4482\n\n英法对决！哈克表情管理名场面！9.8分硬核神剧《是，首相》（06/S2E3&E4）",
          viewAndCommentCount: "48.1万\n4482",
          img:
            "https://i1.hdslb.com/bfs/archive/56baf34fd1035a1a6d1ad3c46203e4e0cb5392ef.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Di4y1F7t6",
          title:
            "65.5万\n1599\n\n都进来卧槽！！这炸裂的打戏竟然来自一个15岁女孩！中国演艺圈需要你！",
          viewAndCommentCount: "65.5万\n1599",
          img:
            "https://i2.hdslb.com/bfs/archive/585550c5a505e84160e0f18ce0fe83115072235a.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1fV41147Gb",
          title:
            "15.1万\n2676\n\n台词漏洞百出！打戏笑掉大牙！爆笑吐槽《有翡》第4期",
          viewAndCommentCount: "15.1万\n2676",
          img:
            "https://i2.hdslb.com/bfs/archive/85240b512ace564db067a378ba0da5de445bfec7.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1mt4y1r7os",
          title:
            "13.6万\n411\n\n这矿车是玩过音游吗？当萌猴的《funny》音乐可视化后...",
          viewAndCommentCount: "13.6万\n411",
          img:
            "https://i1.hdslb.com/bfs/archive/49d7cb301e3fbc8998270e1fac3e74b31e93fffd.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1hK4y157SM",
          title: "54.5万\n536\n\n【钢琴】《所念皆星河 》Oskar Roman Jezior CMJ",
          viewAndCommentCount: "54.5万\n536",
          img:
            "https://i0.hdslb.com/bfs/archive/df86c6a7b9405686ca82730d39bdff4909b7432b.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Et4y1r7Eu",
          title: "207.4万\n1.8万\n\n骁龙888性能分析：翻车！",
          viewAndCommentCount: "207.4万\n1.8万",
          img:
            "https://i1.hdslb.com/bfs/archive/b168c77ff9d280b3d9f7f8a134ddc9df9c953ec9.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Ap4y1x7aQ",
          title: "93.3万\n526\n\n一款“益智”小玩具，玩一遍感觉智商受到了侮辱",
          viewAndCommentCount: "93.3万\n526",
          img:
            "https://i2.hdslb.com/bfs/archive/d898921a40c2d602855380b129c449fe846021fd.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1hz4y167Cj",
          title: "22.1万\n2358\n\n【罗翔】我包庇了德国青年逃票算是共同犯罪吗？",
          viewAndCommentCount: "22.1万\n2358",
          img:
            "https://i0.hdslb.com/bfs/archive/268658c646c8620085b3015d99468abaeff6b74b.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1kA411W72d",
          title: "9.4万\n2307\n\n【散人】全程欢笑 超智障憨憨高尔夫",
          viewAndCommentCount: "9.4万\n2307",
          img:
            "https://i1.hdslb.com/bfs/archive/5d1378438aaa99ab63085000a07f78c62c119651.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Zz4y1z7Dj",
          title: "451.9万\n4105\n\n当南方孩子到了零下20度的北方……",
          viewAndCommentCount: "451.9万\n4105",
          img:
            "https://i2.hdslb.com/bfs/archive/73dfe59cbf6510f56dd65fa5c39e4ae3055a3640.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1y54y1W7Vb",
          title: "71.3万\n2724\n\n高中女生街头借火点烟 竟被要求加微信！",
          viewAndCommentCount: "71.3万\n2724",
          img:
            "https://i2.hdslb.com/bfs/archive/7f5cb8629acc1dafd74e02abd394f41063ee4a8f.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Rh41117qa",
          title: "84.9万\n6528\n\n长辈试图和你搭话的模样",
          viewAndCommentCount: "84.9万\n6528",
          img:
            "https://i1.hdslb.com/bfs/archive/e6307912b91b46940acdd416bcb1a2180af293ef.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV16U4y1x7Ve",
          title:
            "9.2万\n690\n\n公子且细瞧 我们是妖还是仙～原创曲·编舞《盘 丝》",
          viewAndCommentCount: "9.2万\n690",
          img:
            "https://i1.hdslb.com/bfs/archive/23f7addfb78507a90ccc4ea607e3d91e6a071fa3.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Ey4y1H7JJ",
          title: "54.2万\n1177\n\n禁 止 职 业 选 手 对 对 子 ！（UZIvs厂长）",
          viewAndCommentCount: "54.2万\n1177",
          img:
            "https://i2.hdslb.com/bfs/archive/924dbb2dafd4735a4cef15a53e8351eeb37d187d.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1aX4y1M741",
          title:
            "52.4万\n2069\n\n爷青回！黄晓明baby李菲儿开撕了！资深公关分析文案啦！",
          viewAndCommentCount: "52.4万\n2069",
          img:
            "https://i2.hdslb.com/bfs/archive/21fa1b47039e78b4a29e57c461f99b21182f2c5d.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Gy4y1v7uE",
          title:
            "21.5万\n1351\n\n【童姥】揭秘人体交易黑市：你死了，比活着更值钱--黑产揭秘017",
          viewAndCommentCount: "21.5万\n1351",
          img:
            "https://i1.hdslb.com/bfs/archive/b1c2a213634c65517588d28cb690895748333d3c.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV13z4y16785",
          title: "101.7万\n4403\n\n一 句 话 神 反 转 4.0 ！！！",
          viewAndCommentCount: "101.7万\n4403",
          img:
            "https://i0.hdslb.com/bfs/archive/4397899d78bed537140fbd97b26aa4b0dcd59045.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1gA411H7Do",
          title: "23.7万\n633\n\n错的不是我，而是The World",
          viewAndCommentCount: "23.7万\n633",
          img:
            "https://i1.hdslb.com/bfs/archive/8f15b90c8291f2b5ab7039c738505f85bba1d24b.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Vr4y1T7Xn",
          title: "86.6万\n6567\n\n黄 金 搭 档",
          viewAndCommentCount: "86.6万\n6567",
          img:
            "https://i0.hdslb.com/bfs/archive/13354acc15680d189fbf236cf4e0e212d6e1e1e6.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV14t4y1r7Sc",
          title:
            "13万\n1181\n\n【中国网游史】努力自救的风暴英雄，为何被高层背刺？",
          viewAndCommentCount: "13万\n1181",
          img:
            "https://i2.hdslb.com/bfs/archive/d1bdb316db172437e4133b78d23fdb324134c2cc.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1yK4y1576N",
          title: "17.9万\n341\n\n【日本儿童歌谣比赛】2岁霓虹幼崽唱歌太萌了",
          viewAndCommentCount: "17.9万\n341",
          img:
            "https://i2.hdslb.com/bfs/archive/35025b3a432d2bb60a854c52ab962cc83ab77bc9.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1dA411p7GX",
          title: "148.9万\n5614\n\n适合收藏的入门妆教！真滴绝了～",
          viewAndCommentCount: "148.9万\n5614",
          img:
            "https://i2.hdslb.com/bfs/archive/c21d30d2ab4d3e5657f22d4dd073be6905ac471e.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1FT4y1T77v",
          title: "8.1万\n988\n\n全国统一的人类共同行为记录② 每日一气╬",
          viewAndCommentCount: "8.1万\n988",
          img:
            "https://i1.hdslb.com/bfs/archive/8d9557100498b793f0bbb34ef514c2cfcfb55f78.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV175411n7uH",
          title:
            "57.8万\n1.1万\n\n【虫哥】于正道歉的那部神剧《宫锁连城》到底是有多魔鬼...",
          viewAndCommentCount: "57.8万\n1.1万",
          img:
            "https://i1.hdslb.com/bfs/archive/f3fb1b0f0da189d85ce7005a8aa15499e9f9f3b6.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1wh41127CD",
          title: "74.6万\n4761\n\n【逗鱼时刻】第284期 求求你别搞事了！",
          viewAndCommentCount: "74.6万\n4761",
          img:
            "https://i0.hdslb.com/bfs/archive/468e261d5c80e74d9dbb581a6c8872c01a06a37b.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1EA411W7uG",
          title: "226.9万\n1212\n\n不 愧 是 我 王 冰 冰",
          viewAndCommentCount: "226.9万\n1212",
          img:
            "https://i1.hdslb.com/bfs/archive/2b7362e15851b4048bf38022322771d656f1b321.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1cV411t7bi",
          title:
            "34.8万\n928\n\n爆肝30天做出逼死官方的螳螂刀！能弹出，能收回。",
          viewAndCommentCount: "34.8万\n928",
          img:
            "https://i2.hdslb.com/bfs/archive/5f8f82d547b131e4e6aa48be2a700f7bbe955d83.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1kz4y1z7ui",
          title: "27.2万\n1397\n\n你这么老，知道什么是二次元吗？【TOS2020】",
          viewAndCommentCount: "27.2万\n1397",
          img:
            "https://i1.hdslb.com/bfs/archive/79143c6070ea19ce12010db6bbd6d007ed1db716.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1w54y1s7HB",
          title: "29.6万\n2369\n\n《 爷 爷 拯 救 计 划 2 ！》",
          viewAndCommentCount: "29.6万\n2369",
          img:
            "https://i0.hdslb.com/bfs/archive/4d806eaf28a6fda6af2ea9c61658c4dab81974c1.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Za4y1n7ub",
          title: "41万\n2.6万\n\n不心动挑战！淑女集结号！",
          viewAndCommentCount: "41万\n2.6万",
          img:
            "https://i1.hdslb.com/bfs/archive/ada1dcb61b023bfd53098ca2e8c350e79047de5c.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1HT4y1N7dW",
          title: "49.6万\n1574\n\n如何剥出一个生鸡蛋",
          viewAndCommentCount: "49.6万\n1574",
          img:
            "https://i0.hdslb.com/bfs/archive/4a72cbc2f54f5dbccfae1454009b6b0d7eb144f1.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1g5411n72L",
          title: "8.5万\n1840\n\n一块钱和一个苹果谁比较贵？ 读评论#1",
          viewAndCommentCount: "8.5万\n1840",
          img:
            "https://i1.hdslb.com/bfs/archive/0ad699efa26d8e8707fb2b4e5a2d6b3a8dd48a30.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1jy4y1H7rC",
          title: "165.2万\n4.7万\n\n我在两亿人面前坚持了50秒！！",
          viewAndCommentCount: "165.2万\n4.7万",
          img:
            "https://i2.hdslb.com/bfs/archive/0ed9350676dd7d8ec5bdb9aad2684ab4c4edaf83.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1ri4y1F7Rg",
          title: "145.4万\n1.2万\n\n我麻了! 这动画太离谱了【阅片无数动漫篇19】",
          viewAndCommentCount: "145.4万\n1.2万",
          img:
            "https://i0.hdslb.com/bfs/archive/b644a1da36cb01ea5106a31955ea574d562f9b1a.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1s5411n7ms",
          title: "106.9万\n5768\n\n【高能山寨】小电吹风佩巴第二集-吹风了",
          viewAndCommentCount: "106.9万\n5768",
          img:
            "https://i1.hdslb.com/bfs/archive/31edf185104f59bfb9374087389a2f1763fb4843.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1uz4y167hA",
          title: "44.2万\n9956\n\n什么时候结婚？",
          viewAndCommentCount: "44.2万\n9956",
          img:
            "https://i0.hdslb.com/bfs/archive/546cf5d4592c981c4ab09b8f15d1522a23b756ff.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Af4y1y7KE",
          title: "6万\n843\n\n【钢琴】2020年B站热点大串烧",
          viewAndCommentCount: "6万\n843",
          img:
            "https://i1.hdslb.com/bfs/archive/1c049f9c0ec204d6ec7c204e3c2d6fa33f667956.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Ca4y1n7d8",
          title: "83.7万\n711\n\n阅 冰 仪 式",
          viewAndCommentCount: "83.7万\n711",
          img:
            "https://i0.hdslb.com/bfs/archive/3cd0695bf2cece9b057e1fad187f534181cbb383.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1nV411t7YE",
          title: "54.8万\n291\n\n最侮辱智商的汽车节目",
          viewAndCommentCount: "54.8万\n291",
          img:
            "https://i1.hdslb.com/bfs/archive/6c689cf9e93df69ec289240bfa4b7b04cf15be30.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1eV41187kS",
          title: "63.6万\n66\n\n不管了 我的抗寒能力已点满。。",
          viewAndCommentCount: "63.6万\n66",
          img:
            "https://i2.hdslb.com/bfs/archive/6d3e352d3fca7912533425a30a054320afac106d.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1pr4y1T7tj",
          title: "9.1万\n789\n\n据说，“泰加”的动物们都在挨饿",
          viewAndCommentCount: "9.1万\n789",
          img:
            "https://i1.hdslb.com/bfs/archive/cd17b2c0a38d6f2bac95cf005edcb72528cf75d4.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1ET4y1N7PT",
          title: "11.7万\n743\n\n悬 崖 勒 马",
          viewAndCommentCount: "11.7万\n743",
          img:
            "https://i0.hdslb.com/bfs/archive/df31414fec742a36f5050910dbe68a01593cedd5.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1ja4y1n77j",
          title: "77.5万\n493\n\n你 怎 么 睡 得 着 啊 ？",
          viewAndCommentCount: "77.5万\n493",
          img:
            "https://i1.hdslb.com/bfs/archive/a2327e38fa0cd94df32f3c6dfa35f882cec6d27a.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Ey4y1v7Gj",
          title:
            "7.3万\n1460\n\n原神雪山地图设计在国产游戏中什么水平？跟国外3a几几开？【膨胀说】",
          viewAndCommentCount: "7.3万\n1460",
          img:
            "https://i0.hdslb.com/bfs/archive/d5a28fa88d9033a64ebd1745b9b2d595d86f1770.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV13T4y1N7vi",
          title: "57.2万\n2725\n\n一年交往30多个男人捞一亿，她就长封面这样",
          viewAndCommentCount: "57.2万\n2725",
          img:
            "https://i0.hdslb.com/bfs/archive/8c9beb577456e6d1948ba1e12474721d85a50384.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1G64y1Z7HM",
          title: "114.7万\n245\n\n卧龙凤雏竟齐聚于此",
          viewAndCommentCount: "114.7万\n245",
          img:
            "https://i1.hdslb.com/bfs/archive/44310bc92d7dc5b2d8d010117be350e748d81eb5.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Wt4y1r7km",
          title:
            "37.8万\n3017\n\n【成果展示】3周挑战贝多芬，学习钢琴成果首次公开！",
          viewAndCommentCount: "37.8万\n3017",
          img:
            "https://i1.hdslb.com/bfs/archive/64db30533ce7feceb60c1b93e6fb566445ed1c17.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1zi4y1F7MW",
          title: "83.7万\n6246\n\n《周星驰电影经典音乐片段合奏》（上）",
          viewAndCommentCount: "83.7万\n6246",
          img:
            "https://i0.hdslb.com/bfs/archive/9d5b184d17d20a619b8608e9bb78d7e8e88a6eb0.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1iT4y1N7Kw",
          title: "72.6万\n2173\n\n【瀑布芝士火锅】热量有什么？我又不差这亿点点",
          viewAndCommentCount: "72.6万\n2173",
          img:
            "https://i2.hdslb.com/bfs/archive/9d25b3f83af21bfd2509d81e9c685307a2e919dd.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Uo4y1d7QB",
          title: "54.8万\n2186\n\n【半佛】为何宠物看病这么贵。",
          viewAndCommentCount: "54.8万\n2186",
          img:
            "https://i0.hdslb.com/bfs/archive/e078ba4434cbfe6bec4aedf0b45feb297745ca6b.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1ar4y1T7kv",
          title: "43.8万\n1918\n\n芜 湖 起 飞",
          viewAndCommentCount: "43.8万\n1918",
          img:
            "https://i0.hdslb.com/bfs/archive/9dc3d6a6c21a29fb1ec7461ad5d05e865c56a228.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Fy4y1v7fd",
          title: "60.4万\n1146\n\n【新三国Rap】接着奏乐！接着舞！",
          viewAndCommentCount: "60.4万\n1146",
          img:
            "https://i2.hdslb.com/bfs/archive/10d13a8794d7edd129038a74cf51b6dbc5146c7c.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1XK4y1p7pn",
          title: "31.5万\n1.9万\n\n【猿】显卡价格？别问，问就是预测不了。",
          viewAndCommentCount: "31.5万\n1.9万",
          img:
            "https://i2.hdslb.com/bfs/archive/1787e61638df976db6f64e3c473afa90af82e681.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Gr4y1T72a",
          title:
            "19.2万\n480\n\n【中国电信 X 英雄联盟】K/DA《MORE》炸裂翻跳 | 能成为你的英雄吗？",
          viewAndCommentCount: "19.2万\n480",
          img:
            "https://i0.hdslb.com/bfs/archive/dbb8beed575607f270d61a5945b1336f3f03a4b1.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Ey4y1H7rM",
          title: "58.2万\n923\n\n这应该是就是人类无法抗拒的诱惑吧？",
          viewAndCommentCount: "58.2万\n923",
          img:
            "https://i2.hdslb.com/bfs/archive/1cf28d7500d0050b218f4a7f34ac4db4bebcc5d3.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1di4y1F7he",
          title: "43.2万\n401\n\n当小猫咪爱上按摩...",
          viewAndCommentCount: "43.2万\n401",
          img:
            "https://i1.hdslb.com/bfs/archive/608e786deaee3667104e24ba49df684e1989ae70.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Gy4y1v7Xn",
          title:
            "33.8万\n3374\n\n【骚男】与小茉莉一起看入站必刷（随机翻牌 危机重重！）",
          viewAndCommentCount: "33.8万\n3374",
          img:
            "https://i0.hdslb.com/bfs/archive/c41f88b157cc3642d173d71e14d5e5986b92285f.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1AK411u7qd",
          title: "41.5万\n5318\n\n去漫展加50个摄影师的微信，返图差别有多大？",
          viewAndCommentCount: "41.5万\n5318",
          img:
            "https://i1.hdslb.com/bfs/archive/397fc4f744a44e32e3a27e80d242f67f411fd605.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Ci4y1w79Q",
          title: "330.9万\n7131\n\n蜡笔小新里提过的霓虹美人们",
          viewAndCommentCount: "330.9万\n7131",
          img:
            "https://i0.hdslb.com/bfs/archive/8bf5f2638419b3915a125f604b8ed503968a9d9e.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Jh41127PM",
          title: "74.3万\n1514\n\n奥特英雄为患病儿童实现愿望",
          viewAndCommentCount: "74.3万\n1514",
          img:
            "https://i0.hdslb.com/bfs/archive/6cf8d9fc4133fe53882f743b14ba03141eab51e8.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1kv411x7ZT",
          title:
            "18.3万\n3194\n\n配角强行加戏，主角一脸懵哔，群演水准太低：谭sir把剧组一顿批。",
          viewAndCommentCount: "18.3万\n3194",
          img:
            "https://i0.hdslb.com/bfs/archive/63936a345313d6dd3b3513b24fb2dee48cc3753c.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1wX4y1K7oM",
          title: "8.4万\n373\n\n《关于女朋友如何被兄弟们聊没掉的那件事1.0》",
          viewAndCommentCount: "8.4万\n373",
          img:
            "https://i0.hdslb.com/bfs/archive/cf45edfc117edfa541e6fb47c73cd6a9a855dde6.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1co4y1o7Xg",
          title: "10.4万\n1159\n\n【罗翔老师直播课堂】2020，感悟与共勉",
          viewAndCommentCount: "10.4万\n1159",
          img:
            "https://i2.hdslb.com/bfs/archive/e44366b0fbf7dd1d4b319d51a3246f70c72fb64d.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1ua4y1H714",
          title: "224.9万\n2.4万\n\n《原神》甘雨角色PV—— 「璃月港的一夜」",
          viewAndCommentCount: "224.9万\n2.4万",
          img:
            "https://i1.hdslb.com/bfs/archive/1799c28e4ded092125dea14c752b463b8d59420a.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1py4y127cx",
          title:
            "48.9万\n2875\n\n二荆条王者，吃辣不能停，一斤辣椒，一个猪心，彻底征服味蕾",
          viewAndCommentCount: "48.9万\n2875",
          img:
            "https://i1.hdslb.com/bfs/archive/b82de88f50de52118156ca9a574260508ca69fa7.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1iy4y127uF",
          title: "34万\n786\n\n爷青回！林俊杰演唱周杰伦的《一路向北》",
          viewAndCommentCount: "34万\n786",
          img:
            "https://i1.hdslb.com/bfs/archive/464e04457426c711df6451f7450079a478a2b07c.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1TV411t7n2",
          title: "6万\n221\n\n【战双帕弥什】「寄渊残响」EP - Structures",
          viewAndCommentCount: "6万\n221",
          img:
            "https://i1.hdslb.com/bfs/archive/fdf716e4bae78ac55089602eaf27e5a5cbcf5d60.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1qK4y157YT",
          title:
            "24万\n3030\n\n【嘟督咆哮解说】探病看到我奶奶变成了奇行种？！《阿拉亚》",
          viewAndCommentCount: "24万\n3030",
          img:
            "https://i0.hdslb.com/bfs/archive/c41b76326c6cf4a28eb6402dee36d5d7786df99f.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1GA411H7aL",
          title: "45.2万\n3897\n\n“这是给我们养的狗粮吗？”——大狗们的小农场",
          viewAndCommentCount: "45.2万\n3897",
          img:
            "https://i2.hdslb.com/bfs/archive/6068958258a63942e12d85a86c47fe5a9c6f085d.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Qv411x77y",
          title: "29.8万\n673\n\n北斗星司：热忱之心，不可泯灭！",
          viewAndCommentCount: "29.8万\n673",
          img:
            "https://i0.hdslb.com/bfs/archive/cfef5f2fe4d278a0d02e480387194fad8bdeaa02.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1ah41127r4",
          title:
            "16.9万\n941\n\n200万粉UP第一次露脸读评论！UP主吃饭也戴口罩吗？",
          viewAndCommentCount: "16.9万\n941",
          img:
            "https://i2.hdslb.com/bfs/archive/7db2c55ce71b3db4e210669bc69c56194c2ba982.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1T54y147hs",
          title:
            "74.8万\n2879\n\n油管千万播放！免烤草莓芝士蛋糕教程，建议戴上耳机食用【HidaMari Cooking】",
          viewAndCommentCount: "74.8万\n2879",
          img:
            "https://i2.hdslb.com/bfs/archive/48b77e01eeedc9f1bd82d660f4b4028b69154426.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1564y1Z7ef",
          title: "40.7万\n328\n\n没有美羊羊的世界 摧毁掉算了",
          viewAndCommentCount: "40.7万\n328",
          img:
            "https://i1.hdslb.com/bfs/archive/7ebe7a7eed08cd63b861c895d6588aaeed23eead.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1xV41187Lq",
          title:
            "23.3万\n2333\n\n真假对比：某平台88元北面羽绒VS代购2050元美版，差很多吗？",
          viewAndCommentCount: "23.3万\n2333",
          img:
            "https://i2.hdslb.com/bfs/archive/2141df93b2a64cdc4a081e1530148765ca8f317b.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1yy4y1U7sU",
          title: "375万\n3952\n\n玩完后我愿称之为4399“最强”小游戏！",
          viewAndCommentCount: "375万\n3952",
          img:
            "https://i0.hdslb.com/bfs/archive/95e53054a7e324cbc57dfd706572f25609364a10.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1M5411p7PB",
          title:
            "123.6万\n1510\n\n油管7千万播放的暗恋神曲《Crush》，说不出口的悸动，恋爱的感觉！",
          viewAndCommentCount: "123.6万\n1510",
          img:
            "https://i1.hdslb.com/bfs/archive/47a57a35a0c5e81368cac68793b475a55e9a9797.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1AX4y1K7HH",
          title: "19.6万\n392\n\n川建国：我不是孤独的小丑——",
          viewAndCommentCount: "19.6万\n392",
          img:
            "https://i1.hdslb.com/bfs/archive/3238977e8484bd4bdfee645fdec123d4080c5ad2.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Zv411x7De",
          title: "36.5万\n406\n\n为什么求偶会这么魔性啊，笑死我",
          viewAndCommentCount: "36.5万\n406",
          img:
            "https://i2.hdslb.com/bfs/archive/39337515dc73cb2e9e8ba74fcbc0e1b3175fcc64.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1iy4y127Pu",
          title: "80.8万\n1361\n\n这地摊真是人才辈出之地！",
          viewAndCommentCount: "80.8万\n1361",
          img:
            "https://i1.hdslb.com/bfs/archive/81ef1497abb031d375e297c9a483b35da1a425c6.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1MX4y1K76Q",
          title: "81.8万\n909\n\n老理发店做的头发绝了，2020年最后一天我烫头了",
          viewAndCommentCount: "81.8万\n909",
          img:
            "https://i2.hdslb.com/bfs/archive/934fcbe0f35efeb70a487fdfa992ebd59acf1706.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Zo4y1d7Ti",
          title: "21.6万\n140\n\n【蕾姆cos】群主在吗？穿这个给我看",
          viewAndCommentCount: "21.6万\n140",
          img:
            "https://i0.hdslb.com/bfs/archive/6d587316611326e8fe72a03a3d57038ce13400f0.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1KK4y1W7ij",
          title:
            "43.8万\n2912\n\n试吃超大巨螯人面蟹，长的真的跟人脸一样，吃完后差点被咸死",
          viewAndCommentCount: "43.8万\n2912",
          img:
            "https://i2.hdslb.com/bfs/archive/d7f0f4dcea59f942e90cb9c18465ed81aa61ff24.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1qv411x7Pg",
          title: "23.2万\n474\n\n【懒人生存秘籍】三款馋死人的灵魂盖饭，真香！",
          viewAndCommentCount: "23.2万\n474",
          img:
            "https://i0.hdslb.com/bfs/archive/d5aa1e8ce0fcba471c62999a1ffaf0a2cf73a196.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Cv411x7vq",
          title: "29.3万\n2470\n\n实名diss力元君，这人说话就像放屁",
          viewAndCommentCount: "29.3万\n2470",
          img:
            "https://i2.hdslb.com/bfs/archive/103e8a174777af7ad18bafa1e926d995eb1394c5.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV18r4y1T7xY",
          title:
            "33.9万\n1411\n\n听说中国全部脱贫了？我自己跑去最贫困的地方看个究竟",
          viewAndCommentCount: "33.9万\n1411",
          img:
            "https://i2.hdslb.com/bfs/archive/7253fccbdc964a6f2023aaaac3cd7fd121d15c1b.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV15f4y1y7i9",
          title: "33.4万\n142\n\n清道夫皮鞋",
          viewAndCommentCount: "33.4万\n142",
          img:
            "https://i1.hdslb.com/bfs/archive/8bc64b8f4a0991cc6dcbdd2f0c5956684e1fc527.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1T54y147Jn",
          title:
            "3.9万\n423\n\n【原神】谁才是真正の未来战士?阿贝多全方位角色解析攻略!!",
          viewAndCommentCount: "3.9万\n423",
          img:
            "https://i0.hdslb.com/bfs/archive/0f2ce084f9c0da783453053534ebd73837d69629.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV14T4y1T7Wk",
          title: "121.6万\n867\n\n高二学生元旦晚会psycho翻跳",
          viewAndCommentCount: "121.6万\n867",
          img:
            "https://i2.hdslb.com/bfs/archive/483f291e6ef66ecc4f0903e586150e450fabf866.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1Z54y1x7Hd",
          title: "21.8万\n916\n\n【原神】这才是我要的原神世界(蒙德篇)",
          viewAndCommentCount: "21.8万\n916",
          img:
            "https://i1.hdslb.com/bfs/archive/d29939971d984dd80ebfc7aabeb67ea0dd5fb2f4.jpg@480w_270h_1c.webp",
        },
        {
          bvid: "BV1co4y1o7wp",
          title:
            "27.8万\n1845\n\n超级实用：修改支付宝默认设置后，我的收益提高了……",
          viewAndCommentCount: "27.8万\n1845",
          img:
            "https://i2.hdslb.com/bfs/archive/ca2490528f74990b2b0b13f440b5009494337286.jpg@480w_270h_1c.webp",
        },
      ],
    };
  },
  methods: {
    tohome() {
      if (this.$route.query.query != 0) {
        this.$router.push("/about?query=0");
      }
    },
    toSreachComp() {
      this.$router.push("/Sreach");
    },
    // vclickfn() {
    //   console.log(111);

    // console.dir(document.querySelector(".dropdown .van-dropdown-menu__bar ").classList.add('van-dropdown-menu__bar--opened'));

    // document.querySelector("body").classList.toggle("van-overflow-hidden");
    // //

    // console.dir(
    //   document
    //     .querySelector(".dropdown span")
    //     .classList.add(
    //       "van-dropdown-menu__title--active","van-dropdown-menu__title--down"
    //     )
    // );

    //   this.$refs.xxx.toggle();

    // },
    dropdownClickFn() {
      // console.log(1111);
      // console.log(this);
      this.$router.push(
        `about?query=${this.Channel[this.dropdownValue].channelvalue}`
      );
    },
    getbilibilihomedatainbilibiliweb() {
      // $$(".v-card").map((item, index) => {
      //   return {
      //     play:$$(".v-card>.card>span")[0].innerText,
      //     video_review:$$(".v-card>.card>span")[1].innerText,
      //     bvid: item.href.slice(29),
      //     title: item.innerText,
      //     viewAndCommentCount: $$(".v-card>.card>.count").filter(
      //       (item, index2) => {
      //         return index === index2;
      //       }
      //     )[0].innerText,
      //     img: $$(".m-bfs-pic").filter((item, index3) => {
      //       return index3 === index;
      //     })[0].currentSrc,
      //   };
      // });
      return 0;
    },
  },
  updated() {
    if (this.$route.query.query) {
      let index = this.Channel.findIndex((el) => {
        return el.channelvalue == this.$route.query.query;
      });
      this.dropdownValue = this.Channel[index].value;
    }
  },
};
</script>

<style lang='scss' spoed>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.van-tabs__line {
  background-color: rgb(251, 114, 153);
  transform: translateX(34px) translateX(-50%);
  transition-duration: 0.3s;
}
.sreach {
  padding: 10px;
  word-spacing: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vw;
  .searchbtn {
    width: 40vw;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .tohome {
    width: 20vw;
    height: 10vw;
    background-image: url("./assets/BILIBILI_LOGO.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .downloadbtn {
    font-size: 3vw;
    width: 20vw;
    min-width: 80px;
    height: 80%;
    overflow: hidden;
    border-radius: 5px;
    padding: 0 7px;
  }
}
.top {
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  .tabsbar .van-tabs__nav {
    width: 78vw;
    margin: 0;
  }
  .dropdown {
    width: 22vw;
    padding: 0;
    margin: 0;
  }
}
</style>
