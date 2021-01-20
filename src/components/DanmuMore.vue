<template>
  <div>
    <div v-if="listData[0]">
    <DetailVideoItem
      v-for="item in listData"
      :item="item"
      :key="item.season_id"
    >
    </DetailVideoItem>
  </div>
   <div v-else>
<SkeletonScreen></SkeletonScreen>
  </div>
  </div>
</template>

<script>
import DetailVideoItem from "./DetailVideoItem";
import SkeletonScreen from "./SkeletonScreen";
export default {
  props: ["keyword"],
  components: { SkeletonScreen,DetailVideoItem },
  data: function () {
    return {
      listData: [],
    };
  },
  methods: {
    getListData() {
      if (this.keyword) {
        // console.log(this.keyword);
        let source = `api/x/web-interface/search/type?keyword=${this.keyword}&page=1&search_type=video&order=dm&pagesize=20`;
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