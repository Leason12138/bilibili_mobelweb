<template>
  <div class="withoutcommend">
    <span class="title"> 热门推荐 </span>
    <div v-if="commenddata[0]" class="itembox">
      <VideoItem
        @videoitemClickFn="videoitemClickFn"
        :item="item"
        v-for="item in commenddata.slice(0, 4)"
        :key="item.aid"
      >
      </VideoItem>
    </div>

    <div v-else>
      <SkeletonScreenItem v-for="item in 2" :key="item.id">
        {{ item }}
      </SkeletonScreenItem>
    </div>
    <span class="title"> 最新视频 </span>
    <div v-if="commenddata[0]" class="itembox">
      <VideoItem
        @videoitemClickFn="videoitemClickFn"
        :item="item"
        v-for="(item, index) in showdata"
        :key="index"
      >
      </VideoItem>
    </div>
    <div v-else>
      <SkeletonScreenItem v-for="item in 2" :key="item.id">
        {{ item }}
      </SkeletonScreenItem>
    </div>
  </div>
</template>

<script>
import VideoItem from "./VideoItem";
import SkeletonScreenItem from "./SkeletonScreenItem";
export default {
  components: { VideoItem, SkeletonScreenItem },
  props: ["item"],
  data: function () {
    return {
      commenddata: [],
      showdata: [],
    };
  },
  methods: {
    videoitemClickFn(a) {
      this.$router.push(`VideoMian?bvid=${a}`);
    },
    getcommenddata() {
      if (this.item.text == "完结动画") {
        // console.log("errrrrrr");
        // https://api.bilibili.com/x/web-interface/ranking/region?rid=32&day=7&context=
        let source = `api/x/web-interface/ranking/region?rid=32&day=7&context=`;
        this.axios.get(source).then((res) => {
          // console.log(res);
          this.commenddata = res.data.data;
          //   console.log(this.showdata);
        });
      } else {
        let source = `api/x/web-interface/ranking/region?rid=${this.item.classvalue}`;
        this.axios.get(source).then((res) => {
          this.commenddata = res.data.data;
        });
      }
    },
    getshowdata() {
      let source = `api/x/web-interface/dynamic/region?rid=${this.item.classvalue}&pn=1`;
      this.axios
        .get(source)
        .then((res) => {
          this.showdata = res.data.data.archives;
        })
        .then(() => {
          source = `api/x/web-interface/dynamic/region?rid=${this.item.classvalue}&pn=2`;
          this.axios.get(source).then((res) => {
            if (res.data.data) {
              this.showdata.push(...res.data.data.archives);
            }
          });
          //
          source = `api/x/web-interface/dynamic/region?rid=${this.item.classvalue}&pn=3`;
          this.axios.get(source).then((res) => {
            if (res.data.data) {
              this.showdata.push(...res.data.data.archives);
            }
          });
          //
          source = `api/x/web-interface/dynamic/region?rid=${this.item.classvalue}&pn=4`;
          this.axios.get(source).then((res) => {
            if (res.data.data) {
              this.showdata.push(...res.data.data.archives);
            }
          });
        });
      //
    },
  },
  created() {
    this.getshowdata();
    this.getcommenddata();
  },
  watch: {
    item: function () {
      this.getshowdata();
      this.getcommenddata();
    },
  },
};
</script>

<style lang="scss" scoped>
.withoutcommend {
  .title {
    text-align: left;
    margin: 25px 0 20px 10px;
    display: block;
  }
  .itembox {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>