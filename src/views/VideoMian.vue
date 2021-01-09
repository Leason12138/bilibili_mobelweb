<template>
  <div class="videomain">
    <div>
      <video src=""></video>
    </div>
    <div class="" v-if="showdata.data">
      <div>
        {{ showdata.data.title }}
      </div>
      <div class="upernav">
        {{ showdata.data.owner.name }}
      </div>
      <div class="oldThreeThings">
        点赞 {{ showdata.data.stat.like }} ->硬币
        {{ showdata.data.stat.coin }} ->收藏 {{ showdata.data.stat.favorite }}
        <br />
        <span v-if="showdata.data.stat.his_rank < 100">
          历史最高排行 {{ showdata.data.stat.his_rank }}
        </span>
      </div>
      <div class="desc">
        简介：{{ showdata.data.desc }}
        <br />
        发布时间：{{ showdata.data.pubdate }}
        <br />
        bv：{{ showdata.data.bvid }}
        <br />
        弹幕数：{{ showdata.data.stat.danmaku }}
        <br />
        观看数：{{ showdata.data.stat.view }}
      </div>
    </div>
    <hr />
    <hr />
    <div class="recommended">
      recommendeddata:

      <div class="itembox" v-if="recommendeddata">
        <VideoItem
          @videoitemClickFn="videoitemClickFn"
          v-for="(item, index) in recommendeddata"
          :item="item"
          :key="index"
        >
        </VideoItem>
      </div>
    </div>
  </div>
</template>

<script>
import VideoItem from "../components/VideoItem";
export default {
  components: { VideoItem },
  data: function () {
    return {
      showdata: {},
      cid: "",
      recommendeddata: {},
    };
  },
  methods: {
    videoitemClickFn(a) {
      // VideoMian
      this.$router.push(`VideoMian?bvid=${a}`);
    },
    getShowDataInVideoMain: function (n) {
      this.$axios.get(`api/x/web-interface/view?bvid=${n}`).then((res) => {
        this.showdata = res.data;
      });
      this.$axios
        .get(`api/x/web-interface/archive/related?bvid=${n}`)
        .then((res) => {
          this.recommendeddata = res.data.data;
          console.log(this.recommendeddata);
        });
    },
    getCidDataInVideoMain: function (n) {
      this.$axios
        .get(`api/x/player/pagelist?bvid=${n}`)
        .then((res) => {
          this.cid = res.data.data[0].cid;
          return res.data.data[0].cid;
        })
        .then((cid) => {
          this.$axios
            .get(`api/x/player/playurl?bvid=${n}&cid=${cid}`)
            .then((res) => {
              res;
            });
        });
    },
    //     getVideoAddInVideoMain:function(n,c){
    //   this.$axios.get(`api/x/player/playurl?bvid=${n}&${c}`).then((res) => {

    //       });
    //     }
  },
  watch: {
    $route: function (n) {
      this.recommendeddata={}
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
};
</script>

<style lang="scss" scoped>
.videomain {
  .itembox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>