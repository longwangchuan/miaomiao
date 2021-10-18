<template>
  <div>
    <Header></Header>
    <div class="navigation">
      <router-link class="city" to="/home/city" tag="div"
        >广州<img :src="slide" alt=""
      /></router-link>
      <router-link class="hot" to="/home/hot" tag="div">正在热映</router-link>
      <router-link class="cinema" to="/home/cinema" tag="div"
        >最近上映</router-link
      >
      <router-link class="search" to="/home/search" tag="div">搜索</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      slide: require("@/assets/images/slide.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.666667rem;
  text-align: center;
  font-size: 0.213333rem;
  .city,
  .search {
    width: 1.333333rem;
    img {
      width: 0.266667rem;
      height: 0.133333rem;
      margin-left: 0.066667rem;
      margin-bottom: 0.066667rem;
    }
  }
  .hot,
  .cinema {
    font-weight: bold;
    flex: 1;
  }
}

.router-link.exact-active {
  color: red;
}
</style>
