<script setup>
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
        <NuxtLink :to="localePath(`${item}`)">
          {{ $t(`navbar.${item}`) }}
        </NuxtLink>
      </ElMenuItem>
      <ElDivider
        direction="vertical"
        border-style="solid"
        style="height: 40px"
      />
      <ElMenuItem class="language-item"><LanguageToggle /></ElMenuItem>
    </ElMenu>
  </nav>
</template>

<style lang="scss" src="./navbar.scss" />
