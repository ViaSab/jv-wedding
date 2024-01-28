<script setup lang="ts">
defineI18nRoute({
  paths: {
    fr: "/voyage",
  },
});
</script>

<template>
  <ElRow justify="center">
    <BlockCover path="travel/strasbourg" alt="Strasbourg" is-right />
    <ElCol :xs="24" :md="18" :xl="12">
      <ContentDoc />
    </ElCol>
  </ElRow>
</template>
