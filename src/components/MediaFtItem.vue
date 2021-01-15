<template>
  <div class="mediaftitem">
    <div class="pic">
      <img class="anto-img" :src="item.cover" alt="" />
    </div>
    <div class="text">
      <div class="title">
        <div class="icon">
          <img class="anto-img" src="../assets/movie.png" alt="" />
        </div>
        <span>电影</span>
      </div>
      <div v-html="item.title"></div>
      <p>地区:{{ item.areas }}</p>
      <p>演员: <span v-if="item.cv">{{ item.cv }}</span> <span v-else>暂无信息</span> </p>
      <p>{{ item.staff }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.mediaftitem {
  font-size: 14px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  margin: 26px 0;
  .anto-img {
    width: 100%;
    height: auto;
    display: block;
  }
  .pic {
    box-sizing: border-box;
    width: 23vw;
    height: auto;
    overflow: hidden;
    border-radius: 5px;
  }
  .text {
    box-sizing: border-box;
    width: 68vw;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      margin: 0;
      color: #999;
      width: 100%;
      height: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .title {
      padding: 0 0 5px 0;
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