<template>
  <ElRow justify="center">
    <ElCol>
      <ContentDoc />
    </ElCol>
  </ElRow>
</template>

<style lang="scss">
.venue {
  &-title {
    position: relative;
    padding: 20px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &-photo img {
    border: 1px solid white;
  }
}
</style>
