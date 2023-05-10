<template>
  <div class="cover">
    <h1><slot /></h1>
    <ElImage :src="`/img/our-story/alberta.jpg`" fit="cover" loading="lazy" />
  </div>
</template>

<style lang="scss" src="./cover.scss" />
