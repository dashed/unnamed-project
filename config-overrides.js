// https://github.com/timarney/react-app-rewired

// node imports

const path = require('path');

// 3rd-party imports

const { injectBabelPlugin, getBabelLoader } = require('react-app-rewired');

// helpers

const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1;

const fileLoaderMatcher = createLoaderMatcher('file-loader');

const ruleChildren = loader => loader.use || loader.oneOf || (Array.isArray(loader.loader) && loader.loader) || [];

const findIndexAndRules = (rulesSource, ruleMatcher) => {
  let result = undefined;
  const rules = Array.isArray(rulesSource) ? rulesSource : ruleChildren(rulesSource);
  rules.some(
    (rule, index) =>
      (result = ruleMatcher(rule)
        ? {
            index,
            rules
          }
        : findIndexAndRules(ruleChildren(rule), ruleMatcher))
  );
  return result;
};

const addBeforeRule = (rulesSource, ruleMatcher, value) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);
  rules.splice(index, 0, value);
};

// overrides

module.exports = function override(config, env) {
  // https://github.com/tleunen/babel-plugin-module-resolver

  config = injectBabelPlugin(
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~': './src'
        }
      }
    ],
    config
  );

  // https://github.com/mdx-js/mdx

  {
    const babel_loader = getBabelLoader(config.module.rules);

    const mdxLoader = {
      test: /\.mdx$/,
      use: [
        {
          loader: babel_loader.loader,
          options: babel_loader.options
        },
        {
          loader: require.resolve('@mdx-js/loader')
        }
      ]
    };

    addBeforeRule(config.module.rules, fileLoaderMatcher, mdxLoader);
  }

  return config;
};
