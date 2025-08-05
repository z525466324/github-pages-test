<template>
  <p>childrenComponent_2childrenComponent_2childrenComponent_2</p>
  <p>{{ title }}</p>
  <p>{{ msg }}</p>
  <hr />
  <hr />
  <hr />
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string;
    msg?: string;
  }>(),
  {
    title: "children_2",
    msg: "chilfrenComponent_2",
  }
);
</script>
<style lang="scss" scoped></style>
