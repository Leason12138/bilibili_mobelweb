<template>
  <div>
    <br />

    <MediaBangumiItem 
      v-for="item in listData"
      :item="item"
      :key="item.season_id"
    >
    </MediaBangumiItem>

    
  </div>
</template>

<script>
import MediaBangumiItem from "./MediaBangumiItem";
export default {
  props: ["keyword"],
  components: { MediaBangumiItem },
  data: function () {
    return {
      listData: [],
    };
  },
  methods: {
    getListData() {
      this.listData=[]
      if (this.keyword) {
        console.log(this.keyword);
        let source = `api/x/web-interface/search/type?keyword=${this.keyword}&page=1&search_type=media_bangumi&order=totalrank&pagesize=20`;
        this.axios.get(source).then((res) => {
          console.log(res);
          this.listData = res.data.data.result;
          console.log(this.listData);
        });
      }
    },
  },
  watch: {
    keyword: function (n) {
      console.log(n);
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