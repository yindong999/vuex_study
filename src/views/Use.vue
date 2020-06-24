<template>
  <div>
    <dv-border-box-11 title="vuex的使用">
      <div class="all paddingTop use">
        <Collapse  id="coll" v-model="value2" accordion class="coll">
          <Panel name="1" style="text-laign:left;">
            1，使用目的
            <p slot="content">实现多组件状态管理。多个组件之间需要数据共享时，Vuex是个不错的选择。</p>
          </Panel>
          <Panel name="2" style="text-laign:left;">
            2，使用场景
            <p slot="content">
              vuex 一般用于中大型 web 单页应用中对应用的状态进行管理，
              对于一些组件间关系较为简单的小型应用，使用 vuex 的必要性不是很大，
              因为完全可以用组件 prop 属性或者事件来完成父子组件之间的通信，
              vuex 更多地用于解决跨组件通信以及作为数据中心集中式存储数据。
            </p>
          </Panel>
          <Panel name="3" style="text-laign:left;">
            3，使用过程
            <p slot="content">
              1.首先当然要安装啦 (假设你已经安装了vue)<br />
              npm install vuex <br />
              2.引入并使用Vuex <br />
              import Vue from 'vue'<br />
              import Vuex from 'vuex'<br />
              Vue.use(Vuex)<br />
              3.实例化一个Vuex对象--Store状态机 并抛出<br />
                export default new Vuex.Store({<br />
                    state: {},<br />
                    mutations: {},<br />
                    actions: {},<br />
                    modules: {}<br />
                })<br />
             
              4.在main.js中引入并注入Vuex<br />
              import Vue from 'vue'<br />
              import App from './App.vue'<br />
              import store from './store'<br />
              new Vue({<br />
              render: h => h(App),<br />
              store<br />
              }).$mount('#app')<br />
              <br />
              <!-- 3.1，拓展
                  父子组件的通信一般可以通过以下方式：
                  1、通过 prop 属性实现父组件向子组件传递数据
                  2、通过在子组件中触发事件实现向父组件传递数据
                  非父子组件之间的通信一般通过一个空的 Vue 实例作为 中转站，也可以称之为 事件中心、event bus。
                  // 创建事件中心实例
                  let bus = new Vue()
                  // 在组件 A 中触发事件
                  bus.$emit('test', 1)
                  // 在组件 B 中接受事件
                  bus.$on('test', (id) => {
                  // ...
              })-->
            </p>
          </Panel>
          <Panel name="4" style="text-laign:left;">
            4，简要总结
            <p slot="content">
              vuex 具体应用在哪取决于项目的规模以及具体的业务场景，
              可能是为了解决多层嵌套组件之间的通信问题，
              或是为了更好地管理应用中错综复杂的状态关系，
              而不能为了用 vuex 而在项目中使用 vuex。
            </p>
          </Panel>
        </Collapse>
      </div>
    </dv-border-box-11>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: "1"
    };
  },
  watch:{
      value2(v1,v2){
          console.log(v1,v2)
        var dom = document.getElementById("coll")
        // dom.offsetHeight
          console.log(dom.offsetHeight)

      }
  }
};
</script>
<style lang='scss' scoped>
.use {
    height:auto;
}
</style>