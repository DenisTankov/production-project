import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
// import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
// import { Theme } from "app/providers/ThemeProvider";

const meta = {
   title: "shared/Input",
   component: Input,

   tags: ["autodocs"],
   argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   args: {
      placeholder: "type text",
      value: "123123",
   },
};
