<template>
  1231123aaa
  <el-button type="primary" plain @click="handleJump">2首页</el-button>
  <el-button type="primary" plain @click="handleClick">点击</el-button>
  <test-component></test-component>
  <el-button type="primary" plain @click="addCount">addStoreCount</el-button>
  <br />
  <br />
  <br />
  <testt></testt>
  <p>
    <el-button type="primary" plain @click="add_cCount">
      addStoreCount
    </el-button>
  </p>
  <hr />
  <hr />
  <hr />
  <hr />
  <hr />
  <el-button type="primary" plain @click="showData">显示数据</el-button>
  <el-button type="primary" plain @click="changeItem">改变数据</el-button>
  <ul class="data-list-warp">
    <li class="loading" v-if="datalistLoading">loading.....</li>
    <li
      v-for="(item, index) in dataList"
      :key="index"
      v-memo="[item === testVal]"
    >
      <span>index:</span>
      <span>{{ index }}</span>
      &nbsp;&nbsp;
      <span>item:</span>
      <span>{{ item }}</span>
      &nbsp;&nbsp;
      <span>isisi:</span>
      <span>{{ item === testVal }}</span>
      <hr />
    </li>
  </ul>
  <hr />
  <hr />
  <hr />
  <hr />
  <hr />
  <childrenComponent
    :title="'123'"
    :msg="'123321123231123321'"
  ></childrenComponent>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { testFun } from "./test";
import TestComponent from "@/components/test.vue";
import { homes } from "@/store/index";
import { c_store } from "@/store/compontApi";

import loadingComponents from "@/components/loading-component.vue";

import childrenComponent from "./childrenComponent.vue";

// const testt = defineAsyncComponent(() => import("@/components/testCom.vue"));
const testt = defineAsyncComponent({
  loader: () => import("@/components/test.vue"),
  loadingComponent: loadingComponents,
  delay: 3000,
});
const { addCount } = homes();
const { add_cCount } = c_store();
const router = useRouter();
const handleJump = () => {
  router.push("/home");
};
const handleClick = () => {
  testFun({
    id: "123",
    name: "345",
  });
};

///=----------------------
const datalistLoading = ref(false);
const dataList: any = ref([]);
const showData = async () => {
  datalistLoading.value = true;
  // dataList.value = await addData();
  const worker = new Worker(new URL("./addData.ts", import.meta.url), {
    type: "module",
  });
  worker.postMessage("");
  worker.onmessage = function (e) {
    console.log("计算结果:", e.data); // 输出结果
    dataList.value = e.data;
    datalistLoading.value = false;
  };
};

///------------------------------
const testVal = ref(5);
const changeItem = () => {
  testVal.value = 2;
};
</script>
<style lang="scss" scoped>
.data-list-warp {
  width: 100%;
  height: 300px;
  border: 1px solid red;
  overflow: auto;
  .loading {
    list-style: none;
  }
}
</style>
