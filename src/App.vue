<template>
  <div id="app">
    <p class="title">vuex</p>
    <dv-loading v-if="show">拼命加载中...</dv-loading>
    <div id="nav" v-if="!show">
      <router-link to="/">
        <dv-decoration-11 style="width:150px;height:50px;display:inline-block;">vuex概述</dv-decoration-11>
      </router-link>
      <router-link to="/Nucleus">
        <dv-decoration-11 style="width:150px;height:50px;display:inline-block;">vuex核心概念</dv-decoration-11>
      </router-link>
      <router-link to="/Use">
        <dv-decoration-11 style="width:150px;height:50px;display:inline-block;">vuex的使用</dv-decoration-11>
      </router-link>
      <router-link to="/PlugIn">
        <dv-decoration-11 style="width:150px;height:50px;display:inline-block;">相关插件</dv-decoration-11>
      </router-link>
    </div>
    <dv-decoration-1
      style="width:200px;height:50px;float:right;position: absolute;
    right: 0;
    top: 0;"
    />
    <dv-decoration-1
      style="width:200px;height:50px;float:right;position: absolute;
    left: 0;
    top: 0;"
    />
    <transition v-if="!show">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  created() {
    setTimeout(() => {
      this.show = false;
    }, 2000);
  }
};
</script>
<style lang="scss">
.border-box-content {
  width: 100px;
}
body {
  margin: 0 !important;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .title {
    font-weight: 600;
    font-size: 26px;
    margin: 0;
    background: #3264d5;
    color: #fff;
    padding: 10px 0;
  }

  #nav {
    padding: 10px;
    a {
      padding: 10px;
      color: #3c3d43;
      &.router-link-exact-active {
        color: #0679fc;
      }
    }
  }
}
.router-link-active:nth-of-type(1) {
  color: #3c3d43;
}
.router-link-active:nth-of-type(2) {
  color: #0679fc !important;
}
.router-link-active {
  color: #0679fc;
}

.v-enter {
  // v-enter：定义进入过渡的开始状态。元素被插入之前生效，在元素被插入之后的下一帧移除
  transition: all 1s ease;
  transform: translateX(100%);
}
.v-leave-to {
  // v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态
  transition: all 1s ease;
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-leave-active,
.v-enter-active {
  // v-enter-active：定义进入过渡生效时的状态
  // v-leave-active：定义离开过渡生效时的状态
  transition: all 1s ease;
}
.all {
  width: 100%;
  min-height: 480px;
}
.paddingTop{
  padding-top:66px;
}
.coll {
  margin: 0 40px;
  position: relative;
  top: 40px;
  text-align:left;
}
</style>
