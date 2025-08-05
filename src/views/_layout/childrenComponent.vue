<template>
  <p>childrenComponents</p>
  <p>
    <input type="text" v-model.lazy="inpVal" /> <span>{{ inpVal }}</span>
  </p>
  <p>{{ title }}</p>
  <p>{{ msg }}</p>
  <hr />
  <hr />
  <hr />
  <childrenComponent_2 v-bind="$props"></childrenComponent_2>
  <span v-pre>{{this span hahah}} </span>

  <el-button type="primary" plain @click="handleChange">改变数据</el-button>
  <span v-press></span>
</template>
<script lang="ts" setup>
import { ref, watch, type Directive } from "vue";
import childrenComponent_2 from "./childrenComponent_2.vue";
withDefaults(
  defineProps<{
    title: string;
    msg: string;
  }>(),
  {
    title: "",
    msg: "",
  }
);

// 自定义指令Directive
const vLoading: Directive = {
  mounted(el, binding) {
    console.log(el, binding);
  },
};

const val = ref("123");

const handleChange = () => {
  val.value = "234";
};
watch(
  () => val.value,
  async () => {
    await fn();
    console.log("abc");
  }
);
const fn = () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("setTimeout");
      res("");
    }, 2000);
  });
};

const inpVal = ref("111");
</script>
<style lang="scss" scoped></style>
