<template>
  <div class="classlist">
    <div v-if="showdata[0]">
      <span class="title"> {{ item.text }}</span>
      <div class="classlistitem">
        <VideoItem
          @videoitemClickFn="videoitemClickFn"
          :item="item"
          v-for="item in showdata.slice(0, 4)"
          :key="item.aid"
        >
        </VideoItem>
      </div>
    </div>
    <div v-else>
      <SkeletonScreenItem v-for="item in 2" :key="item.id">
        {{ item }}
      </SkeletonScreenItem>
    </div>
  </div>
</template>


<script>
// <SkeletonScreenItem v-for="item in items" :key="item.id">
//         {{ item }}
//       </SkeletonScreenItem>
import VideoItem from "./VideoItem";
import SkeletonScreenItem from "./SkeletonScreenItem";
export default {
  components: { VideoItem, SkeletonScreenItem },
  props: ["item"],
  data: function () {
    return {
      showdata: [],
    };
  },
  methods: {
    videoitemClickFn(a) {
      this.$router.push(`VideoMian?bvid=${a}`);
    },
    getshowdata() {
      let source = `api/x/web-interface/ranking/region?rid=${this.item.classvalue}`;
      this.axios.get(source).then((res) => {
        this.showdata = res.data.data;
        //   console.log(this.showdata);
      });
    },
  },
  created() {
    this.getshowdata();
  },
  watch: {
    $route: function () {
      this.getshowdata();
    },
  },
};
</script>

<style lang="scss" scoped>
.classlist {
  .title {
    margin: 25px 0 20px 10px;
    display: block;
    text-align: left;
  }
  .classlistitem {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>