<template >
  <div 
  
  class="SkeletonScreenItem">
    <div class="pic">
      <div class="img"></div>
    </div>
    <div class="text">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.SkeletonScreenItem {
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
    border-radius: 10px;
    background-color: #e6e6e6;
    overflow: hidden;
    position: relative;
  }
  .text {
    width: 55vw;
    height: 25vw;
    font-size: 14px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      height: 5vw;
      width: 100%;
      background-color: #e6e6e6;
      &:nth-child(1){height: 8vw;}
      &:nth-child(2){width: 50%;}
      &:nth-child(3){width: 80%;}
    }
  }
}
</style>