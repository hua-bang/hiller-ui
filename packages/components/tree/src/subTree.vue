<template>
  <div class="hl-sub-tree">
    <i class="hl-sub-tree-icon iconfont icon-sanjiaoxing" @click="handleClick"></i>
    <!-- <div class="hl-sub-tree-icon" :class=" isExpend ? 'expend' : 'closed' " @click="handleClick"></div> -->
    <div class="hl-sub-tree-title" @click="handleClick"> {{ label }} </div>
    <div class="hl-sub-tree-children" v-if="children && children.length !== 0" :class=" isExpend ? 'expend' : 'closed' ">
      <template :key="item.id" v-for="(item) in children">
        <sub-tree :id="item.id" :label="item.label" :children="item.children" >
        </sub-tree>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "sub-tree",
  props: {
    id: {
      type: [String, Number]
    },
    label: {
      type: String
    },
    children: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const isExpend = ref(true);
    const handleClick = () => {
      isExpend.value = !isExpend.value;
    };
    
    return {
      isExpend,
      handleClick
    };
  }
};
</script>

<style>

</style>