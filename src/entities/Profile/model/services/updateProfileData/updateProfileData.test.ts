import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ValidateProfileError } from "../../types/profile";
import { updateProfileData } from "./updateProfileData";

const data = {
   username: "admin",
   age: 34,
   country: Country.Kazakhstan,
   lastname: "Tankov",
   first: "Denis",
   city: "Novosibirsk",
   currency: Currency.USD,
};

describe("updateProfileData.test", () => {
   test("success", async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
         profile: {
            form: data,
            isLoading: true,
            readonly: true,
         },
      });
      thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
      const result = await thunk.callThunk();

      expect(thunk.api.put).toHaveBeenCalled();
      expect(result.meta.requestStatus).toBe("fulfilled");
      expect(result.payload).toEqual(data);
   });

   test("error", async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
         profile: {
            form: data,
            isLoading: true,
            readonly: true,
         },
      });
      thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
      const result = await thunk.callThunk();

      expect(result.meta.requestStatus).toBe("rejected");
      expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
   });

   test("validate error", async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
         profile: {
            form: { ...data, lastname: "" },
            isLoading: true,
            readonly: true,
         },
      });
      const result = await thunk.callThunk();

      expect(result.meta.requestStatus).toBe("rejected");
      expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
   });
});
