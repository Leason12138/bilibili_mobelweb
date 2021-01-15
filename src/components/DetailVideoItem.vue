<template >
  <div class="DetailVideoItem" 
  @click="videoitemClickFn(item.bvid)">
    <div class="pic">
      <img class="anto-img" :src="item.pic" alt="" />
      <span> {{ item.duration }} </span>
    </div>
    <div class="text">
      <div class="title" v-html="item.title"></div>
      <div class="uper">
        <span>{{ item.author }}</span>
      </div>
      <div class="viewdata">
        <div class="views">
          <van-icon name="play-circle-o" />
          <span>
            {{
              item.play > 10000
                ? (item.play / 10000).toFixed(1) + "万"
                : item.play
            }}</span
          >
        </div>
        <div class="damus">
          <van-icon name="comment-o" />
          <span>
            {{
              item.video_review > 10000
                ? (item.video_review / 10000).toFixed(1) + "万"
                : item.video_review
            }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    videoitemClickFn(a) {
      this.$router.push(`VideoMian?bvid=${a}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.anto-img {
  width: 100%;
  height: auto;
  display: block;
}
.DetailVideoItem {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  height: 25vw;
  font-size: 14px;
  margin: 15px 0;
  .pic {
    width: 40vw;
    height: 25vw;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
    }
    span {
      padding: 0 3px;
      border-radius: 3px;
      position: absolute;
      bottom: 5px;
      right: 5px;
      background-color: hsla(0, 0%, 13%, 0.6);
      color: #fff;
    }
  }
  .text {
    width: 55vw;
    height: 25vw;
    font-size: 14px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .uper {
      color: #a0a0a0;
      display: flex;
      align-items: center;
      &::before {
        content: "UP";
        display: inline-block;
        border: 1px #a0a0a0 solid;
        border-radius: 3px;
        margin: 0 5px;

        font-size: 10px;
      }
    }
    .viewdata {
      display: flex;
      width: 100%;
      height: 20px;
      color: #a0a0a0;

      div {
        height: 100%;
        margin: 0 2.5%;
        display: flex;
        align-items: center;
      }
    }
  }
  .title {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>