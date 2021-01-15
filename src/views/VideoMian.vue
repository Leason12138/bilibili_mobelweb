<template>
  <div class="videomain">
    <div class="facepic" @click="isVideoShow = !isVideoShow" v-if="isVideoShow">
      <div class="pic" v-if="!showdata.data"></div>
      <div v-if="showdata.data" class="videoface">
        <div
          class="auto-img"
          :style="{ backgroundImage: `url(${showdata.data.pic})` }"
          alt=""
        >
          <div></div>
          <van-icon color="#dddddddd" size="20vw" name="play-circle" />
          <div class="videomsg">
            <span>
              {{
                showdata.data.stat.view > 10000
                  ? (showdata.data.stat.view / 10000).toFixed(1) + "万"
                  : showdata.data.stat.view
              }}次观看</span
            >
            <span
              >{{
                showdata.data.stat.danmaku > 10000
                  ? (showdata.data.stat.danmaku / 10000).toFixed(1) + "万"
                  : showdata.data.stat.danmaku
              }}弹幕
            </span>
          </div>
        </div>
      </div>
    </div>
    <video
      v-if="!isVideoShow"
      src="https://freevod.nf.migu.cn/0oW7VYswQRvLnmxHv6FzG9%2FM4poNoBL2Lp8Jsp5ssXLJ4uYTDVNjWCxzSjbcdAqMFfHGeuGI%2Fvs3fW7%2BLLtrqf6cjXRW8GrEnDBeh0z8NdNfPElkxoCjxaR%2B6wtkzZb6CVOhLsu4ciuTulXgHle7A%2B3EjyorhEyrIpHrsLgsVBWSLzyWsIw2ohgdLpOq8TBv/600547Y0013223305.mp4?msisdn=2a257d4c-1ee0-4ad8-8081-b1650c26390a&spid=600906&sid=57858632120200&timestamp=20200904035925&encrypt=313933b28758af97ab46a6b2c7eca796&k=fa1c6e97c237dfff&t=1599170365187&ec=2&flag=+&FN=Mojito"
      controls
      autoplay
      width="100%"
    ></video>

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
        <div :class="{ oldThreeThings: 1, oldThreeThingsopen: descboxshow }">
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
        sticky
        swipeable
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
          <VideoMianRemarksItem
            class="VideoMianRemarksItem"
            v-for="item in repliesdata"
            :item="item"
            :key="item.id"
          >
          </VideoMianRemarksItem>
        </van-tab>
        <Footer :bool="repliesdata[0]"></Footer>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import VideoItem from "../components/VideoItem";
import Footer from "../components/Footer";
import VideoMianRemarksItem from "../components/VideoMianRemarksItem";
export default {
  components: { Footer, VideoItem, VideoMianRemarksItem },
  data: function () {
    return {
      repliesdata: [],
      isVideoShow: true,
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
    getreplydata() {
      if (this.avid) {
        this.$axios
          .get(`api/x/v2/reply/main?oid=${this.avid}&type=1`)
          .then((res) => {
            this.repliesdata = res.data.data.replies;
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
        this.getreplydata();
      });

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

  .facepic {
    width: 100vw;
    height: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    .pic {
      width: 30vw;
      height: 30vw;
      background-image: url("../assets/bgpic.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
    .videoface {
      width: 100vw;
      height: 50vw;
      position: relative;

      background-color: #000;
      .auto-img {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .videomsg {
        width: 100vw;
        height: 5vw;
        color: #dedede;
        background: linear-gradient(to top, #333, transparent);
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
      }
    }
  }

  .title {
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    .titletext {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .titlebolck {
      height: auto;
      text-align: left;
      font-size: 4vw;
      overflow: initial;
      white-space: initial;
      text-overflow: initial;
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
        width: 118px;
        height: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
        padding: 3px 0 0 5px;
      }
    }
    .oldThreeThings {
      padding-right: 10px;
      color: grey;
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        vertical-align: top;
        font-size: 13px;
        margin-right: 5px;
      }
      .active {
        color: #fb7299;
      }
    }
    .oldThreeThingsopen {
      width: 100vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        vertical-align: top;
        font-size: 4.5vw;
        margin-right: 5px;
      }
    }
  }

  .itembox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .recommended {
    .VideoMianRemarksItem {
      border-top: 1px solid #ddd;
      &:last-child {
        border-bottom: 1px solid #ddd;
      }
    }
  }
}
</style>