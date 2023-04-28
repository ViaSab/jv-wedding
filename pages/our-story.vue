<script setup>
const { locale } = useI18n();
const { data } = await useAsyncData("our-story", () => {
  const path = locale.value === "en" ? "our-story" : "fr/our-story";
  return queryContent(path).find();
});
</script>
<template>
  <div>
    <template v-for="(art, index) in data" :key="index">
      <ContentRenderer :value="art" />
    </template>
  </div>
</template>
