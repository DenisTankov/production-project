import type { Meta, StoryObj } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "entities/Profile";
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
         avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
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
