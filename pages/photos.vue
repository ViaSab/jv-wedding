<script setup>
const { locale } = useI18n();
const path = computed(() => {
  return locale.value === "en" ? "photos" : "fr/photos";
});
</script>
<template>
  <div>
    <ContentDoc :path="path" />
  </div>
</template>
