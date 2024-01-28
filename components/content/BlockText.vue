<script setup lang="ts"></script>

<template>
  <el-row justify="center" :gutter="30">
    <el-col :xs="24" :sm="20" :md="16" :lg="12">
      <ContentSlot :use="$slots.default" />
    </el-col>
  </el-row>
</template>
