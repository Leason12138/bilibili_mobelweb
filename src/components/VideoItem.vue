<template>
  <div class="VideoItem" @click="$emit('videoitemClickFn', item.bvid)">
    <div class="pic">
      <img :src="item.pic" :key="item.bvid" alt="" />
    </div>
    <p class="title">
      {{ item.title }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["item"],
  created() {},
};
</script>

<style lang="scss" scoped>
.VideoItem {
  width: 48vw;
  max-width: 260px;
  .pic {
    width: 100%;
    height: 30vw;
    background-color: darkgray;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) scale(1.1);
      display: block;
    }
  }
  .title {
    font-size: 12px;
    height: 32px;
    margin: 5px 0;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>