<template>
  <div class="VideoItem" @click="clickfn">
    <div class="pic">
      <img :src="item.pic" :key="item.bvid" alt="" />
      <div class="imgbar">
        <span v-if="item.play">
          <van-icon name="play-circle-o" />
          {{
            item.play > 10000
              ? (item.play / 10000).toFixed(1) + "万"
              : item.play
          }}
          <!-- ? (Number(item.play)/ 10000).tofided(1) : item.play -->
        </span>
        <span v-else>
          <van-icon name="play-circle-o" />
          {{
            item.stat.view > 10000
              ? (item.stat.view / 10000).toFixed(1) + "万"
              : item.stat.view
          }}
          <!-- ? (Number(item.play)/ 10000).tofided(1) : item.play -->
        </span>
        <span v-if="item.video_review">
          <van-icon name="comment-o" />
          {{
            item.video_review > 10000
              ? (item.video_review / 10000).toFixed(1) + "万"
              : item.video_review
          }}
        </span>
        <span v-else-if="item.stat">
          <van-icon name="comment-o" />
          {{
            item.stat.danmaku > 10000
              ? (item.stat.danmaku / 10000).toFixed(1) + "万"
              : item.stat.danmaku
          }}
        </span>
      </div>
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
  methods: {
    clickfn() {
      if (
        this.item.author == "哔哩哔哩番剧" ||
        this.item.author == "哔哩哔哩电影" ||
        this.item.author == "哔哩哔哩纪录片" ||
        this.item.author == "迷影社" ||
        this.item.author == "哔哩哔哩放映姬"
      ) {
        // console.log(this.item);
        location.href = this.item.redirect_url;
      } else {
        this.$emit("videoitemClickFn", this.item.bvid);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.VideoItem {
  width: 46vw;
  max-width: 260px;
  .pic {
    width: 100%;
    height: 28vw;
    background-color: #e6e6e6;
    background-image: url("../assets/bgpic.png");
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) scale(1.1);
      display: block;
    }
    .imgbar {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 3% 2%;
      color: #fff;
      font-size: 14px;
      position: absolute;
      bottom: 0;
      z-index: 1;
      width: 95%;
      background-image: linear-gradient(to top, #000000dd, transparent);
      height: 20px;
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