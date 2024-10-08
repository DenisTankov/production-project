import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
   stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
   addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      // "@storybook/addon-onboarding",
      "@storybook/addon-interactions",
   ],
   framework: {
      name: "@storybook/react-webpack5",
      options: {
         builder: {
            useSWC: true,
         },
      },
   },
   docs: {
      autodocs: "tag",
   },
   swc: (config, options) => ({
      jsc: {
         transform: {
            react: {
               runtime: "automatic",
            },
         },
      },
   }),
   // staticDirs: ["../../public"],
};
export default config;
