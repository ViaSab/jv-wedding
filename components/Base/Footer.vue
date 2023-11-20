<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <ElFooter>
    <ElIcon><ElIconMagicStick /></ElIcon>
    &nbsp;
    <span>{{ $t("footer.text") }}</span>
    <span class="vertical-divider">|</span>
    <ElIcon><ElIconMessage /></ElIcon>
    &nbsp;
    <span
      ><a href="mailto:jillianplusvianney@gmail.com"
        >jillianplusvianney@gmail.com</a
      ></span
    >
    <span class="vertical-divider">|</span>
    <span>{{ currentYear }}</span>
  </ElFooter>
</template>

<style lang="scss" src="./footer.scss" />
