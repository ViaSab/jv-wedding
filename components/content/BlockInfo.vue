<script setup>
defineProps({
  path: String,
  alt: String,
});
</script>

<template>
  <el-row justify="center" align="middle" :gutter="30">
    <el-col :xs="24" :sm="12" :md="8" :lg="6">
      <div class="info__image">
        <img
          :src="`/img/${path}.jpg`"
          :alt="alt"
          loading="lazy"
          class="rounded"
        />
      </div>
    </el-col>
    <el-col :xs="24" :sm="12" :md="8" :lg="6">
      <div class="info__content">
        <ContentSlot :use="$slots.default" />
      </div>
    </el-col>
  </el-row>
</template>

<style src="./blockInfo.scss" lang="scss" />
