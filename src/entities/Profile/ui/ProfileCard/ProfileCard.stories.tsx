import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "entities/Profile";
// import avatar from "shared/assets/tests/storybook.jpg";

export default {
   title: "entities/ProfileCard",
   component: ProfileCard,
   argTypes: {
      backgroundColor: { control: "color" },
   },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   readonly: true,
   data: {
      username: "admin",
      age: 34,
      country: Country.Russia,
      lastname: "Tankov",
      first: "Denis",
      city: "Novosibirsk",
      currency: Currency.RUB,
      avatar:
         "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
   },
};

export const withError = Template.bind({});
withError.args = {
   error: "true",
};

export const Loading = Template.bind({});
Loading.args = {
   isLoading: true,
};
