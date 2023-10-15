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
        ref="rsvpFormRef"
        size="large"
        name="RSVP"
        :label-position="`${isMobile ? 'top' : 'right'}`"
        label-width="250px"
        data-netlify="true"
      >
        <ElFormItem :label="$t('rsvp.guest-name')" required>
          <ElInput v-model="rsvpForm.name" />
        </ElFormItem>
        <ElFormItem :label="$t('rsvp.guest-attendance')" required>
          <ElRadioGroup v-model="rsvpForm.isAttending">
            <ElRadio :label="true">{{ $t("common.yes") }}</ElRadio>
            <ElRadio :label="false">{{ $t("common.no") }}</ElRadio>
          </ElRadioGroup>
        </ElFormItem>
        <ElCollapseTransition>
          <div v-show="rsvpForm.isAttending">
            <ElFormItem
              :label="$t('rsvp.guest-appetizer')"
              :required="rsvpForm.isAttending"
            >
              <ElRadioGroup v-model="rsvpForm.appetizer">
                <ElRadio label="meat">{{ $t("rsvp.meat") }}</ElRadio>
                <ElRadio label="vegan">{{ $t("rsvp.vegan") }}</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem
              :label="$t('rsvp.guest-main-course')"
              :required="rsvpForm.isAttending"
            >
              <ElRadioGroup v-model="rsvpForm.mainCourse">
                <ElRadio label="meat">{{ $t("rsvp.meat") }}</ElRadio>
                <ElRadio label="vegan">{{ $t("rsvp.vegan") }}</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem
              :label="$t('rsvp.guest-plus-one')"
              :required="rsvpForm.isAttending"
            >
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
                  v-model="rsvpForm.plusOneName"
                  :required="rsvpForm.hasPlusOne"
                >
                  <ElInput />
                </ElFormItem>
                <ElFormItem
                  :label="$t('rsvp.plus-one-appetizer')"
                  :required="rsvpForm.hasPlusOne"
                >
                  <ElRadioGroup v-model="rsvpForm.plusOneAppetizer">
                    <ElRadio label="meat">{{ $t("rsvp.meat") }}</ElRadio>
                    <ElRadio label="vegan">{{ $t("rsvp.vegan") }}</ElRadio>
                  </ElRadioGroup>
                </ElFormItem>
                <ElFormItem
                  :label="$t('rsvp.plus-one-main-course')"
                  :required="rsvpForm.hasPlusOne"
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
