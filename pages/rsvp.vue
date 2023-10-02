<script setup lang="ts">
import type { FormInstance } from "element-plus";

const { rsvpForm, rsvpFormRules, submitRsvpForm } = useRsvpForm();
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
      <ElForm
        :model="rsvpForm"
        :rules="rsvpFormRules"
        ref="rsvpFormRef"
        size="large"
        name="RSVP"
        data-netlify="true"
        label-position="right"
        label-width="240px"
      >
        <ElFormItem label="Your Name">
          <ElInput v-model="rsvpForm.name" />
        </ElFormItem>
        <ElFormItem label="Are you attending?">
          <ElRadioGroup v-model="rsvpForm.isAttending">
            <ElRadio :label="true">Yes</ElRadio>
            <ElRadio :label="false">No</ElRadio>
          </ElRadioGroup>
        </ElFormItem>
        <ElCollapseTransition>
          <div v-show="rsvpForm.isAttending">
            <ElFormItem label="Your appetizer choice?">
              <ElRadioGroup v-model="rsvpForm.appetizer">
                <ElRadio label="meat">Meat</ElRadio>
                <ElRadio label="vegan">Vegan</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="Your main course choice?">
              <ElRadioGroup v-model="rsvpForm.mainCourse">
                <ElRadio label="meat">Meat</ElRadio>
                <ElRadio label="vegan">Vegan</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="Do you have a guest?">
              <ElRadioGroup v-model="rsvpForm.hasPlusOne">
                <ElRadio :label="true">Yes</ElRadio>
                <ElRadio :label="false">No</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElCollapseTransition>
              <div v-show="rsvpForm.hasPlusOne">
                <hr class="variant" />
                <ElFormItem label="Guest Name" v-model="rsvpForm.plusOneName">
                  <ElInput />
                </ElFormItem>
                <ElFormItem label="Your guest appetizer choice?">
                  <ElRadioGroup v-model="rsvpForm.plusOneAppetizer">
                    <ElRadio label="meat">Meat</ElRadio>
                    <ElRadio label="vegan">Vegan</ElRadio>
                  </ElRadioGroup>
                </ElFormItem>
                <ElFormItem label="Your guest main course choice?">
                  <ElRadioGroup v-model="rsvpForm.plusOneMainCourse">
                    <ElRadio label="meat">Meat</ElRadio>
                    <ElRadio label="vegan">Vegan</ElRadio>
                  </ElRadioGroup>
                </ElFormItem>
                <hr class="variant" />
              </div>
            </ElCollapseTransition>
            <ElFormItem label="Any song suggestions?">
              <ElInput v-model="rsvpForm.songs" type="textarea" />
            </ElFormItem>
          </div>
        </ElCollapseTransition>
        <hr class="variant" />
        <ElFormItem>
          <ElButton type="primary" @click="submitRsvpForm(rsvpFormRef)">
            Submit
          </ElButton>
        </ElFormItem>
      </ElForm>
    </ElCol>
  </ElRow>
</template>

<style lang="scss" scoped>
form {
  min-width: 600px;
}
</style>
