<template>
 1231
 <button @click="handleJump">首页</button>
</template>
<script lang='ts' setup>
 import {useRouter} from 'vue-router'
 const  router = useRouter()
 const handleJump = () => {
    router.push('/home')
 }
</script>
<style lang='scss' scoped>
 
</style>