import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
   title: "shared/Text",
   component: Text,

   tags: ["autodocs"],
   argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   args: {
      title: "Text",
      text: "Description Description Description",
   },
};

export const onlyTitle: Story = {
   args: {
      title: "Text",
   },
};

export const onlyText: Story = {
   args: {
      text: "Description Description Description",
   },
};

export const PrimaryDark: Story = {
   args: {
      title: "Text",
      text: "Description Description Description",
   },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark: Story = {
   args: {
      title: "Text",
   },
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark: Story = {
   args: {
      text: "Description Description Description",
   },
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
   args: {
      title: "Text",
      text: "Description Description Description",
      theme: TextTheme.ERROR,
   },
};
