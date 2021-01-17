<template>
  <div class="home">
    <div v-if="$route.query.query != 0">
      <div class="itembox" v-if="showdata">
      
        <VideoItem
          @videoitemClickFn="videoitemClickFn"
          v-for="(item, index) in showdata"
          :item="item"
          :key="index"
        >
        </VideoItem>
      </div>
      <div>
        <ClassList
          :item="item"
          v-for="(item, index) in classdata[$route.query.query]"
          :key="index"
        >
        </ClassList>
      </div>
    </div>
    <div v-else>
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
  </div>
</template>

<script>
import VideoItem from "../components/VideoItem";
import ClassList from "../components/ClassList";
export default {
  components: { VideoItem, ClassList },
  data: function () {
    return {
      showdata: [],
      active: "",
      classdata: [],
    };
  },
  methods: {
    videoitemClickFn(a) {
      this.$router.push(`VideoMian?bvid=${a}`);
    },
    getshowdata() {
      this.showdata = this.$store.state.homedata;
    },
  },
  watch: {
    $route: function (n) {
      // console.log(n);
      this.active = 0;
      this.showdata = [];
      if (n.query.query) {
        this.getshowdata(n);
      }
    },
  },
  created() {
    this.classdata = this.$store.state.classdata;
    this.getshowdata(this.$route);
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 96vw;
  overflow: hidden;
  padding: 1vw;
  .itembox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>