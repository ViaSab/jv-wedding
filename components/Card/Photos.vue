<script setup lang="ts">
defineProps({
  category: String,
  photo: String,
});
</script>

<template>
  <ElCard class="photo-card">
    <template #header>
      <ElImage
        :src="`/img/${category}/${photo}.jpg`"
        fit="cover"
        loading="lazy"
      />
    </template>
    <h3>{{ $t(`${category}.${photo}.title`) }}</h3>
    <p>{{ $t(`${category}.${photo}.description`) }}</p>
    <div class="details">{{ $t(`${category}.${photo}.date`) }}</div>
  </ElCard>
</template>

<style src="./photos.scss" lang="scss" />
