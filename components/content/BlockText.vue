<script setup lang="ts"></script>

<template>
  <el-row justify="center" :gutter="30">
    <el-col :xs="24" :sm="20" :md="16" :lg="12">
      <hr />
      <ContentSlot :use="$slots.default" />
      <hr />
    </el-col>
  </el-row>
</template>
