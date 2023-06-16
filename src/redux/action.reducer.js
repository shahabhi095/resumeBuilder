import { eduInitialState } from "../components/EducationForm";
import { expInitialState } from "../components/ExperienceForm";
import { contactInitialState } from "../components/HeadingForm";
import { EDUCATION_DETAILS_INFO, EXPERIENCE_DETAILS_INFO, HEADING_CONTACT_INFO, SKILLS_DETAILS_INFO, SUMMARY_DETAILS_INFO } from "./action.type"

const InitialState={
    Contact:contactInitialState,
    Education:eduInitialState,
    Experience:expInitialState,
    Skills:[],
    Summary:""
}

export const reducer =(state=InitialState, action)=>{
    const{type, payload} = action
    switch (type) {
      case HEADING_CONTACT_INFO: {
        return {
          ...state,
          Contact: payload,
        };
      }
      case EDUCATION_DETAILS_INFO: {
        return {
          ...state,
          Education: payload,
        };
      }
      case EXPERIENCE_DETAILS_INFO: {
        return {
          ...state,
          Experience: payload,
        };
      }
      case SKILLS_DETAILS_INFO: {
        return {
          ...state,
          Skills: payload,
        };
      }
      case SUMMARY_DETAILS_INFO: {
        return {
          ...state,
          Summary: payload,
        };
      }
      default: {
        return state;
      }
    }
}