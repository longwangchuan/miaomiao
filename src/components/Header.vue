<template>
  <div class="header">
    {{ title }}
    <button @click="hand()">11111</button>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      item: "1112",
    };
  },
  methods: {
    hand() {
      this.$emit("func", this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 1.333333rem;
  line-height: 1.333333rem;
  font-size: 0.16rem;
  background: red;
  color: #fff;
  text-align: center;
}
</style>
