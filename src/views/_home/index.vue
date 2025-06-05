<template>
    <el-button type="primary" @click="handleJump">cliack</el-button>
    <el-button type="info" @click="handleMessage">1222223dd</el-button>
    <el-button type="primary" @click="handleDebounce('123', 'abc')">防抖函数</el-button>
    <el-button type="primary" @click="handleThrottling('123', 'abc')">节流函数</el-button>
</template>
<script lang='ts' setup>
    import {useRouter}from "vue-router"
    import { ElMessage, ElMessageBox } from 'element-plus'
    import type { Action } from 'element-plus'
    import {debounce, throttling} from "@/hooks/tools"
 const router = useRouter()

const handleJump = () => {
    router.push('/')
}

const handleMessage = () => {
    ElMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}

const testDebounce = debounce((str: string, s: string) => {
    console.log('点击了, 点击了', str, s)
}, 500)
const testThrottling = throttling((str: string, s: string) => {
    console.log('点击了, 点击了', str, s)
}, 500)
const handleDebounce = (str: string, s: string) => {
    testDebounce(str, s)
}
const handleThrottling = (str: string, s: string) => {
    testThrottling(str, s)
}
</script>
<style lang='scss' scoped>
 
</style>