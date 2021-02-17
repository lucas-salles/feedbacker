import { reactive, readonly } from "vue";

export type StoreState = {
  currentComponent: string;
  message: string;
  feedbackType: string;
  fingerprint: string;
  apiKey: string;
  currentPage: string;
};

const intialState: StoreState = {
  currentComponent: "SelectFeedbackType",
  message: "",
  feedbackType: "",
  fingerprint: "",
  apiKey: "",
  currentPage: "",
};

const state = reactive<StoreState>({ ...intialState });

export function setCurrentComponent(component: string): void {
  state.currentComponent = component;
}

export function setMessage(message: string): void {
  state.message = message;
}

export function setFeedbackType(type: string): void {
  state.feedbackType = type;
}

export function setFingerprint(fingerprint: string): void {
  state.fingerprint = fingerprint;
}

export function setApiKey(apiKey: string): void {
  state.apiKey = apiKey;
}

export function setCurrentPage(page: string): void {
  state.currentPage = page;
}

export function resetStore(): void {
  setCurrentComponent(intialState.currentComponent);
  setMessage(intialState.message);
  setFeedbackType(intialState.feedbackType);
  setFingerprint(intialState.fingerprint);
  setApiKey(intialState.apiKey);
  setCurrentPage(intialState.currentPage);
}

export default readonly(state);
