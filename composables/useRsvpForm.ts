import { type FormRules } from "element-plus";

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
  resetForm: () => void;
}

const useRsvpForm = (): UseRsvpForm => {
  const { t } = useI18n();

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

  const resetPlusOne = (): void => {
    rsvpForm.plusOneName = "";
    rsvpForm.plusOneAppetizer = "";
    rsvpForm.plusOneMainCourse = "";
  };

  const resetGuest = (): void => {
    rsvpForm.appetizer = "";
    rsvpForm.mainCourse = "";
  };

  const resetForm = (): void => {
    if (!rsvpForm.hasPlusOne) {
      resetPlusOne();
    }
    if (!rsvpForm.isAttending) {
      resetGuest();
      resetPlusOne();
    }
  };

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

  return { rsvpForm, rsvpFormRules, resetForm };
};

export default useRsvpForm;
