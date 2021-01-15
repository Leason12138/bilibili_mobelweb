<template>
  <div class="withoutcommend">
    <span> 热门推荐 </span>
    <div class="itembox">
      <VideoItem
        @videoitemClickFn="videoitemClickFn"
        :item="item"
        v-for="item in commenddata.slice(0, 4)"
        :key="item.aid"
      >
      </VideoItem>
    </div>
    <span> 最新视频 </span>
    <div class="itembox">
      <VideoItem
        @videoitemClickFn="videoitemClickFn"
        :item="item"
        v-for="item in showdata.archives"
        :key="item.aid"
      >
      </VideoItem>
    </div>
  </div>
</template>

<script>
import VideoItem from "./VideoItem";
export default {
  components: { VideoItem },
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
      let source = `api/x/web-interface/ranking/region?rid=${this.item.classvalue}`;
      this.axios.get(source).then((res) => {
        this.commenddata = res.data.data;
      });
    },
    getshowdata() {
      let suores = `api/x/web-interface/dynamic/region?rid=${this.item.classvalue}&pn=1`;
      this.axios.get(suores).then((res) => {
        this.showdata = res.data.data;
      });
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
  .itembox {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>