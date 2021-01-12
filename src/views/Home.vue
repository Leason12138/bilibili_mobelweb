<template>
  <div class="about">
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
    };
  },
  methods: {
    videoitemClickFn(a) {
      // console.log(a);
      // VideoMian
      this.$router.push(`VideoMian?bvid=${a}`);
    },
    getshowdata() {
      
        this.showdata = this.$store.state.homedata;
        // console.log(this.showdata);
      
    },
  },
  watch: {
    $route: function (n) {
      // console.log(n);
      this.showdata = [];
      if (n.query.query) {
        this.getshowdata(n);
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
  .itembox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>