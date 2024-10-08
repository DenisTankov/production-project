import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Listbox } from "./ListBox";

export default {
   title: "shared/ListBox",
   component: Listbox,
   argTypes: {
      backgroundColor: { control: "color" },
   },
   decorators: [
      (Story) => (
         <div style={{ padding: 100 }}>
            <Story />
         </div>
      ),
   ],
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   value: "123",
   items: [
      { content: " content1", value: "1" },
      { content: " content2", value: "2" },
      { content: " content3", value: "3" },
   ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
   direction: "top left",
   value: "123",

   items: [
      { content: " content1", value: "1" },
      { content: " content2", value: "2" },
      { content: " content3", value: "3" },
   ],
};

export const TopRight = Template.bind({});
TopRight.args = {
   direction: "top right",
   value: "123",

   items: [
      { content: " content1", value: "1" },
      { content: " content2", value: "2" },
      { content: " content3", value: "3" },
   ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
   direction: "bottom left",
   value: "123",

   items: [
      { content: " content1", value: "1" },
      { content: " content2", value: "2" },
      { content: " content3", value: "3" },
   ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
   direction: "bottom right",
   value: "123",
   items: [
      { content: " content1", value: "1" },
      { content: " content2", value: "2" },
      { content: " content3", value: "3" },
   ],
};
