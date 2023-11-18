<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div class="center">
    <h2 justify="center">{{ t("form.title") }}</h2>
    <div>{{ t("form.description") }}</div>
    <NuxtLink :to="localePath('index')" class="button">
      {{ $t("form.link") }}
    </NuxtLink>
  </div>
</template>
