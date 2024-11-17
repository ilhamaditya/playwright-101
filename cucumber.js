const common = [
  "./features/app1/**/*.feature",  // Correct path to feature files
  "--require ./steps/app1/**/*.js",  // Correct path to step definitions
  "--require ./utility/TestHooks.js",
  "--format json:./allure-results/results.json",  // Generate Allure-compatible results
].join(" ");

module.exports = {
  default: common,
};
