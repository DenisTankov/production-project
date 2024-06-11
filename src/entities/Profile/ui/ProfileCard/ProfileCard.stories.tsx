import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ProfileCard } from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.jpg";

const meta = {
   title: "entities/ProfileCard",
   component: ProfileCard,

   tags: ["autodocs"],
   argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   args: {
      data: {
         username: "admin",
         age: 34,
         country: Country.Kazakhstan,
         lastname: "Tankov",
         first: "Denis",
         city: "Novosibirsk",
         currency: Currency.USD,
         avatar,
      },
   },
};

export const isLoading: Story = {
   args: {
      isLoading: true,
   },
};

export const withError: Story = {
   args: {
      error: "true",
   },
};

// Primary.decorators = [
//    StoreDecorator({
//       loginForm: {
//          username: "bob",
//          password: "123",
//       },
//    }),
// ];
