<script setup lang="ts">
defineI18nRoute({
  paths: {
    fr: "/voyage",
  },
});
</script>

<template>
  <ElRow justify="center">
    <ElCol>
      <BlockCover path="travel/strasbourg" alt="Strasbourg" is-right />
    </ElCol>
    <ElCol :xs="24" :md="18" :xl="12">
      <div>
        <ContentDoc />
      </div>
    </ElCol>
  </ElRow>
</template>
