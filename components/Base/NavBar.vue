<script setup lang="ts">
const localePath = useLocalePath();
const { activeMenuItem, menuItems } = useNavBar();
</script>

<template>
  <nav>
    <ElMenu mode="horizontal" :default-active="`${activeMenuItem}`">
      <ElMenuItem
        v-for="(item, index) in menuItems"
        :key="index"
        :index="`${index}`"
      >
        <NuxtLink
          :to="localePath(`${item}`)"
          :class="item === 'rsvp' ? 'rsvp-item' : null"
        >
          {{ $t(`navbar.${item}`) }}
        </NuxtLink>
      </ElMenuItem>
      <ElMenuItem class="language-item"><LanguageToggle /></ElMenuItem>
    </ElMenu>
  </nav>
</template>

<style lang="scss" src="./navbar.scss" />
