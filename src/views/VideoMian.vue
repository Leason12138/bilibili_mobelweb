<template>
  <div class="videomain">
    <!-- src="http://vjs.zencdn.net/v/oceans.mp4" -->
    <video controls width="100%"></video>
    <div class="" v-if="showdata.data">
      <div class="title">
        <span :class="{ titlebolck: descboxshow, titletext: true }">
          {{ showdata.data.title }}</span
        >
        <div @click="descboxshow = !descboxshow" class="Trigger">
          <van-icon
            :class="{
              arrow: true,
              arrowdown: descboxshow,
              arrowup: !descboxshow,
            }"
            name="arrow-down"
          />
        </div>
      </div>
      <!--  -->
      <!-- <transition name="descAnima"> -->
      <div v-show="descboxshow" class="descbox">
        <div class="segment upernav">
          <div
            class="upheader"
            :style="{ backgroundImage: `url(${showdata.data.owner.face})` }"
          ></div>
          <div class="upname">
            {{ showdata.data.owner.name }}
          </div>
        </div>
        <div class="segment cant-re-send">
          <van-icon color="#fb7299" size="16" class="icon" name="close" /><span
            >未经过作者授权禁止转载</span
          >
        </div>
        <div class="segment viewmsg">
          <span>
            {{
              showdata.data.stat.view > 10000
                ? (showdata.data.stat.view / 10000).toFixed(1) + "万"
                : showdata.data.stat.view
            }}人观看
          </span>
          <span>
            {{
              showdata.data.stat.danmaku > 10000
                ? (showdata.data.stat.danmaku / 10000).toFixed(1) + "万"
                : showdata.data.stat.danmaku
            }}弹幕
          </span>
          <span>
            {{ ctime }}
          </span>
          <span>
            {{ showdata.data.bvid }}
          </span>
        </div>
        <div class="segment desc">
          {{ showdata.data.desc }}
          <!-- 发布时间：{{ new Date(1472048779952) }} -->
          <!-- {{Number(showdata.data.pubdate+'000')}} -->
        </div>
      </div>
      <!-- </transition> -->

      <!--  -->
      <div class="upernavbar">
        <div v-show="!descboxshow" class="upernav">
          <div
            class="upheader"
            :style="{ backgroundImage: `url(${showdata.data.owner.face})` }"
          ></div>
          <div class="upname">
            {{ showdata.data.owner.name }}
          </div>
        </div>
        <div class="oldThreeThings">
          <div
            @click="likeorno = !likeorno"
            :class="{ like: 1, active: likeorno }"
          >
            <van-icon size="23" name="good-job" />
            <span>
              {{
                showdata.data.stat.like > 10000
                  ? (showdata.data.stat.like / 10000).toFixed(1) + "万"
                  : showdata.data.stat.like
              }}</span
            >
          </div>
          <div
            @click="coinorno = !coinorno"
            :class="{ coin: 1, active: coinorno }"
          >
            <van-icon size="23" name="gold-coin" />
            <span>
              {{
                showdata.data.stat.coin > 10000
                  ? (showdata.data.stat.coin / 10000).toFixed(1) + "万"
                  : showdata.data.stat.coin
              }}</span
            >
          </div>
          <div
            @click="starorno = !starorno"
            :class="{ star: 1, active: starorno }"
          >
            <van-icon size="23" name="star" />
            <span>
              {{
                showdata.data.stat.favorite > 10000
                  ? (showdata.data.stat.favorite / 10000).toFixed(1) + "万"
                  : showdata.data.stat.favorite
              }}</span
            >
          </div>
          <br />
          <!-- <span v-if="showdata.data.stat.his_rank < 100">
            历史最高排行 {{ showdata.data.stat.his_rank }}
          </span> -->
        </div>
      </div>
    </div>

    <div class="recommended">
      <van-tabs
        @click="getreplydata"
        line-width="60"
        color="#fb7299"
        title-active-color="#fb7299"
      >
        <van-tab v-if="recommendeddata[0]" title="相关推荐">
          <div class="itembox">
            <VideoItem
              @videoitemClickFn="videoitemClickFn"
              v-for="(item, index) in recommendeddata"
              :item="item"
              :key="index"
            >
            </VideoItem>
          </div>
        </van-tab>
        <van-tab
          v-if="showdata.data"
          :title="`评论${
            showdata.data.stat.reply > 10000
              ? (showdata.data.stat.reply / 10000).toFixed(1) + '万'
              : showdata.data.stat.reply
          }`"
        >
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import VideoItem from "../components/VideoItem";
export default {
  components: { VideoItem },
  data: function () {
    return {
      descboxshow: true,
      starorno: false,
      coinorno: false,
      likeorno: false,
      showdata: {},
      cid: "",
      avid: "",
      url: [],
      recommendeddata: {},
    };
  },
  methods: {
    getreplydata(name) {
      if (name == 1) {
        console.log(this.avid);
        this.$axios
          .get(`api/x/v2/reply/main?oid=${this.avid}&type=1`)
          .then((res) => {
            console.log(res.data.data.replies);
          });
      }
    },
    videoitemClickFn(a) {
      // VideoMian
      this.$router.push(`VideoMian?bvid=${a}`);
    },
    getShowDataInVideoMain: function (n) {
      this.url = [];
      this.$axios.get(`api/x/web-interface/view?bvid=${n}`).then((res) => {
        this.showdata = res.data;
        console.log(this.showdata);
        this.avid = res.data.data.aid;
        console.log(this.avid);
      });
      /*   .then((cid) => {
          // console.log("cid", cid.data.bvid);
          let bvid = cid.data.bvid;
          cid.data.pages.map((it) => {
            // console.log(it);
            this.$axios
              .get(`api/x/player/playurl?bvid=${bvid}&cid=${it.cid}`)
              .then((res) => {
                // console.log(res.data.data.durl[0].url);
                this.url.push(res.data.data.durl[0].url);
              })
              .then(() => {
                console.log(1);
                console.log(this.url[0].slice(8));
                this.$axios.get(`api/${this.url[0].slice(8)}`).then((res) => {
                  // console.log(res.data.data.durl[0].url);
                  console.log(res);
                });
              });
          });
        });*/

      //
      this.$axios
        .get(`api/x/web-interface/archive/related?bvid=${n}`)
        .then((res) => {
          this.recommendeddata = res.data.data;
          // console.log(this.recommendeddata);
        });
    },
    getCidDataInVideoMain: function (n) {
      console.log(n);
      // this.$axios
      //   .get(`api/x/player/playurl?bvid=${n}&cid=${n}`)
      //   .then((res) => {
      //     res;
      //   });
    },
    //     getVideoAddInVideoMain:function(n,c){
    //   this.$axios.get(`api/x/player/playurl?bvid=${n}&${c}`).then((res) => {

    //       });
    //     }
  },
  watch: {
    $route: function (n) {
      this.showdata = {};
      this.recommendeddata = {};
      if (n.query.bvid) {
        this.getShowDataInVideoMain(n.query.bvid);
        this.getCidDataInVideoMain(n.query.bvid);
        // this.getVideoAddInVideoMain(n.query.bvid,this.cid);
      }
    },
  },
  created() {
    if (this.$route.query) {
      let n = this.$route.query.bvid;
      this.getShowDataInVideoMain(n);
      this.getCidDataInVideoMain(n);
      //   this.getVideoAddInVideoMain(n,this.cid);
    }
  },
  computed: {
    ctime: function () {
      // console.log(this.showdata.data.pubdate);
      // return 0
      // if (this.showdata) {
      if (this.showdata.data.pubdate > 1606665600) {
        return new Date(Number(this.showdata.data.pubdate + "000"))
          .toLocaleDateString()
          .replace(/\//g, "-")
          .slice(5);
      } else {
        return new Date(Number(this.showdata.data.pubdate + "000"))
          .toLocaleDateString()
          .replace(/\//g, "-");
      }

      //
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.videomain {
  // descAnima
  .title {
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    height: 36px;
    .titletext {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .titlebolck {
      display: block;
    }
    span {
      line-height: 36px;
    }
    .Trigger {
      .arrow {
        transition: 0.1s;
      }
      .arrowup {
        transform: rotateZ(180deg);
      }
      .arrowdown {
        transform: rotateZ(0);
      }
      width: 42px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .descbox {
    .cant-re-send {
      span {
        vertical-align: top;
        padding-left: 5px;
      }
    }
    .segment {
      margin: 10px 0;
    }
    padding-left: 10px;
    color: #777777;
    font-size: 12.5px;
    line-height: 19px;
    text-align: left;
    .desc {
      white-space: pre-line;
    }
    .upernav {
      display: flex;
      justify-content: flex-start;
      .upheader {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background-size: contain;
      }
      .upname {
        font-size: 14px;
        padding: 3px 0 0 10px;
      }
    }
    .viewmsg {
      width: 85vw;
      color: gray;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }
  }
  .upernavbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    .upernav {
      padding-left: 10px;
      display: flex;
      justify-content: flex-start;
      .upheader {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-size: contain;
      }
      .upname {
        font-size: 14px;
        padding: 3px 0 0 5px;
      }
    }
    .oldThreeThings {
      padding-left: 10px;
      color: grey;
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        vertical-align: top;
        margin-right: 5px;
      }
      .active {
        color: #fb7299;
      }
    }
  }

  .itembox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  // .recommended {
  // }
}
</style>