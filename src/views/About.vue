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
      console.log(a);
      
    },
    getshowdata(n) {
      let source = `http://api.bilibili.com/x/web-interface/ranking/region?rid=${n.query.query}`;
      //  n.query
      if (this.$route.query.query == 0) {
        this.showdata = this.$store.state.homedata;
        // console.log(this.showdata);
      } else {
        this.axios.get(source).then((res) => {
          this.showdata = res.data.data;
          // console.log(res.data.data);
          console.log(this.showdata);
        });
      }
    },
  },
  watch: {
    $route: function (n) {
      console.log(n);
      this.showdata = [];
      this.getshowdata(n);
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