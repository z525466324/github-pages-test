<template>
    <el-button type="primary" @click="handleJump">click</el-button>
</template>
<script lang='ts' setup>
 import {useRouter}from "vue-router"
 const router = useRouter()

const handleJump = () => {
    router.push('/')
}
</script>
<style lang='scss' scoped>
 
</style>