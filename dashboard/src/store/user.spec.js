import useStore from "../hooks/useStore";
import {
  setCurrentUser,
  resetUserStore,
  setApiKey,
  cleanCurrentUser,
} from "./user";

describe("UserStore", () => {
  afterEach(() => {
    resetUserStore();
  });

  it("should set current user", () => {
    const store = useStore();
    setCurrentUser({ name: "Test" });
    expect(store.User.currentUser.name).toBe("Test");
  });

  it("should set api_key on current user", () => {
    const store = useStore();
    setApiKey("123");
    expect(store.User.currentUser.apiKey).toBe("123");
  });

  it("should clean current user", () => {
    const store = useStore();
    setCurrentUser({ name: "Test" });
    expect(store.User.currentUser.name).toBe("Test");
    cleanCurrentUser();

    expect(store.User.currentUser.name).toBeFalsy();
  });
});
