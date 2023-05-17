<script setup>
const photos = OUR_STORY_PHOTOS;
</script>
<template>
  <ElRow justify="center">
    <ElCol :xs="24" :md="18" :xl="12">
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
