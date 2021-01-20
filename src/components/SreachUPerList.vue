<template>
  <div>
    <div v-if="listData[0]">
      <br />
      <UPerItem v-for="item in listData" :item="item" :key="item.mid">
      </UPerItem>
    </div>
    <div v-else>
      <SkeletonScreen></SkeletonScreen>
    </div>
  </div>
</template>

<script>
import SkeletonScreen from "./SkeletonScreen";
import UPerItem from "./UPerItem";
export default {
  props: ["keyword"],
  components: { SkeletonScreen, UPerItem },
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
        let source = `api/x/web-interface/search/type?keyword=${this.keyword}&page=1&search_type=bili_user&order=totalrank&pagesize=20`;
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