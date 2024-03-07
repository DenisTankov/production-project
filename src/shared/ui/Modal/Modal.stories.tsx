import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "shared/ui/Modal/Modal";

const meta = {
   title: "shared/Modal",
   component: Modal,
   argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   args: {
      isOpen: true,
      children: "dfjdfk",
   },
};

export const Dark: Story = {
   args: {
      isOpen: true,
      children: "dfjdfk",
   },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
