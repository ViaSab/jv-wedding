import { FormInstance, FormRules } from "element-plus";

interface RsvpForm {
  name: string;
  isAttending: boolean | undefined;
  hasPlusOne: boolean | undefined;
  appetizer: string;
  mainCourse: string;
  plusOneName: string;
  plusOneAppetizer: string;
  plusOneMainCourse: string;
  songs: string;
}

interface UseRsvpForm {
  rsvpForm: RsvpForm;
  rsvpFormRules: ComputedRef<FormRules>;
  submitRsvpForm: (formEl: FormInstance | undefined) => Promise<void>;
  showForm: Ref<boolean>;
}

const useRsvpForm = (): UseRsvpForm => {
  const { t } = useI18n();
  const showForm = ref<boolean>(true);

  const rsvpForm = reactive<RsvpForm>({
    name: "",
    isAttending: undefined,
    hasPlusOne: undefined,
    appetizer: "",
    mainCourse: "",
    plusOneName: "",
    plusOneAppetizer: "",
    plusOneMainCourse: "",
    songs: "",
  });

  const rsvpFormRules = computed<FormRules<RsvpForm>>(() => ({
    name: [
      {
        required: true,
        message: t("form.validation.name"),
        trigger: "blur",
      },
    ],
    isAttending: [
      {
        required: true,
        message: t("form.validation.option"),
        trigger: "change",
      },
    ],
    appetizer: [
      {
        required: rsvpForm.isAttending,
        message: t("form.validation.option"),
        trigger: "change",
      },
    ],
    mainCourse: [
      {
        required: rsvpForm.isAttending,
        message: t("form.validation.option"),
        trigger: "change",
      },
    ],
    hasPlusOne: [
      {
        required: rsvpForm.isAttending,
        message: t("form.validation.option"),
        trigger: "change",
      },
    ],
    plusOneName: [
      {
        required: rsvpForm.isAttending && rsvpForm.hasPlusOne,
        message: t("form.validation.guest-name"),
        trigger: "blur",
      },
    ],
    plusOneAppetizer: [
      {
        required: rsvpForm.isAttending && rsvpForm.hasPlusOne,
        message: t("form.validation.option"),
        trigger: "change",
      },
    ],
    plusOneMainCourse: [
      {
        required: rsvpForm.isAttending && rsvpForm.hasPlusOne,
        message: t("form.validation.option"),
        trigger: "change",
      },
    ],
  }));

  const submitRsvpForm = async (
    formEl: FormInstance | undefined
  ): Promise<void> => {
    if (!formEl) return;
    await formEl.validate((valid) => {
      if (valid) {
        console.log("submit");
        formEl.$el.submit();
        showForm.value = false;
      }
    });
  };

  return { rsvpForm, rsvpFormRules, submitRsvpForm, showForm };
};

export default useRsvpForm;
