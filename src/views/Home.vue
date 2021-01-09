<template>
  <div class="home">

    <div class="itembox" v-if="showdata">
      <VideoItem v-for="(item, index) in showdata" :item="item" :key="index">
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
    getshowdata() {
    
      //  n.query
    
        this.showdata = this.$store.state.homedata;
  
      }
    
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
.home{
 .itembox{
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
 }
}
</style>
