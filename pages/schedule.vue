<script setup>
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
body {
  //background: url(../assets/img/background-flowers.png) no-repeat center;
  background-color: $primary-lightest-color;
}

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
