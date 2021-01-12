<template>
  <div class="about">
    <div v-if="$route.query.query!=0">
      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
    </div>
    <div class="itembox" v-if="showdata">
      <VideoItem
        @videoitemClickFn="videoitemClickFn"
        v-for="(item, index) in showdata"
        :item="item"
        :key="index"
      >
      </VideoItem>
    </div>

    
  </div>
</template>

<script>
import VideoItem from "../components/VideoItem";
export default {
  components: { VideoItem },
  data: function () {
    return {
      showdata: [],
      active:'',
      classdata: {
        0: {},
        1: [
          { value: 1, text: "MAD·AMV", classvalue: 24 },
          { value: 2, text: "MMD·3D", classvalue: 25 },
          { value: 3, text: "短片·手书·配音", classvalue: 47 },
          { value: 4, text: "特摄", classvalue: 86 },
          { value: 5, text: "综合", classvalue: 27 },
        ],
        13: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
        9: {},
        10: {},
        11: {},
        12: {},
        14: {},
        15: {},
        16: {},
        17: {},
        18: {},
        // 18
      },
    };
  },
  methods: {
    videoitemClickFn(a) {
      // console.log(a);
      // VideoMian
      this.$router.push(`VideoMian?bvid=${a}`);
    },
    getshowdata(n) {
      let source = `api/x/web-interface/ranking/region?rid=${n.query.query}`;
      //  n.query
      if (this.$route.query.query == 0) {
        this.showdata = this.$store.state.homedata;
        // console.log(this.showdata);
      } else {
        this.axios.get(source).then((res) => {
          this.showdata = res.data.data;
          // console.log(res.data.data);
          // console.log(this.showdata);
        });
      }
    },
    // ajaxtest() {
    //   let source = `api/x/web-interface/ranking/region?rid=25`;

    //   this.axios.get(source).then((res) => {
    //     // this.showdata = res.data.data;
    //     console.log("ajaxtest", res);
    //     // console.log(this.showdata);
    //   });
    // },
  },
  watch: {
    $route: function (n) {
      // console.log(n);
      this.showdata = [];
      if (n.query.query) {
        this.getshowdata(n);
        // this.ajaxtest();
      }
    },
  },
  created() {
    this.getshowdata(this.$route);
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 1vw;
  .itembox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>