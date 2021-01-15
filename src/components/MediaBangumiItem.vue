<template>
  <div class="mediabangumitem" @click="videoitemClickFn(item.goto_url)">
    <div class="pic">
      <img class="auto-img" :src="item.cover" alt="" />
    </div>
    <div class="text">
      <div class="title">
        <div class="icon">
          <img class="auto-img" src="../assets/annim.png" alt="" />
        </div>
        <span>番剧</span>
      </div>
      <div v-html="item.title"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    videoitemClickFn(a) {
        window.location.href = a
      // this.$router.push(`VideoMian?bvid=${a}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.mediabangumitem {
  width: 100vw;
  font-size: 14px;

  display: flex;
  justify-content: space-around;
  margin: 26px 0;
  .auto-img {
    width: 100%;
    height: auto;
    display: block;
  }
  .pic {
    box-sizing: border-box;
    width: 23vw;
    height: auto;
    overflow: hidden;
      background-color: #e6e6e6;
    background-image: url('../assets/bgpic.png');
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 5px;
  }
  .text {
    box-sizing: border-box;
    width: 68vw;
    text-align: left;
    .title {
      padding: 0 0 15px 0;
      display: flex;
      align-items: center;
      width: 60px;
      .icon {
        width: 20px;
        display: inline-block;
      }
    }
  }
}
</style>