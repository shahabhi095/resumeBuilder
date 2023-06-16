import { EDUCATION_DETAILS_INFO, EXPERIENCE_DETAILS_INFO, HEADING_CONTACT_INFO, SKILLS_DETAILS_INFO, SUMMARY_DETAILS_INFO } from "./action.type";

export const headingAction = (value) => ({
  type: HEADING_CONTACT_INFO,
  payload: value,
});

export const educationAction = (value) => ({
  type: EDUCATION_DETAILS_INFO,
  payload: value,
});

export const experienceAction = (value) => ({
  type: EXPERIENCE_DETAILS_INFO,
  payload: value,
});

export const skillsAction = (value) => ({
  type: SKILLS_DETAILS_INFO,
  payload: value,
});

export const summaryAction = (value) => ({
  type: SUMMARY_DETAILS_INFO,
  payload: value,
});
