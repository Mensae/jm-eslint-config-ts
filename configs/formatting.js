/**
 * @file ESLint configuration only concerned with formatting.
 * @author Johan Meester
 * @see LICENSE file in root directory for full license.
 */

/* eslint-env node */

const OFF = 'off';
// const WARN = 'warn';
const ERROR = 'error';

module.exports = Object.freeze({
  plugins: ['@typescript-eslint', 'sort-class-members'],

  reportUnusedDisableDirectives: true,

  rules: Object.freeze({
    // #region PLUGINS

    // #region @typescript-eslint

    /*
     * Require a specific member delimiter style for interfaces and type literals.
     * https://typescript-eslint.io/rules/member-delimiter-style
     */
    '@typescript-eslint/member-delimiter-style': OFF,

    /*
     * Require a consistent member declaration order.
     * https://typescript-eslint.io/rules/member-ordering
     */
    '@typescript-eslint/member-ordering': ERROR,

    /*
     * Enforce using a particular method signature syntax.
     * https://typescript-eslint.io/rules/method-signature-style
     */
    '@typescript-eslint/method-signature-style': OFF,

    /*
     * Enforce naming conventions for everything across a codebase.
     * https://typescript-eslint.io/rules/naming-convention
     */
    '@typescript-eslint/naming-convention': [
      OFF,
      {
        selector: 'default',
        format: ['strictCamelCase'],
      },
      {
        selector: 'function',
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: ['typeLike', 'enumMember'],
        format: ['StrictPascalCase'],
      },
      {
        selector: ['variable', 'parameter', 'property', 'accessor'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'are', 'can', 'should', 'did', 'will'],
      },
    ],

    /*
     * Enforce constituents of a type union/intersection to be sorted
     * alphabetically.
     * https://typescript-eslint.io/rules/sort-type-constituents
     */
    '@typescript-eslint/sort-type-constituents': ERROR,

    /*
     * Enforce members of a type union/intersection to be sorted alphabetically.
     * https://typescript-eslint.io/rules/sort-type-union-intersection-members
     */
    '@typescript-eslint/sort-type-union-intersection-members': ERROR,

    /*
     * Require consistent spacing around type annotations.
     * https://typescript-eslint.io/rules/type-annotation-spacing
     */
    '@typescript-eslint/type-annotation-spacing': OFF,

    // #region @endtypescript-eslint

    // #region @typescript-eslint->Extension Rules

    /*
     * Disallow or enforce spaces inside of blocks after opening block and
     * before closing block.
     * https://typescript-eslint.io/rules/block-spacing
     */
    '@typescript-eslint/block-spacing': OFF,

    /*
     * Enforce consistent brace style for blocks.
     * https://typescript-eslint.io/rules/brace-style
     *
     */
    '@typescript-eslint/brace-style': OFF,

    /*
     * Require or disallow trailing commas.
     * https://typescript-eslint.io/rules/comma-dangle
     */
    '@typescript-eslint/comma-dangle': OFF,

    /*
     * Enforce consistent spacing before and after commas.
     * https://typescript-eslint.io/rules/comma-spacing
     */
    '@typescript-eslint/comma-spacing': OFF,

    /*
     * Require or disallow spacing between function identifiers and their
     * invocations.
     * https://typescript-eslint.io/rules/func-call-spacing
     */
    '@typescript-eslint/func-call-spacing': OFF,

    /*
     * Enforce consistent indentation.
     * https://typescript-eslint.io/rules/indent
     */
    '@typescript-eslint/indent': OFF,

    /*
     * Enforce consistent spacing between property names and type annotations in
     * types and interfaces.
     * https://typescript-eslint.io/rules/key-spacing
     *
     */
    '@typescript-eslint/key-spacing': OFF,

    /*
     * Enforce consistent spacing before and after keywords.
     * https://typescript-eslint.io/rules/keyword-spacing
     */
    '@typescript-eslint/keyword-spacing': OFF,

    /*
     * Require empty lines around comments.
     * https://typescript-eslint.io/rules/lines-around-comment
     */
    'lines-around-comment': OFF,

    /*
     * Require empty lines around comments
     * https://typescript-eslint.io/rules/lines-around-comment
     * Type:
     */
    '@typescript-eslint/lines-around-comment': [
      ERROR,
      {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: true,
        afterLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],

    /*
     * Require or disallow an empty line between class members.
     * https://typescript-eslint.io/rules/lines-between-class-members
     */
    '@typescript-eslint/lines-between-class-members': ERROR,

    /*
     * Disallow unnecessary parentheses.
     * https://typescript-eslint.io/rules/no-extra-parens
     */
    '@typescript-eslint/no-extra-parens': ERROR,

    /*
     * Disallow unnecessary semicolons.
     * https://typescript-eslint.io/rules/no-extra-semi
     * Recommended
     */
    '@typescript-eslint/no-extra-semi': OFF,

    /*
     * Enforce consistent spacing inside braces.
     * https://typescript-eslint.io/rules/object-curly-spacing
     */
    '@typescript-eslint/object-curly-spacing': OFF,

    /*
     * Require or disallow padding lines between statements.
     * https://typescript-eslint.io/rules/padding-line-between-statements
     */
    '@typescript-eslint/padding-line-between-statements': OFF,

    /*
     * Enforce the consistent use of either backticks, double, or single quotes.
     * https://typescript-eslint.io/rules/quotes
     */
    '@typescript-eslint/quotes': [
      OFF,
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],

    /*
     * Require or disallow semicolons instead of ASI.
     * https://typescript-eslint.io/rules/semi
     */
    '@typescript-eslint/semi': OFF,

    /*
     * Enforce consistent spacing before blocks.
     * https://typescript-eslint.io/rules/space-before-blocks
     */
    '@typescript-eslint/space-before-blocks': OFF,

    /*
     * Enforce consistent spacing before function parenthesis.
     * https://typescript-eslint.io/rules/space-before-function-paren
     */
    '@typescript-eslint/space-before-function-paren': OFF,

    /*
     * Require spacing around infix operators.
     * https://typescript-eslint.io/rules/space-infix-ops
     */
    '@typescript-eslint/space-infix-ops': OFF,

    // #endregion @typescript-eslint->Extension Rules

    // #region sort-class-members

    /*
     * Enforce consistent members order.
     * https://github.com/bryanrsmith/eslint-plugin-sort-class-members
     */
    'sort-class-members/sort-class-members': [
      ERROR,
      {
        accessorPairPositioning: 'getThenSet',
        groups: {
          'static-arrow-function-properties': [
            {
              static: true,
              propertyType: 'ArrowFunctionExpression',
            },
          ],
          'static-async-methods': [
            {
              static: true,
              type: 'method',
              async: true,
            },
          ],
          'static-accessor-pairs': [{ static: true, accessorPair: true }],
          'static-getters': [{ static: true, kind: 'get' }],
          'static-setters': [{ static: true, kind: 'set' }],
          'static-conventional-private-properties': [
            {
              static: true,
              type: 'property',
              name: '/_.+/',
            },
          ],
          'static-conventional-private-methods': [
            {
              static: true,
              type: 'method',
              name: '/_.+/',
            },
          ],
          'static-async-conventional-private-methods': [
            {
              static: true,
              type: 'method',
              name: '/_.+/',
              async: true,
            },
          ],
          'async-conventional-private-methods': [
            {
              type: 'method',
              name: '/_.+/',
              async: true,
            },
          ],
        },
        order: [
          '[static-properties]',
          '[static-arrow-function-properties]',
          '[static-accessor-pairs]',
          '[static-getters]',
          '[static-setters]',
          '[static-methods]',
          '[static-async-methods]',
          '[properties]',
          '[arrow-function-properties]',
          'constructor',
          '[accessor-pairs]',
          '[getters]',
          '[setters]',
          '[methods]',
          '[async-methods]',
          '[static-conventional-private-properties]',
          '[static-conventional-private-methods]',
          '[static-async-conventional-private-methods]',
          '[conventional-private-properties]',
          '[conventional-private-methods]',
          '[async-conventional-private-methods]',
        ],
      },
    ],

    // #endregion sort-class-members

    // #endregion PLUGINS
  }),
});
