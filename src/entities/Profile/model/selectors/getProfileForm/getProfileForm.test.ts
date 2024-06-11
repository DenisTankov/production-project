import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

describe("getProfileForm.test", () => {
   test("should return data", () => {
      const data = {
         username: "admin",
         age: 34,
         country: Country.Kazakhstan,
         lastname: "Tankov",
         first: "Denis",
         city: "Novosibirsk",
         currency: Currency.USD,
      };

      const state: DeepPartial<StateSchema> = {
         profile: {
            form: data,
         },
      };
      expect(getProfileForm(state as StateSchema)).toEqual(data);
   });

   test("should work with empty state", () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileForm(state as StateSchema)).toEqual(undefined);
   });
});
