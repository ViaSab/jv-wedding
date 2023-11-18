<script setup lang="ts">
const props = defineProps({
  path: String,
  alt: String,
  isCentered: Boolean,
  isRounded: Boolean,
});
</script>

<template>
  <el-row justify="center" align="middle" :gutter="30" class="block-info">
    <template v-if="path && alt">
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <div class="info__image">
          <img
            :src="`/img/${path}.jpg`"
            :alt="alt"
            loading="lazy"
            :class="{ rounded: isRounded }"
          />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <div :class="{ center: isCentered }">
          <ContentSlot :use="$slots.default" />
        </div>
      </el-col>
    </template>
    <template v-else>
      <el-col :xs="24" :md="16" :lg="12">
        <div :class="{ center: isCentered }">
          <ContentSlot :use="$slots.default" />
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<style src="./blockInfo.scss" lang="scss" />
