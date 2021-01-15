<template>
  <div class="videomainremrksitem">
    <div class="top">
      <div class="topleft">
        <div
          class="header"
          :style="{ backgroundImage: `url(${item.member.avatar})` }"
        ></div>

        <div class="topleftR">
          <p>{{ item.member.uname }}</p>
          <p>{{ ctime }}</p>
        </div>
      </div>

      <span class="replaylike">
        <van-icon size="5vw" name="good-job-o" />
        {{
          item.like > 10000 ? (item.like / 10000).toFixed(1) + "万" : item.like
        }}
      </span>
    </div>
    <div class="message">
      {{ item.content.message }}
    </div>
    <!-- {{item.member.avatar}} -->
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    ctime: function () {
      // console.log(this.showdata.data.pubdate);
      // return 0
      // if (this.showdata) {
      if (this.item.ctime > 1606665600) {
        return new Date(Number(this.item.ctime + "000"))
          .toLocaleDateString()
          .replace(/\//g, "-")
          .slice(5);
      } else {
        return new Date(Number(this.item.ctime + "000"))
          .toLocaleDateString()
          .replace(/\//g, "-");
      }

      //
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.videomainremrksitem {
box-sizing: border-box;
  padding: 2.5vw;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  .top {
    font-size: 3.4vw;
    color: #999;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .topleft {
      width: 60vw;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .header {
        margin-left: 1vw;
        width: 10vw;
        height: 10vw;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: 50%;
      }
      .topleftR {
        height: 11vw;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        p {
          margin: 0;
          text-align: left;
        }
      }
    }

    .replaylike {
      padding-right: 10px;
      display: flex;
      width: 40vw;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .message {
    font-size: 3.8vw;
    color: #212121;
    width: 82vw;
    text-align: left;
    white-space: pre-line;
  }
}
</style>  