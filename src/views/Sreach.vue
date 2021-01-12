<template>
  <div>
  <div class="sreachtop">
  <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="$router.push('/about?query=0')"
      />
    </form>
  </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value:"",
    };
  },
  methods: {
    onSearch() {
        // ajax
        
    },
  },
};
</script>

<style lang="scss" scoped>

</style>