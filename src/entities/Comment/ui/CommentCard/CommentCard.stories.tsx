import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CommentCard } from "./CommentCard";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
   title: "entities/Comment/CommentCard",
   component: CommentCard,
   argTypes: {
      backgroundColor: { control: "color" },
   },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   comment: {
      id: "1",
      text: "hello world",
      user: { id: "1", username: "Vasya" },
   },
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
   comment: {
      id: "1",
      text: "hello world",
      user: { id: "1", username: "Vasya" },
   },
   isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
