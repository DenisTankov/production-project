import { StateSchema } from "app/providers/StoreProvider";
import { getAddCommentFormText, getAddCommentFormError } from "./addCommentFormSelectors";

describe("addCommentFormSelectors.test", () => {
   test("should return text", () => {
      const state: DeepPartial<StateSchema> = {
         addCommentForm: {
            text: "comment",
         },
      };
      expect(getAddCommentFormText(state as StateSchema)).toEqual("comment");
   });
});

describe("getAddCommentFormError.test", () => {
   test("should return error", () => {
      const state: DeepPartial<StateSchema> = {
         addCommentForm: {
            error: "error",
         },
      };
      expect(getAddCommentFormError(state as StateSchema)).toEqual("error");
   });
});
