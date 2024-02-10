<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div class="top-bar center">
    <ElIcon><ElIconBell /></ElIcon>&nbsp;
    <NuxtLink :to="localePath('venue')"> {{ t("common.shuttle") }}</NuxtLink>
    {{ t("common.and") }}
    <NuxtLink :to="localePath('schedule')"> Brunch</NuxtLink>
    {{ t("common.updates") }}
  </div>
</template>

<style lang="scss" src="./topbar.scss" />
