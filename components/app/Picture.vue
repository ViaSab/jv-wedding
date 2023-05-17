<script setup>
defineProps({
  path: String,
  alt: String,
});
</script>

<template>
  <picture>
    <source media="(max-width:600px)" :srcset="`/img/${path}-small.jpg`" />
    <source media="(max-width:1024px)" :srcset="`/img/${path}-medium.jpg`" />
    <img :src="`/img/${path}-large.jpg`" :alt="alt" loading="lazy" />
  </picture>
</template>
