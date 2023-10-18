<script setup lang="ts">
import type { FormInstance } from "element-plus";

const { rsvpForm, rsvpFormRules } = useRsvpForm();
const { isMobile } = useResponsive();
const rsvpFormRef = ref<FormInstance>();

const submitRsvpForm = async (): Promise<void> => {
  if (!rsvpFormRef.value) return;
  await rsvpFormRef.value?.validate((valid) => {
    if (valid) {
      rsvpFormRef.value?.$el.submit();
    }
  });
};
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
        :model="rsvpForm"
        :rules="rsvpFormRules"
        :validate-on-rule-change="false"
        :label-position="`${isMobile ? 'top' : 'right'}`"
        ref="rsvpFormRef"
        size="large"
        label-width="250px"
        name="RSVP"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="submitRsvpForm"
      >
        <input type="hidden" name="form-name" value="RSVP" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <ElFormItem :label="$t('rsvp.guest-name')" prop="name">
          <ElInput v-model="rsvpForm.name" name="name" />
        </ElFormItem>
        <ElFormItem :label="$t('rsvp.guest-attendance')" prop="isAttending">
          <ElRadioGroup v-model="rsvpForm.isAttending" name="Attendance">
            <ElRadio :label="true">{{ $t("common.yes") }}</ElRadio>
            <ElRadio :label="false">{{ $t("common.no") }}</ElRadio>
          </ElRadioGroup>
        </ElFormItem>
        <ElCollapseTransition>
          <div v-show="rsvpForm.isAttending">
            <ElFormItem :label="$t('rsvp.guest-appetizer')" prop="appetizer">
              <ElRadioGroup v-model="rsvpForm.appetizer" name="Appetizer">
                <ElRadio label="Meat">{{ $t("rsvp.meat") }}</ElRadio>
                <ElRadio label="Vegan">{{ $t("rsvp.vegan") }}</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem :label="$t('rsvp.guest-main-course')" prop="mainCourse">
              <ElRadioGroup v-model="rsvpForm.mainCourse" name="Main course">
                <ElRadio label="Meat">{{ $t("rsvp.meat") }}</ElRadio>
                <ElRadio label="Vegan">{{ $t("rsvp.vegan") }}</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem :label="$t('rsvp.guest-plus-one')" prop="hasPlusOne">
              <ElRadioGroup v-model="rsvpForm.hasPlusOne" name="Has a guest">
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
                  <ElInput v-model="rsvpForm.plusOneName" name="Guest name" />
                </ElFormItem>
                <ElFormItem
                  :label="$t('rsvp.plus-one-appetizer')"
                  prop="plusOneAppetizer"
                >
                  <ElRadioGroup
                    v-model="rsvpForm.plusOneAppetizer"
                    name="Guest appetizer"
                  >
                    <ElRadio label="Meat">{{ $t("rsvp.meat") }}</ElRadio>
                    <ElRadio label="Vegan">{{ $t("rsvp.vegan") }}</ElRadio>
                  </ElRadioGroup>
                </ElFormItem>
                <ElFormItem
                  :label="$t('rsvp.plus-one-main-course')"
                  prop="plusOneMainCourse"
                >
                  <ElRadioGroup
                    v-model="rsvpForm.plusOneMainCourse"
                    name="Guest main course"
                  >
                    <ElRadio label="Meat">{{ $t("rsvp.meat") }}</ElRadio>
                    <ElRadio label="Vegan">{{ $t("rsvp.vegan") }}</ElRadio>
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
                name="Comments"
              />
            </ElFormItem>
          </div>
        </ElCollapseTransition>
        <hr class="variant" />
        <ElFormItem>
          <button type="submit" class="button">{{ $t("rsvp.send") }}</button>
        </ElFormItem>
      </ElForm>
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
