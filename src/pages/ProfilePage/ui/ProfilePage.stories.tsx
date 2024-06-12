import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import ProfilePage from "./ProfilePage";

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
            avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
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
            avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
         },
      },
   }),
];
