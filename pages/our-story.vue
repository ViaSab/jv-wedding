<script setup lang="ts">
const photos = OUR_STORY_PHOTOS;
defineI18nRoute({
  paths: {
    fr: "/notre-histoire",
  },
});
</script>

<template>
  <ElRow justify="center">
    <ElCol :xs="24" :md="18" :xl="12">
      <div class="center picture">
        <NuxtImg
          src="/img/svg/2-hearts.svg"
          alt="Herats and arrow drawing"
          width="220"
        />
      </div>
      <h1>{{ $t("our-story.title") }}</h1>
      <ContentDoc />
    </ElCol>
  </ElRow>
  <ElDivider border-style="dashed" />
  <ElRow :gutter="30">
    <ElCol
      :xl="6"
      :lg="8"
      :sm="12"
      v-for="(photo, index) in photos"
      :key="index"
    >
      <CardPhotos category="our-story" :photo="photo" />
    </ElCol>
  </ElRow>
</template>

<style lang="scss" scoped>
.picture {
  margin-top: 15px;
}
</style>
