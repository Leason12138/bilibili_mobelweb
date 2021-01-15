<template>
  <div class="sreachpage">
    <div class="sreachtop">
      <form action="/">
        <van-search
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
      <br />
      <div class="hitsreach">histroy</div>
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
            <hr /> -->

            <div class="" v-if="alldata.result[3].data[0]" title="番剧">
              <MediaBangumiItem
                :item="item"
                v-for="item in alldata.result[3].data"
                :key="item.id"
              >
              </MediaBangumiItem>
              <hr />
            </div>
            <div class="" v-if="alldata.result[4].data[0]" title=" 电影">
              <!-- {{ alldata.result[4].data[0] }} -->

              <MediaFtItem
                :item="item"
                v-for="item in alldata.result[4].data"
                :key="item.id"
              >
              </MediaFtItem>

              <hr />
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
                  <hr />
                  </div>
                </div> 
            </div>-->
          </van-tab>
          <van-tab title="播放多"> </van-tab>
          <van-tab title="新发布">内容 3</van-tab>
          <van-tab title="弹幕多">内容 4</van-tab>
        </van-tabs>
      </van-tab>
      <van-tab :title="`番剧(${alldata.top_tlist.media_bangumi})`">
        <SreachMediaBangumiList
          :keyword="$route.query.keyword"
        ></SreachMediaBangumiList>
        <Footer :bool="alldata.top_tlist.media_bangumi"></Footer>
      </van-tab>

      <van-tab
        :title="`UP主(${
          alldata.top_tlist.bili_user > 99 ? '99+' : alldata.top_tlist.bili_user
        })`"
      >
        <SreachUPerList :keyword="$route.query.keyword"></SreachUPerList>
        <Footer :bool="alldata.top_tlist.bili_user"></Footer>
      </van-tab>
      <van-tab :title="`影视(${alldata.top_tlist.media_ft})`">
        <SreachMediaFtList :keyword="$route.query.keyword"></SreachMediaFtList>
        <Footer :bool="alldata.top_tlist.media_ft"></Footer>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import DetailVideoItem from "../components/DetailVideoItem";
import SreachMediaBangumiList from "../components/SreachMediaBangumiList";
import SreachMediaFtList from "../components/SreachMediaFtList";
import SreachUPerList from "../components/SreachUPerList";
import Footer from "../components/Footer";
import MediaBangumiItem from "../components/MediaBangumiItem";
import MediaFtItem from "../components/MediaFtItem";
export default {
  components: {
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
  methods: {
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
      if (this.keyword == "") {
        let bv = this.commedsreach.url.slice(31);
        this.$router.push(`VideoMian?bvid=${bv}`);
      } else {
        this.$router.push(`Sreach?keyword=${this.keyword}`);
        this.getalldata(this.$route.query.keyword);
      }
    },
  },
  watch: {
    keyword(n) {
      this.filterShow = false;
      if (n != "") {
        let source = `http://s.search.bilibili.com/main/suggest?term=${n}&highlight=${n}`;
        this.axios.get(source).then((res) => {
          this.sreachsug = res.data;
        });
      }
    },
  },
  created() {
    // http://api.bilibili.com/x/web-interface/search/default
    let source = `api/x/web-interface/search/default`;
    this.axios.get(source).then((res) => {
      this.commedsreach = res.data.data;
    });

    let source2 = `http://s.search.bilibili.com/main/hotword`;
    this.axios.get(source2).then((res) => {
      this.hotsreach = res.data.list;
      console.log(this.hotsreach);
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
}
</style>