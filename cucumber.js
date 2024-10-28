const common = [
  "./features/**/*.feature",
  "--require ./steps/**/*.js",
  "--require ./utility/TestHooks.js",
  "--format json:./allure-results/results.json",
].join(" ");

module.exports = {
  default: common,
};
