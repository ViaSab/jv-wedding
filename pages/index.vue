<script setup>
const { locale } = useI18n();
const { data: home } = await useAsyncData("home", () =>
  queryContent(`/${locale.value}/home`).find()
);
</script>

<template>
  <div>
    <ContentDoc :path="`/${locale}/home/welcome`" />
    -----
    <template v-for="(art, index) in home" :key="index">
      <ContentRenderer :value="art" />
    </template>
  </div>
</template>
