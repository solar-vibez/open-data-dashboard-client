/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: ['apply', 'responsive', 'screen', 'tailwind', 'variants'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'screen', 'plugin', 'theme', 'custom-variant'],
      },
    ],
    'declaration-property-value-no-unknown': [
      true,
      {
        propertiesSyntax: {
          background: '| <theme()>',
          'background-color': '| <theme()>',
          border: '| <theme()>',
          'border-color': '| <theme()>',
          color: '| <theme()>',
          fill: '| <theme()>',
        },
        typesSyntax: {
          'theme()': 'theme( <string> )',
        },
      },
    ],
    'import-notation': 'string',
    'no-descending-specificity': null,
  },
};
