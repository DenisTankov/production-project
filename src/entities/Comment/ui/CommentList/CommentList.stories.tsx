import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CommentList } from "./CommentList";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
   title: "entities/Comment/CommentList",
   component: CommentList,
   argTypes: {
      backgroundColor: { control: "color" },
   },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   comments: [
      {
         id: "1",
         text: "hello world",
         user: { id: "1", username: "Vasya" },
      },
      {
         id: "2",
         text: "Comment 2",
         user: { id: "1", username: "Petya" },
      },
   ],
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
   comments: [],
   isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
