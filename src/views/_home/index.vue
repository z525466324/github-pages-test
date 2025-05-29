<template>
 home
 <button @click="handleJump">点击home</button>
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