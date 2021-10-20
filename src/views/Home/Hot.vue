<template>
  <div class="box">
    <div class="list">1</div>
    <div class="list">2</div>
    <div class="list">3</div>
    <div class="list">4</div>
    <div class="list">5</div>
    <div class="list">6</div>
    <div class="list">7</div>
    <div class="list">8</div>
    <div class="list">9</div>
    <div class="list">10</div>
  </div>
</template>

<script>
export default {
  name: "Hot",
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  .list {
    width: 20%;
    height: 1.333333rem;
    line-height: 1.333333rem;
    text-align: center;
  }
}
</style>
