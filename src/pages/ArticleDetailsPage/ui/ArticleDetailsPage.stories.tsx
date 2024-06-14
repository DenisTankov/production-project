import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticleDetaisPage from "./ArticleDetailsPage";

export default {
   title: "shared/ArticleDetaisPage",
   component: ArticleDetaisPage,
   argTypes: {
      backgroundColor: { control: "color" },
   },
} as ComponentMeta<typeof ArticleDetaisPage>;

const Template: ComponentStory<typeof ArticleDetaisPage> = (args) => (
   <ArticleDetaisPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
