export const config: CodeceptJS.MainConfig = {
  name: "codeceptjs-pnpm-ts",
  tests: "./specs/*.spec.ts",
  output: "./output",
  plugins: {
    allure: {
      resultsDir: "./allure-results",
      require: "allure-codeceptjs",
    },
  },
};
