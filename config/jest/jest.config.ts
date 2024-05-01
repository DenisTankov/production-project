import path from "path";

export default {
   globals: { __IS_DEV__: true, __API__: "" },
   clearMocks: true,
   testEnvironment: "jsdom",
   coverageProvider: "v8",
   coveragePathIgnorePatterns: ["/node_modules/"],
   moduleDirectories: ["node_modules", "src"],
   modulePaths: ["<rootDir>src"],

   moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
   rootDir: "../../",
   setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
   moduleNameMapper: {
      "\\.s?css$": "identity-obj-proxy",
      "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
   },
   testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
   preset: "ts-jest",
   transform: {
      "^.+\\.ts?$": "ts-jest",
   },
};
