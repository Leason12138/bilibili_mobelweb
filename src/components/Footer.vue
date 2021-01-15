<template>
  <div class="footer">
    <div v-if="bool" class="seeyou">
      <div class="see-you-app">
        <img
          class="auto-img"
          src="//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/no-more-tips.png"
          alt=""
        />
      </div>
      <p>只能到这里了~</p>
      <p>我们在客户端不见不散哦</p>
      <br />
      <van-button
        color="#fb7299"
        class="downloadbtn"
        url="http://d.bilibili.com/download_app.html?preUrl=http%3A%2F%2Fm.bilibili.com%2Findex.html&schema=bilibili%3A%2F%2Fhome%3Ftab_name%3D%E7%83%AD%E9%97%A8&h5awaken=cHZpZD1CMkY5MTYzQy0yQTkyLTQ3MTEtODBGNi1EMTkyOTI5REJCMzk1Mzk0MGluZm9jXzBfMTYxMDM0NzEzNTIyMiZ1YT1Nb3ppbGxhJTJGNS4wJTIwKGlQaG9uZSUzQiUyMENQVSUyMGlQaG9uZSUyME9TJTIwMTNfMl8zJTIwbGlrZSUyME1hYyUyME9TJTIwWCklMjBBcHBsZVdlYktpdCUyRjYwNS4xLjE1JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMFZlcnNpb24lMkYxMy4wLjMlMjBNb2JpbGUlMkYxNUUxNDglMjBTYWZhcmklMkY2MDQuMSUyMEVkZyUyRjg3LjAuNDI4MC4xNDEmaXNBdXRvT3Blbj1mYWxzZSZic291cmNlPXVuZGVmaW5lZCYmb3Blbl9hcHBfZnJvbV90eXBlPWg1Jm9wZW5fYXBwX3V1aWQ9QTU1ODcwQkMtRjU2NS1BQUNELTgxNTgtOTZENTRDRjRBMjJENjgwNzdpbmZvYyZvcGVuX2FwcF9ncm91cGlkPSU3QiU3RCZvcGVuX2FwcF91cmw9aHR0cHMlM0ElMkYlMkZtLmJpbGliaWxpLmNvbSUyRiZvcGVuX2FwcF9hZGRpdGlvbj0lN0IlMjJzcG1pZCUyMiUzQSUyMjMzMy40MDAuY2xpY2sudG9wRG93bmxvYWQlMjIlMkMlMjJncm91cF9pZCUyMiUzQTExJTJDJTIyYnNvdXJjZSUyMiUzQSUyMmRlZmF1bHQlMjIlMkMlMjJ1bmlxdWVfayUyMiUzQW51bGwlMkMlMjJzZXNzaW9uSWQlMjIlM0ElMjJsajRoY2o4Y2owZyUyMiUyQyUyMnVhU291cmNlJTIyJTNBJTIyJTIyJTdE"
        type="default"
        >下载bilibili</van-button
      >
    </div>
    <div v-else class="notthing">
      <div class="m-search-empty">
        <img
          class="auto-img"
          src="//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/notFound.png"
          alt=""
        />
      </div>
      <p>这里什么都没有噢~</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['bool']
};
</script>

<style lang="scss" scoped>
.footer {
  .seeyou {
    margin: 50px 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .see-you-app {
      width: 42vw;
      margin-bottom: 13px;
    }
    p {
      color: #999;
      margin: 0;
    }
    .downloadbtn {
      border-radius: 5px;
    }
  }
  .notthing {
    margin: 50px 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .m-search-empty {
      width: 62vw;
    }
    p {
      color: #999;
      margin: 0;
    }
  }
}
</style>