<template>
  1231123aaa
  <el-button type="primary" plain @click="handleJump">首页</el-button>
  <el-button type="primary" plain @click="handleClick">1点击</el-button>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { testFun } from "./test";
const router = useRouter();
const handleJump = () => {
  router.push("/home");
};
const handleClick = () => {
  testFun({
    id: "123",
    name: "345",
    age: 12,
  });
};
</script>
<style lang="scss" scoped></style>
