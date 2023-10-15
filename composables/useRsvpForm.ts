import { FormInstance, FormRules } from "element-plus";
const { t } = useI18n();

interface RsvpForm {
  name: string;
  isAttending: boolean;
  hasPlusOne: boolean;
  appetizer: string;
  mainCourse: string;
  plusOneName: string;
  plusOneAppetizer: string;
  plusOneMainCourse: string;
  songs: string;
}

interface UseRsvpForm {
  rsvpForm: RsvpForm;
  rsvpFormRules: FormRules;
  submitRsvpForm: (formEl: FormInstance | undefined) => Promise<void>;
  showForm: Ref<boolean>;
}

const useRsvpForm = (): UseRsvpForm => {
  const showForm = ref<boolean>(true);

  const rsvpForm = reactive<RsvpForm>({
    name: "",
    isAttending: true,
    hasPlusOne: true,
    appetizer: "",
    mainCourse: "",
    plusOneName: "",
    plusOneAppetizer: "",
    plusOneMainCourse: "",
    songs: "",
  });

  const rsvpFormRules = reactive<FormRules>({
    name: [
      {
        required: true,
        message: "Please input Activity name",
        trigger: "blur",
      },
    ],
    songs: [],
  });

  const submitRsvpForm = async (
    formEl: FormInstance | undefined
  ): Promise<void> => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log("submit!");
        //formEl.submit()
      } else {
        console.log("error submit!", fields);
      }
    });
    showForm.value = false;
  };

  return { rsvpForm, rsvpFormRules, submitRsvpForm, showForm };
};

export default useRsvpForm;
