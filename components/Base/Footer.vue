<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <ElFooter>
    <div class="center">
      <ElIcon><ElIconMagicStick /></ElIcon>
      &nbsp;
      <span>{{ $t("footer.text") }}</span>
      <br class="hidden-sm-and-up" />
      <span class="vertical-divider hidden-xs-only">|</span>
      <ElIcon><ElIconMessage /></ElIcon>&nbsp;
      <span
        ><a href="mailto:jillianplusvianney@gmail.com"
          >jillianplusvianney@gmail.com</a
        ></span
      >
      <br class="hidden-sm-and-up" />
      <span class="vertical-divider hidden-xs-only">|</span>
      <span>&copy; {{ currentYear }}</span>
    </div>
  </ElFooter>
</template>

<style lang="scss" src="./footer.scss" />
