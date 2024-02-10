<script setup lang="ts">
defineI18nRoute({
  paths: {
    fr: "/menu-diner",
  },
});
</script>

<template>
  <div class="center menu">
    <ContentDoc />
  </div>
</template>

<style lang="scss">
.menu {
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
