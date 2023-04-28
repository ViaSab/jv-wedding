<script setup>
const localePath = useLocalePath();
</script>

<template>
  <div>
    <ContentDoc />
    <ElDivider />
    <ContentDoc :path="localePath('index')" />
  </div>
</template>
