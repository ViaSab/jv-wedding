<script setup lang="ts"></script>

<template>
  <el-row justify="center" :gutter="30">
    <el-col :xs="24" :sm="20" :md="16" :lg="12">
      <div style="padding-top: 30px">
        <ContentSlot :use="$slots.default" />
      </div>
    </el-col>
  </el-row>
</template>
