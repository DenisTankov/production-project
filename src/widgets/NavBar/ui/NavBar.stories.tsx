import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta = {
   title: "widget/Navbar",
   component: NavBar,

   tags: ["autodocs"],
   argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
   args: {},
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
   args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar: Story = {
   args: {},
};
AuthNavbar.decorators = [StoreDecorator({ user: { authData: {} } })];
