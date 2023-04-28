<script setup></script>

<template>
  <div>
    <ContentDoc />
  </div>
  <ElDivider />
  <div>
    <ContentDoc :path="localePath('index')" />
  </div>
</template>
