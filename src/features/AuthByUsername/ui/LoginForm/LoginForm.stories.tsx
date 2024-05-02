import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import LoginForm from "./LoginForm";

const meta = {
   title: "features/LoginForm",
   component: LoginForm,

   tags: ["autodocs"],
   argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   args: {},
};
Primary.decorators = [
   StoreDecorator({
      loginForm: {
         username: "bob",
         password: "123",
      },
   }),
];

export const withError: Story = {
   args: {},
};
withError.decorators = [
   StoreDecorator({
      loginForm: {
         username: "bob",
         password: "123",
         error: "ERROR",
      },
   }),
];

export const isLoading: Story = {
   args: {},
};
isLoading.decorators = [
   StoreDecorator({
      loginForm: {
         isLoading: true,
      },
   }),
];
