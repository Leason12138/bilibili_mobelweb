<template>
  <div class="classlist">
    {{ item.text }}
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
</template>

<script>
import VideoItem from "./VideoItem";
export default {
  components: { VideoItem },
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
  .classlistitem {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>