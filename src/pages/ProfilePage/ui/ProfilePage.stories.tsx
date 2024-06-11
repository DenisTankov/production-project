import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const meta = {
   title: "pages/ProfilePage",
   component: ProfilePage,

   tags: ["autodocs"],
   args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
   args: {},
};
Normal.decorators = [
   StoreDecorator({
      profile: {
         form: {
            username: "admin",
            age: 34,
            country: Country.Kazakhstan,
            lastname: "Tankov",
            first: "Denis",
            city: "Novosibirsk",
            currency: Currency.USD,
         },
      },
   }),
];

export const Dark: Story = {
   args: {},
};
Dark.decorators = [
   ThemeDecorator(Theme.DARK),
   StoreDecorator({
      profile: {
         form: {
            username: "admin",
            age: 34,
            country: Country.Kazakhstan,
            lastname: "Tankov",
            first: "Denis",
            city: "Novosibirsk",
            currency: Currency.USD,
         },
      },
   }),
];
