

<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import checkForUpdate from './hooks/detect-updates'
if(import.meta.env.MODE !== 'development') {
  setInterval(checkForUpdate, 10000) // 每 5 秒检查一次
}
</script>
<style scoped>
</style>
