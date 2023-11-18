<script setup lang="ts">
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const otherLocale = computed(() => (locale.value === "en" ? "fr" : "en"));
</script>

<template>
  <NuxtLink :to="switchLocalePath(otherLocale)">
    {{ otherLocale }}
  </NuxtLink>
</template>
