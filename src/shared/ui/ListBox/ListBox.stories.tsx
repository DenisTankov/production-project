import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Listbox } from "./ListBox";

export default {
   title: "shared/ListBox",
   component: Listbox,
   argTypes: {
      backgroundColor: { control: "color" },
   },
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
