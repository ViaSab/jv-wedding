<script setup lang="ts">
import type { FormInstance } from "element-plus";

const { rsvpForm, rsvpFormRules, showForm, submitRsvpForm } = useRsvpForm();
const { isMobile } = useResponsive();
const rsvpFormRef = ref<FormInstance>();
</script>

<template>
  <ElRow justify="center">
    <ElCol :xs="24" :md="18" :xl="12">
      <ContentDoc />
    </ElCol>
  </ElRow>
  <hr class="variant" />
  <ElRow>
    <ElCol>
      <div class="container"></div>
      <ElForm
        v-if="showForm"
        :model="rsvpForm"
        :rules="rsvpFormRules"
        :validate-on-rule-change="false"
        :label-position="`${isMobile ? 'top' : 'right'}`"
        ref="rsvpFormRef"
        size="large"
        label-width="250px"
        name="RSVP"
        data-netlify="true"
      >
        <ElFormItem :label="$t('rsvp.guest-name')" prop="name">
          <ElInput v-model="rsvpForm.name" />
        </ElFormItem>
        <ElFormItem :label="$t('rsvp.guest-attendance')" prop="isAttending">
          <ElRadioGroup v-model="rsvpForm.isAttending">
            <ElRadio :label="true">{{ $t("common.yes") }}</ElRadio>
            <ElRadio :label="false">{{ $t("common.no") }}</ElRadio>
          </ElRadioGroup>
        </ElFormItem>
        <ElCollapseTransition>
          <div v-show="rsvpForm.isAttending">
            <ElFormItem :label="$t('rsvp.guest-appetizer')" prop="appetizer">
              <ElRadioGroup v-model="rsvpForm.appetizer">
                <ElRadio label="meat">{{ $t("rsvp.meat") }}</ElRadio>
                <ElRadio label="vegan">{{ $t("rsvp.vegan") }}</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem :label="$t('rsvp.guest-main-course')" prop="mainCourse">
              <ElRadioGroup v-model="rsvpForm.mainCourse">
                <ElRadio label="meat">{{ $t("rsvp.meat") }}</ElRadio>
                <ElRadio label="vegan">{{ $t("rsvp.vegan") }}</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem :label="$t('rsvp.guest-plus-one')" prop="hasPlusOne">
              <ElRadioGroup v-model="rsvpForm.hasPlusOne">
                <ElRadio :label="true">{{ $t("common.yes") }}</ElRadio>
                <ElRadio :label="false">{{ $t("common.no") }}</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElCollapseTransition>
              <div v-show="rsvpForm.hasPlusOne">
                <hr class="variant" />
                <ElFormItem
                  :label="$t('rsvp.plus-one-name')"
                  prop="plusOneName"
                >
                  <ElInput v-model="rsvpForm.plusOneName" />
                </ElFormItem>
                <ElFormItem
                  :label="$t('rsvp.plus-one-appetizer')"
                  prop="plusOneAppetizer"
                >
                  <ElRadioGroup v-model="rsvpForm.plusOneAppetizer">
                    <ElRadio label="meat">{{ $t("rsvp.meat") }}</ElRadio>
                    <ElRadio label="vegan">{{ $t("rsvp.vegan") }}</ElRadio>
                  </ElRadioGroup>
                </ElFormItem>
                <ElFormItem
                  :label="$t('rsvp.plus-one-main-course')"
                  prop="plusOneMainCourse"
                >
                  <ElRadioGroup v-model="rsvpForm.plusOneMainCourse">
                    <ElRadio label="meat">{{ $t("rsvp.meat") }}</ElRadio>
                    <ElRadio label="vegan">{{ $t("rsvp.vegan") }}</ElRadio>
                  </ElRadioGroup>
                </ElFormItem>
                <hr class="variant" />
              </div>
            </ElCollapseTransition>
            <ElFormItem :label="$t('rsvp.comments')">
              <ElInput
                v-model="rsvpForm.songs"
                type="textarea"
                :placeholder="$t('rsvp.comments-placeholder')"
              />
            </ElFormItem>
          </div>
        </ElCollapseTransition>
        <hr class="variant" />
        <ElFormItem>
          <ElButton type="primary" @click="submitRsvpForm(rsvpFormRef)">
            {{ $t("rsvp.send") }}
          </ElButton>
        </ElFormItem>
      </ElForm>
      <FormResponse v-else />
    </ElCol>
  </ElRow>
</template>

<style lang="scss" scoped>
.container {
  @media only screen and (min-width: 640px) {
    min-width: 600px;
  }
}
</style>
