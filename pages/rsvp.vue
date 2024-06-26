<script setup lang="ts">
import type { FormInstance } from "element-plus";

const { rsvpForm, rsvpFormRules, resetForm } = useRsvpForm();
const { isMobile } = useResponsive();
const localePath = useLocalePath();

const rsvpFormRef = ref<FormInstance>();

const openDrawer = ref<boolean>(false);

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
  <div class="flower-container">
    <div class="form-container">
      <ElRow justify="center">
        <ElCol :xs="24">
          <div class="center">
            <h1>
              RSVP <NuxtImg src="/img/svg/letter.svg" alt="Letter" width="70" />
            </h1>
            <ContentDoc />
          </div>
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
            :action="localePath('form-success')"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="submitRsvpForm"
          >
            <input type="hidden" name="form-name" value="RSVP" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>
            <ElFormItem :label="$t('rsvp.guest-name')" prop="name">
              <ElInput v-model="rsvpForm.name" name="Name" />
            </ElFormItem>
            <ElFormItem :label="$t('rsvp.guest-attendance')" prop="isAttending">
              <ElRadioGroup
                v-model="rsvpForm.isAttending"
                name="Attendance"
                @change="resetForm()"
              >
                <ElRadio :label="true">{{ $t("common.yes") }}</ElRadio>
                <ElRadio :label="false">{{ $t("common.no") }}</ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElCollapseTransition>
              <div v-show="rsvpForm.isAttending">
                <div class="right">
                  <button
                    class="link"
                    @click.prevent="openDrawer = !openDrawer"
                  >
                    {{ $t("common.see-menu") }}
                  </button>
                </div>
                <ElFormItem
                  :label="$t('rsvp.guest-appetizer')"
                  prop="appetizer"
                >
                  <ElRadioGroup v-model="rsvpForm.appetizer" name="Appetizer">
                    <ElRadio label="Meat">{{ $t("rsvp.meat") }}</ElRadio>
                    <ElRadio label="Vegan">{{ $t("rsvp.vegan") }}</ElRadio>
                  </ElRadioGroup>
                </ElFormItem>
                <ElFormItem
                  :label="$t('rsvp.guest-main-course')"
                  prop="mainCourse"
                >
                  <ElRadioGroup
                    v-model="rsvpForm.mainCourse"
                    name="Main course"
                  >
                    <ElRadio label="Meat">{{ $t("rsvp.meat") }}</ElRadio>
                    <ElRadio label="Vegan">{{ $t("rsvp.vegan") }}</ElRadio>
                  </ElRadioGroup>
                </ElFormItem>
                <ElFormItem
                  :label="$t('rsvp.guest-plus-one')"
                  prop="hasPlusOne"
                >
                  <ElRadioGroup
                    v-model="rsvpForm.hasPlusOne"
                    name="Has a guest"
                    @change="resetForm()"
                  >
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
                      <ElInput
                        v-model="rsvpForm.plusOneName"
                        name="Guest name"
                      />
                    </ElFormItem>
                    <div class="right">
                      <button
                        class="link"
                        @click.prevent="openDrawer = !openDrawer"
                      >
                        {{ $t("common.see-menu") }}
                      </button>
                    </div>
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
              <button type="submit" class="button">
                {{ $t("rsvp.send") }}
              </button>
            </ElFormItem>
          </ElForm>
        </ElCol>
      </ElRow>
    </div>
  </div>
  <ElDrawer
    v-model="openDrawer"
    modal-class="menu"
    :append-to-body="true"
    :lock-scroll="true"
    :size="isMobile ? '90%' : '40%'"
  >
    <ContentDoc :path="localePath('/dinner-menu')" />
  </ElDrawer>
</template>

<style lang="scss">
.flower-container {
  padding: 30px;
  margin-top: 24px;
  background-image: url("../assets/img/flower-pattern.png");
  border-radius: 4px;
  background-color: white;
}

.form-container {
  padding: 24px;
  background-color: white;
  border: 1px dotted $primary-light-color;
}

// .container {
//   @media only screen and (min-width: 640px) {
//     min-width: 560px;
//   }
// }

.menu {
  text-align: center;

  header {
    margin-bottom: 0;
  }

  img {
    max-width: 180px;
    max-height: 100px;
    margin-bottom: 15px;
  }

  em {
    color: $primary-light-color;
  }
}
</style>
