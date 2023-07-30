<script setup>
defineProps({
  path: String,
  alt: String,
});
</script>

<template>
  <div class="cover">
    <AppPicture :path="path" :alt="alt" />
    <div class="cover__content">
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
</template>

<style src="./blockCover.scss" lang="scss" />
