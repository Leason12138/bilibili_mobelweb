<template>
  <div class="sreachpage">
    <div class="sreachtop">
      <form action="/">
        <van-search
          clear-trigger="always"
          autofocus
          v-model="keyword"
          show-action
          :placeholder="commedsreach.show_name"
          @search="onSearch"
          @cancel="$router.push('/about?query=0')"
        />
      </form>
    </div>
    <ul v-if="keyword && !filterShow" class="sreachsug">
      <li
        @click="sreachsugclickFn(item.value)"
        v-html="item.name"
        v-for="(item, index) in sreachsug"
        :key="index"
      ></li>
    </ul>

    <div v-else-if="!filterShow">
      <div class="hotsreach">
        <p>大家都在搜</p>
        <ul>
          <li v-for="item in hotsreach.slice(0, 8)" :key="item.id">
            <van-button @click="hotsreachclickFn" round type="default">
              {{ item.keyword }}</van-button
            >
          </li>
        </ul>
      </div>
      <div class="hitsreach">
        <p>历史搜索</p>
        <ul v-if="/^[\s\S]*.*[^\s][\s\S]*$/.test(hissreach)">
          <li @click="hotsreachclickFn" v-for="item in hisarr" :key="item.id">
            <van-icon color="#ccc" size="20" class="icon" name="underway-o" />
            <span>{{ item }}</span>
          </li>
          <p class="cleanhis" @click="clickhis">清除历史记录</p>
        </ul>
      </div>
    </div>

    <van-tabs
      color="#f98eae"
      title-active-color="#f98eae"
      class="filterbox"
      sticky
      v-if="filterShow"
      v-model="sreachclassactive"
    >
      <van-tab title="综合">
        <van-tabs
          color="#f98eae"
          title-active-color="#f98eae"
          v-model="sreachviewactive"
        >
          <van-tab title="默认排序">
            <!-- <div class="" v-if="alldata[0].data[0]" title="活动">
              {{ alldata[0].data[0] }}
            <div>--------------查看更多番剧---------------</div> -->

            <div class="" v-if="alldata.result[3].data[0]" title="番剧">
              <MediaBangumiItem
                :item="item"
                v-for="item in alldata.result[3].data"
                :key="item.id"
              >
              </MediaBangumiItem>
              <div @click="sreachclassactive = 1">
                <span class="line">查看更多番剧 </span>
              </div>
            </div>
            <div class="" v-if="alldata.result[4].data[0]" title=" 电影">
              <!-- {{ alldata.result[4].data[0] }} -->

              <MediaFtItem
                :item="item"
                v-for="item in alldata.result[4].data"
                :key="item.id"
              >
              </MediaFtItem>

              <div @click="sreachclassactive = 3">
                <span class="line">查看更多影视</span>
              </div>
            </div>

            <div class="tabvideo" v-if="alldata.result[8].data[0]" title="视频">
              <DetailVideoItem
                :item="item"
                v-for="item in alldata.result[8].data"
                :key="item.id"
              >
              </DetailVideoItem>
            </div>
            <Footer
              :bool="
                !(
                  !alldata.result[8].data[0] &&
                  !alldata.result[3].data[0] &&
                  !alldata.result[4].data[0]
                )
              "
            ></Footer>

            <!--    <div v-if="item.data[0]">
              <div v-for="it in item" :key="it.id">
                  <div v-for="i in it" :key="i.id">
                    <div v-html="i.title"></div>
                  <div>--------------查看更多番剧---------------</div>
                  </div>
                </div> 
            </div>-->
          </van-tab>
          <van-tab title="播放多">
            <PlayMore :keyword="$route.query.keyword"></PlayMore>
            <Footer
              Footer
              :bool="
                !(
                  !alldata.result[8].data[0] &&
                  !alldata.result[3].data[0] &&
                  !alldata.result[4].data[0]
                )
              "
            ></Footer>
          </van-tab>
          <van-tab title="新发布">
            <NewRelease :keyword="$route.query.keyword"></NewRelease>
            <Footer
              Footer
              :bool="
                !(
                  !alldata.result[8].data[0] &&
                  !alldata.result[3].data[0] &&
                  !alldata.result[4].data[0]
                )
              "
            ></Footer>
          </van-tab>
          <van-tab title="弹幕多">
            <DanmuMore :keyword="$route.query.keyword"></DanmuMore>
            <Footer
              Footer
              :bool="
                !(
                  !alldata.result[8].data[0] &&
                  !alldata.result[3].data[0] &&
                  !alldata.result[4].data[0]
                )
              "
            ></Footer>
          </van-tab>
        </van-tabs>
      </van-tab>
      <van-tab :title="`番剧(${alldata.top_tlist.media_bangumi})`">
        <SreachMediaBangumiList
          v-if="alldata.top_tlist.media_bangumi"
          :keyword="$route.query.keyword"
        ></SreachMediaBangumiList>
        <Footer :bool="alldata.top_tlist.media_bangumi"></Footer>
      </van-tab>

      <van-tab
        :title="`UP主(${
          alldata.top_tlist.bili_user > 99 ? '99+' : alldata.top_tlist.bili_user
        })`"
      >
        <SreachUPerList
          v-if="alldata.top_tlist.bili_user"
          :keyword="$route.query.keyword"
        ></SreachUPerList>
        <Footer :bool="alldata.top_tlist.bili_user"></Footer>
      </van-tab>
      <van-tab :title="`影视(${alldata.top_tlist.media_ft})`">
        <SreachMediaFtList
          v-if="alldata.top_tlist.media_ft"
          :keyword="$route.query.keyword"
        ></SreachMediaFtList>
        <Footer :bool="alldata.top_tlist.media_ft"></Footer>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import DetailVideoItem from "../components/DetailVideoItem";
import DanmuMore from "../components/DanmuMore";
import NewRelease from "../components/NewRelease";
import PlayMore from "../components/PlayMore";
import SreachMediaBangumiList from "../components/SreachMediaBangumiList";
import SreachMediaFtList from "../components/SreachMediaFtList";
import SreachUPerList from "../components/SreachUPerList";
import Footer from "../components/Footer";
import MediaBangumiItem from "../components/MediaBangumiItem";
import MediaFtItem from "../components/MediaFtItem";
export default {
  components: {
    DanmuMore,
    NewRelease,
    PlayMore,
    SreachMediaBangumiList,
    SreachMediaFtList,
    SreachUPerList,
    Footer,
    MediaFtItem,
    DetailVideoItem,
    MediaBangumiItem,
  },
  data: function () {
    return {
      hissreach: "",
      sreachclassactive: "",
      sreachviewactive: "",
      keyword: "",
      filterShow: false,
      commedsreach: "",
      sreachsug: [],
      alldata: [],
      hotsreach: [],
    };
  },
  computed: {
    hisarr() {
      let arr = this.hissreach.split(":=:");
      arr.shift();
      return arr;
    },
  },
  methods: {
    clickhis() {
      this.$cookies.remove("hissreach");
      this.hissreach = "";
    },
    sreachsugclickFn(i) {
      this.$router.push(`Sreach?keyword=${i}`);
      this.keyword = i;
      this.getalldata(i);
    },
    hotsreachclickFn(e) {
      this.$router.push(`Sreach?keyword=${e.target.innerText}`);
      this.keyword = e.target.innerText;
      this.getalldata(this.keyword);
    },
    getalldata(i) {
      let source = `api/x/web-interface/search/all/v2?keyword=${i}&page=1&pagesize=20`;
      this.axios.get(source).then((res) => {
        this.alldata = res.data.data;
        this.filterShow = true;
        this.sreachclassactive = 0;
        this.sreachviewactive = 0;
      });
    },
    onSearch() {
      if (/^[\s\S]*.*[^\s][\s\S]*$/.test(this.keyword)) {
        if (this.hisarr.indexOf(this.keyword) == -1) {
          if (this.$cookies.get("hissreach")) {
            this.hissreach = this.$cookies.get("hissreach");
          }
          this.hissreach += `:=:${this.keyword}`;
          // console.log(this.$cookies);
          this.$cookies.set("hissreach", this.hissreach);
        }
        // console.log(this.$cookies.get("hissreach"));
      }

      if (this.keyword == "") {
        let bv = this.commedsreach.url.slice(31);
        this.$router.push(`VideoMian?bvid=${bv}`);
      } else if (/^[\s\S]*.*[^\s][\s\S]*$/.test(this.keyword)) {
        this.$router.push(`Sreach?keyword=${this.keyword}`);
        this.getalldata(this.$route.query.keyword);
      }
    },
  },
  watch: {
    keyword(n) {
      if (this.$cookies.get("hissreach")) {
        this.hissreach = this.$cookies.get("hissreach");
        // console.log(this.hissreach);
      }
      this.filterShow = false;
      if (n != "") {
        let source = `http://s.search.bilibili.com/main/suggest?term=${n}&highlight=${n}`;
        this.axios.get(source).then((res) => {
          this.sreachsug = res.data;
        });
      }
    },
    $route: function (n) {
      // console.log(1111);
      if (n.name == "Sreach") {
        location.reload([false]);
      }
    },
  },
  created() {
    if (this.$cookies.get("hissreach")) {
      this.hissreach = this.$cookies.get("hissreach");
    }
    // http://api.bilibili.com/x/web-interface/search/default
    let source = `api/x/web-interface/search/default`;
    this.axios.get(source).then((res) => {
      this.commedsreach = res.data.data;
    });
    if (this.$route.query.keyword) {
      this.getalldata(this.$route.query.keyword);
    }
    this.keyword = this.$route.query.keyword;
    let source2 = `http://s.search.bilibili.com/main/hotword`;
    this.axios.get(source2).then((res) => {
      this.hotsreach = res.data.list;
      // console.log(this.hotsreach);
    });
  },
};
</script>

<style lang="scss" >
.sreachpage {
  min-height: 100vh;
  .auto-img {
    width: 100%;
    height: auto;
    display: block;
  }
  width: 100vw;
  overflow: hidden;
  background-color: #f4f4f4;
  box-sizing: border-box;
  .keyword {
    font-style: normal;
    color: #fb7b9f;
  }
  .sreachtop {
    top: 0;
    width: 100vw;
    height: 54px;
    background-color: red;
  }
  .sreachsug {
    padding-left: 12.5px;
    overflow: hidden;
    li {
      width: 100vw;
      height: 50px;
      line-height: 50px;
      border-bottom: 1.6px solid #dedede;
      text-align: left;

      .suggest_high_light {
        font-style: normal;
        color: #fb7b9f;
      }
    }
  }
  .hitsreach {
    background-color: #fff;
    p {
      text-align: left;
      padding: 12px 0 20px 20px;
      color: #999999;
    }
    ul {
      list-style: none;
      li {
        margin-left: 20px;
        border-bottom: 1px solid #ccc;
        height: 47px;
        line-height: 47px;
        color: #444;
        text-align: left;
        position: relative;
        .icon {
          position: absolute;
          left: 0;
          line-height: 47px;
        }
        span {
          position: absolute;
          left: 30px;
        }
      }
    }
    .cleanhis {
      text-align: center;
      display: block;
      color: #999999;
      margin: 0;
      padding: 12px 0 20px 0;
    }
  }
  .hotsreach {
    width: 100vw;
    background-color: #fff;
    padding: 25px 10px;
    box-sizing: border-box;
    overflow: hidden;
    p {
      margin: 0;
      margin-left: 15px;
      padding: 0px 0px 20px 0px;
      text-align: left;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        margin: 5px 0;
      }
    }
  }
  .line {
    width: 100vw;
    color: #999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &::before {
      content: "";
      height: 2px;
      width: 30vw;
      background: linear-gradient(to right, #eee, #ddd);
      display: block;
    }
    &::after {
      content: "";
      height: 2px;
      width: 30vw;
      background: linear-gradient(to left, #eee, #ddd);
      display: block;
    }
  }
}
</style>