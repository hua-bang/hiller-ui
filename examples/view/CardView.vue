<template>
  <div>
    <h2 style="margin-left: 15px">Card组件</h2>
  </div>
  <div class="display-area">
    <h3 style="margin-left: 15px">基础用法</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <h3>Hello, 这是一个卡片实例!</h3>
      </hl-card>
    </div>
  </div>
  <div class="display-area">
    <h3 style="margin-left: 15px">首部用法</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <template #header>
          <div
            style="
              display: flex;
              flex-wrap: wrap;
              height: 30px;
              line-height: 30px;
            "
          >
            <div style="width: 70%; font-size: 16px">
              <b>卡片名称</b>
            </div>
            <div style="width: 30%; text-align: right">
              <hl-button type="primary">操作按钮</hl-button>
            </div>
          </div>
        </template>
        <div class="item">列表内容1</div>
        <div class="item">列表内容2</div>
        <div class="item">列表内容3</div>
        <div class="item">列表内容4</div>
      </hl-card>
    </div>
  </div>
  <div class="display-area">
    <h3 style="margin-left: 15px">阴影效果用法</h3>
    <div class="diplay-shadow-card-area">
      <hl-card>
        <h3>一般卡片实例!</h3>
      </hl-card>
      <hl-card shadow="hover">
        <h3>这是Hover触发阴影卡片实例!</h3>
      </hl-card>
      <hl-card shadow="never">
        <h3>这是没有阴影卡片实例!</h3>
      </hl-card>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
.display-area {
  margin-top: 15px;
  button {
    margin-left: 10px;
  }
}
.item {
  margin-top: 10px;
}
.diplay-shadow-card-area{
  display: flex; 
  margin: 15px;
  div {
    margin-right: 15px;
  }
}
</style>