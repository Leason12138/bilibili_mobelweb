<template>
  <div>
    <div v-if="listData[0]">
      <br />

      <MediaBangumiItem
        v-for="item in listData"
        :item="item"
        :key="item.season_id"
      >
      </MediaBangumiItem>
    </div>

    <div v-else>
      <SkeletonScreen></SkeletonScreen>
    </div>
  </div>
</template>

<script>
import SkeletonScreen from "./SkeletonScreen";

import MediaBangumiItem from "./MediaBangumiItem";
export default {
  props: ["keyword"],
  components: { MediaBangumiItem, SkeletonScreen },
  data: function () {
    return {
      listData: [],
    };
  },
  methods: {
    getListData() {
      this.listData = [];
      if (this.keyword) {
        // console.log(this.keyword);
        let source = `api/x/web-interface/search/type?keyword=${this.keyword}&page=1&search_type=media_bangumi&order=totalrank&pagesize=20`;
        this.axios.get(source).then((res) => {
          // console.log(res);
          this.listData = res.data.data.result;
          // console.log(this.listData);
        });
      }
    },
  },
  watch: {
    keyword: function () {
      // console.log(n);
      this.getListData();
    },
  
  },
  created() {
    this.getListData();
  },
};
</script>

<style lang="scss" scoped>
</style>