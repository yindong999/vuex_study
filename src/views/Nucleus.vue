<template>
  <div>
    <div class="twoRouter">
      <router-link to="/Nucleus/State">State</router-link>
      <router-link to="/Nucleus/Getter">Getter</router-link>
      <router-link to="/Nucleus/Mutation">Mutation</router-link>
      <router-link to="/Nucleus/Action">Action</router-link>
      <router-link to="/Nucleus/Module">Module</router-link>
    </div>
    <transition>
      <keep-alive>
        <router-view v-if="this.$route.meta.keepAlive" />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
    // console.log($route)
  }
};
</script>
<style lang='scss' scoped>
.twoRouter {
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  color: #2c3e50;
  padding: 10px;
  &.router-link-exact-active {
    color: #0679fc;
  }
}
.router {
  width: 150px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  align-items: center;
}
</style>