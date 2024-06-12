import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import avatar from "shared/assets/tests/storybook.jpg";

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
            country: Country.Russia,
            lastname: "Tankov",
            first: "Denis",
            city: "Novosibirsk",
            currency: Currency.RUB,
            avatar,
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
            country: Country.Russia,
            lastname: "Tankov",
            first: "Denis",
            city: "Novosibirsk",
            currency: Currency.RUB,
            avatar,
         },
      },
   }),
];
