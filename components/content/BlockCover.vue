<script setup lang="ts">
defineProps({
  path: String,
  alt: String,
  isRight: Boolean,
});
</script>

<template>
  <div class="cover">
    <div :class="['cover__content', { right: isRight }]">
      <ContentSlot :use="$slots.default" />
    </div>
    <AppPicture :path="path" :alt="alt" />
  </div>
</template>

<style src="./blockCover.scss" lang="scss" />
