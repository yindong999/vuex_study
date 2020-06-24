<template>
   <div> 
     <dv-border-box-13>
      <div class="all">
        <Collapse v-model="value2" accordion class="coll">
         <Panel name="1" style="text-laign:left;">
            1，介绍
            <p slot="content">史蒂 。</p>
          </Panel>
          <Panel name="2" style="text-laign:left;">
            2，提交载荷（Payload）
            <p slot="content">史蒂 。</p>
          </Panel>
          <Panel name="3">
            3，对象风格的提交方式
            <p slot="content">斯蒂夫· 1987年）。</p>
          </Panel>
          <Panel name="4">
            4，使用常量替代 Mutation 事件类型
            <p slot="content">乔纳森· 影响力的人。</p>
          </Panel>
          <Panel name="5">
            5，Mutation 必须是同步函数
            <p slot="content">乔纳森· 影响力的人。</p>
          </Panel>
        </Collapse></div>
    </dv-border-box-13>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value2:'1'
    };
  }, 
};
</script>
<style lang='scss' scoped>
</style>