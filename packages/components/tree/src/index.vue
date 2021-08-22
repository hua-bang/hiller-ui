<template>
  <div class="hl-tree">
    <template v-for="(item) in data" :key="item.id">
      <sub-tree :id="item.id" :label="item.label" :children="item.children"></sub-tree>
    </template>
  </div>
</template>

<script>
import SubTree from "./subTree.vue";
export default {
  name: "hl-tree",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    "sub-tree": SubTree
  }
};
</script>

<style>
</style>