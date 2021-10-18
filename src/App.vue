<template>
  <div id="app">
    <div class="buttom-box">
      <router-link to="/home" tag="div">
        <i class="iconfont icon-dianying"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/cinema" tag="div"
        ><i class="iconfont icon-yingyuan"></i> <span>影院</span></router-link
      >
      <router-link to="/host" tag="div"
        ><i class="iconfont icon-wode"></i> <span>我的</span></router-link
      >
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
.buttom-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.333333rem;
  font-size: 0.16rem;
  display: flex;
  align-items: center;
  background: #ddd;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    i {
      margin-bottom: 0.133333rem;
    }
  }
}

.router-link-exact-active {
  color: red;
}
</style>
