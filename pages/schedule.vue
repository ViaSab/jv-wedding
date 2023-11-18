<script setup lang="ts">
defineI18nRoute({
  paths: {
    fr: "/agenda",
  },
});
</script>

<template>
  <div class="center schedule">
    <ContentDoc />
  </div>
</template>

<style lang="scss">
.schedule {
  img {
    max-width: 180px;
    max-height: 100px;
    margin-bottom: 15px;
  }

  em {
    color: $primary-light-color;
  }
}
</style>
