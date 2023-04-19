<script setup>
const { locale } = useI18n();
const { data: home } = await useAsyncData("home", () =>
  queryContent(`/${locale.value}/home`).find()
);
</script>

<template>
  <div>
    <h1>{{ $t("welcome") }} {{ locale }}</h1>
    <!-- <ContentDoc :path="`/${$i18n.locale}/home/welcome`" /> -->
    <template v-for="(art, index) in home" :key="index">
      <ContentRenderer :value="art" />
    </template>
  </div>
</template>

<style lang="scss">
h1 {
  color: $darker-color;
}
</style>
