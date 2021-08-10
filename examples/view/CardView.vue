<template>
  <div style="width: 480px;margin:50px">
    <hl-card>
      <template #header>
        <div style="display: flex;flex-wrap:wrap;height:30px;line-height:30px">
          <div style="width:70%;font-size:16px">
            <b>卡片名称</b>
          </div>
          <div style="width:30%;text-align:right">
            <hl-button type="primary">操作按钮</hl-button>
          </div>
        </div>
      </template>
      <div class="item">
        列表内容1
      </div>
      <div class="item">
        列表内容2
      </div>
      <div class="item">
        列表内容3
      </div>
      <div class="item">
        列表内容4
      </div>
      
    </hl-card>
  </div>
</template>

<script>
import HlCard from "@components/card/src/index";
import HlButton from "@components/button/src/index";
export default {
  components: {
    "hl-card": HlCard,
    "hl-button": HlButton
  }
};
</script>

<style scoped>
.item{
  margin-bottom: 20px;
}
</style>