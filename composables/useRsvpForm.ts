import { FormInstance, FormRules } from "element-plus";

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
}

const useRsvpForm = (): UseRsvpForm => {
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
    name: [],
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
  };

  return { rsvpForm, rsvpFormRules, submitRsvpForm };
};

export default useRsvpForm;
