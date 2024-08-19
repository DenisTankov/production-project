import { addCommentFormSchema } from "../types/addCommentForm";
import { addCommentFormActions, addCommentFormReducer } from "./addCommentFormSlice";

describe("addCommentFormSlice.test", () => {
   test("test set text", () => {
      const state: DeepPartial<addCommentFormSchema> = { text: "123" };
      expect(
         addCommentFormReducer(state as addCommentFormSchema, addCommentFormActions.setText("123"))
      ).toEqual({
         text: "123",
      });
   });
});
