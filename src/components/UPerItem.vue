<template>
  <div>
    <div class="uperitem">
      <div class="left">
        <div class="pic">
          <img class="auto-img" :src="item.upic" />
        </div>
      </div>
      <div class="right">
        <div class="text">
          <div class="name">
            <span>
              {{ item.uname }}
            </span>
          </div>
          <div class="fivw">
            <div class="view">
              <div class="fans">
                <span> 粉丝: {{ item.fans }} </span>
              </div>
              <div class="videos">
                <span> 视频: {{ item.videos }} </span>
              </div>
            </div>
            <div class="usign">
              <span>
                {{ item.usign }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  <br>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.uperitem {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 2.5vw;
  color: #999;
  .left {
    width: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .pic {
      margin: 0;
      padding: 0;
      width: 15vw;
      height: 15vw;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .right {
    width: 70vw;
    height: 16vw;
    text-align: left;
    overflow: hidden;
    .text {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .name {
        height: 5vw;
        color: #000;
        font-size: 3.2vw;
        padding: 0 0 5px 0;
      }
      .fivw {
        height: 11vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .view {
          div {
            display: inline-block;
            margin-right: 2vw;
          }
        }
        .usign {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>