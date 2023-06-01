<script setup>
defineProps({
  path: String,
  alt: String,
});
</script>

<template>
  <div class="cover">
    <div class="cover__content">
      <ContentSlot :use="$slots.default" />
    </div>
    <AppPicture :path="path" :alt="alt" />
  </div>
</template>

<style src="./blockCover.scss" lang="scss" />
