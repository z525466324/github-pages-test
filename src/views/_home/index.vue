<template>
    <el-button type="primary" @click="handleJump">cliack</el-button>
    <el-button type="info" @click="handleMessage">1222223dd</el-button>
</template>
<script lang='ts' setup>
    import {useRouter}from "vue-router"
    import { ElMessage, ElMessageBox } from 'element-plus'
    import type { Action } from 'element-plus'
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
</script>
<style lang='scss' scoped>
 
</style>