<template>
  <div>
    <dv-border-box-9>
      <div class="all">
        <Collapse v-model="value2" accordion class="coll">
          <Panel name="1" style="text-laign:left;">
            1，介绍
            <p slot="content">史蒂 。</p>
          </Panel>
          <Panel name="2" style="text-laign:left;">
            2，通过属性访问
            <p slot="content">史蒂 。</p>
          </Panel>
          <Panel name="3">
            3，通过方法访问
            <p slot="content">斯蒂夫· 1987年）。</p>
          </Panel>
          <Panel name="4">
            4，mapGetters 辅助函数
            <p slot="content">乔纳森· 影响力的人。</p>
          </Panel>
        </Collapse>
      </div>
    </dv-border-box-9>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2:'1'
    };
  }
};
</script>
<style lang='scss' scoped>
</style>
