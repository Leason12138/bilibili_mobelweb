<template>
  <div class="about">
    <div v-if="$route.query.query != 0">
      <van-tabs
        sticky
        color="#fb7299"
        title-active-color="#fb7299"
        v-model="active"
      >
        <van-tab title="推荐">
          <div class="itembox" v-if="showdata[0]">
            <div class="commond">推荐视频</div>
            <VideoItem
              @videoitemClickFn="videoitemClickFn"
              v-for="(item, index) in showdata.slice(0, 4)"
              :item="item"
              :key="index"
            >
            </VideoItem>
          </div>
          <div v-else>
            <SkeletonScreenItem v-for="item in 2" :key="item.id">
              {{ item }}
            </SkeletonScreenItem>
          </div>
          <div v-if="classdata[$route.query.query]">
            <ClassList
              :item="item"
              v-for="(item, index) in classdata[$route.query.query]"
              :key="index"
            >
            </ClassList>
          </div>
        </van-tab>
        <van-tab
          v-for="(item, index) in classdata[$route.query.query]"
          :title="classdata[$route.query.query][index].text"
          :key="index"
        >
          <WithOutCommend :item="item"></WithOutCommend>
        </van-tab>
      </van-tabs>
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
import WithOutCommend from "../components/WithOutCommend";
import SkeletonScreenItem from "../components/SkeletonScreenItem";
export default {
  components: { SkeletonScreenItem, VideoItem, ClassList, WithOutCommend },
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
    getshowdata(n) {
      let source = `api/x/web-interface/ranking/region?rid=${n.query.query}`;
      //  n.query
      if (this.$route.query.query == 0) {
        this.showdata = this.$store.state.homedata;
        // console.log(this.showdata);
      } else {
        this.axios.get(source).then((res) => {
          this.showdata = res.data.data;
        });
      }
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
.about {
  .commond {
    width: 100vw;
    text-align: left;
    margin: 25px 0 20px 10px;
  }
  width: 96vw;
  overflow: hidden;
  padding: 1vw;
  .itembox {
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>