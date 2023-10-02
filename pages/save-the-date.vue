<script setup>
const stdvideo = ref(null);

const displayFullscreen = () => {
  if (stdvideo.value.requestFullscreen) {
    stdvideo.value.requestFullscreen();
  } else if (stdvideo.value.webkitRequestFullscreen) {
    /* Safari */
    stdvideo.value.webkitRequestFullscreen();
  } else if (stdvideo.value.msRequestFullscreen) {
    /* IE11 */
    stdvideo.value.msRequestFullscreen();
  }
};
</script>

<template>
  <div class="save-the-date">
    <video controls ref="stdvideo" @click="displayFullscreen()" autoplay muted>
      <source src="/video/save-the-date-en.mp4" type="video/mp4" />
      <img src="/img/save-the-date/poster-en.jpg" />
    </video>
  </div>
</template>

<style lang="scss">
.save-the-date {
  margin: -20px;
  video {
    max-height: calc(100vh - 95px);
  }
}
</style>
