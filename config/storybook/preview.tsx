import React from "react";
import "app/styles/index.scss";

import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";

import { Theme } from "../../src/app/providers/ThemeProvider";

const preview: Preview = {
   parameters: {
      actions: { argTypesRegex: "^on[A-Z].*" },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
   decorators: [
      (Story) => (
         <StyleDecorator>
            <Story />
         </StyleDecorator>
      ),
      (Story) => ThemeDecorator(Theme.LIGHT)(Story),
      (Story) => (
         <RouterDecorator>
            <Story />
         </RouterDecorator>
      ),
   ],
};

export default preview;
