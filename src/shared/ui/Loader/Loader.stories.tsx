import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
   title: "shared/Loader",
   component: Loader,

   tags: ["autodocs"],
   args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
   args: {},
};

export const Dark: Story = {
   args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
