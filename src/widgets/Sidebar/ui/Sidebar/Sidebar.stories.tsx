import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
// ThemeButton
const meta = {
   title: "widget/Sidebar",
   component: Sidebar,

   tags: ["autodocs"],
   argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
   args: {},
};

export const Dark: Story = {
   args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
