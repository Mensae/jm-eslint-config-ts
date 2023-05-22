/**
 * @file ESLint configuration only concerned with problems and best practices.
 * @author Johan Meester
 * @see LICENSE file in root directory for full license.
 */

/* eslint-env node */

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = Object.freeze({
  ignorePatterns: ['*.d.ts'],

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts', '*.vue'],

      extends: ['plugin:import/typescript', '@jm/eslint-config-ts-for-js'],

      plugins: ['import', 'etc', 'total-functions'],

      rules: {
        // #region ESLint Core Rules

        /*
         * Require `super()` calls in constructors
         * https://eslint.org/docs/rules/constructor-super
         * Type: problem
         * Recommended: Yes
         */
        'constructor-super': 'off', // ts(2335) & ts(2377)

        /*
         * encourages use of dot notation whenever possible
         * https://eslint.org/docs/rules/dot-notation
         * Type: suggestion
         */
        'dot-notation': 'off',

        /*
         * Enforces that a return statement is present in property getters
         * https://eslint.org/docs/rules/getter-return
         * Type: problem
         * Recommended: Yes
         */
        'getter-return': 'off', // ts(2378)

        /*
         * Disallow `Array` constructors
         * https://eslint.org/docs/rules/no-array-constructor
         * Type: suggestion
         */
        'no-array-constructor': 'off',

        /*
         * Disallow modifying variables that are declared using `const`
         * https://eslint.org/docs/rules/no-const-assign
         * Type: problem
         * Recommended: Yes
         */
        'no-const-assign': 'off', // ts(2588)

        /*
         * Disallow duplicate arguments in functions
         * https://eslint.org/docs/rules/no-dupe-args
         * Type: problem
         * Recommended: Yes
         */
        'no-dupe-args': 'off', // ts(2300)

        /*
         * Disallow duplicate class members
         * https://eslint.org/docs/rules/no-dupe-class-members
         * Type: problem
         * Recommended: Yes
         */
        'no-dupe-class-members': 'off', // ts(2393) & ts(2300)

        /*
         * Disallow duplicate keys when creating object literals
         * https://eslint.org/docs/rules/no-dupe-keys
         * Type: problem
         * Recommended: Yes
         */
        'no-dupe-keys': 'off', // ts(1117)

        /*
         * Disallow empty functions
         * https://eslint.org/docs/rules/no-empty-function
         * Type: suggestion
         */
        'no-empty-function': 'off',

        /*
         * Disallow unnecessary semicolons
         * https://eslint.org/docs/rules/no-extra-semi
         * Type: suggestion
         * Recommended: Yes
         */
        'no-extra-semi': 'off',

        /*
         * Disallow overwriting functions written as function declarations
         * https://eslint.org/docs/rules/no-func-assign
         * Type: problem
         * Recommended: Yes
         */
        'no-func-assign': 'off', // ts(2539)

        /*
         * Disallow use of `eval()`-like methods
         * https://eslint.org/docs/rules/no-implied-eval
         * Type: suggestion
         */
        'no-implied-eval': 'off',

        /*
         * Disallow assigning to imported bindings
         * https://eslint.org/docs/rules/no-import-assign
         * Type: problem
         * Recommended: Yes
         */
        'no-import-assign': 'off', // ts(2539) & ts(2540)

        /*
         * Disallow number literals that lose precision
         * https://eslint.org/docs/rules/no-loss-of-precision
         * Type: problem
         * Recommended: Yes
         */
        'no-loss-of-precision': 'off',

        /*
         * Disallow symbol constructor
         * https://eslint.org/docs/rules/no-new-symbol
         * Type: problem
         * Recommended: Yes
         */
        'no-new-symbol': 'off', // ts(7009)

        /*
         * Disallow the use of object properties of the global object
         * (`Math` and `JSON`) as functions.
         * https://eslint.org/docs/rules/no-obj-calls
         * Type: problem
         * Recommended: Yes
         */
        'no-obj-calls': 'off', // ts(2349)

        /*
         * Disallow declaring the same variable more than once
         * https://eslint.org/docs/rules/no-redeclare
         * Type: suggestion
         * Recommended: Yes
         */
        'no-redeclare': 'off', // ts(2451)

        /*
         * Disallow returning values from setters
         * https://eslint.org/docs/rules/no-setter-return
         * Type: problem
         * Recommended: Yes
         */
        'no-setter-return': 'off', // ts(2408)

        /*
         * Disallow to use `this`/`super` before `super()` calling in constructors.
         * https://eslint.org/docs/rules/no-this-before-super
         * Type: problem
         * Recommended: Yes
         */
        'no-this-before-super': 'off', // ts(2376)

        /*
         * Restrict what can be thrown as an exception
         * https://eslint.org/docs/rules/no-throw-literal
         * Type: suggestion
         */
        'no-throw-literal': 'off',

        /*
         * Disallow the use of undeclared variables unless mentioned in `global`
         * comments.
         * https://eslint.org/docs/rules/no-undef
         * Type: problem
         * Recommended: Yes
         */
        'no-undef': 'off', // ts(2304)

        /*
         * Disallow unreachable statements after a return, throw, continue, or break statement
         * https://eslint.org/docs/rules/no-unreachable
         * Type: problem
         * Recommended: Yes
         */
        'no-unreachable': 'off', // ts(7027)

        /*
         * Disallow negating the left operand of relational operators
         * https://eslint.org/docs/rules/no-unsafe-negation
         * Type: problem
         * Recommended: Yes
         */
        'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)

        /*
         * Disallow unnecessary constructor
         * https://eslint.org/docs/rules/no-useless-constructor
         * Type: suggestion
         */
        'no-useless-constructor': 'off',

        /*
         * Disallow declaration of variables that are not used in the code
         * https://eslint.org/docs/rules/no-unused-vars
         * Type: problem
         * Recommended: Yes
         */
        'no-unused-vars': 'off',

        /*
         * Require `let` or `const` instead of `var`
         * https://eslint.org/docs/rules/no-var
         * Type: suggestion
         */
        'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more

        /*
         * Require `const` declarations for variables that are never reassigned
         * after declared.
         * https://eslint.org/docs/rules/prefer-const
         */
        'prefer-const': 'error', // ts provides better types with const

        /*
         * Require rest parameters instead of `arguments`
         * https://eslint.org/docs/rules/prefer-rest-params
         * Type: suggestion
         */
        'prefer-rest-params': 'error', // ts provides better types with rest args over arguments

        /*
         * Require spread operators instead of `.apply()`
         * https://eslint.org/docs/rules/prefer-spread
         * Type: suggestion
         */
        'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply

        /*
         * Disallow async functions which have no `await` expression
         * https://eslint.org/docs/rules/require-await
         * Type: suggestion
         */
        'require-await': 'off',

        /*
         * Enforce comparing `typeof` expressions against valid strings
         * https://eslint.org/docs/rules/valid-typeof
         * Type: problem
         * Recommended: Yes
         */
        'valid-typeof': 'off', // ts(2367)

        // #endregion ESLint Core Rules

        // #region @typescript-eslint/recommended

        /*
         * Require that function overload signatures be consecutive.
         * https://typescript-eslint.io/rules/adjacent-overload-signatures
         * Recommended
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',

        /*
         * Disallow `@ts-<directive>` comments or require descriptions after
         * directives.
         * https://typescript-eslint.io/rules/ban-ts-comment
         * Recommended
         */
        '@typescript-eslint/ban-ts-comment': 'error',

        /*
         * Disallow certain types.
         * https://typescript-eslint.io/rules/ban-types
         * Recommended
         */
        '@typescript-eslint/ban-types': 'error',

        /*
         * Disallow generic `Array` constructors.
         * https://typescript-eslint.io/rules/no-array-constructor
         * Recommended
         */
        '@typescript-eslint/no-array-constructor': 'error',

        /*
         * Disallow empty functions.
         * https://typescript-eslint.io/rules/no-empty-function
         * Recommended
         */
        '@typescript-eslint/no-empty-function': 'error',

        /*
         * Disallow the declaration of empty interfaces.
         * https://typescript-eslint.io/rules/no-empty-interface
         * Recommended
         */
        '@typescript-eslint/no-empty-interface': 'error',

        /*
         * Disallow the `any` type.
         * https://typescript-eslint.io/rules/no-explicit-any
         * Recommended
         */
        '@typescript-eslint/no-explicit-any': 'warn',

        /*
         * Disallow extra non-null assertions.
         * https://typescript-eslint.io/rules/no-extra-non-null-assertion
         * Recommended
         */
        '@typescript-eslint/no-extra-non-null-assertion': 'error',

        /*
         * Disallow unnecessary semicolons.
         * https://typescript-eslint.io/rules/no-extra-semi
         * Recommended
         */
        '@typescript-eslint/no-extra-semi': 'error',

        /*
         * Disallow explicit type declarations for variables or parameters
         * initialized to a number, string, or boolean.
         * https://typescript-eslint.io/rules/no-inferrable-types
         * Recommended
         */
        '@typescript-eslint/no-inferrable-types': 'error',

        /*
         * Disallow literal numbers that lose precision.
         * https://typescript-eslint.io/rules/no-loss-of-precision
         * Recommended
         */
        '@typescript-eslint/no-loss-of-precision': 'error',

        /*
         * Enforce valid definition of `new` and `constructor`.
         * https://typescript-eslint.io/rules/no-misused-new
         * Recommended
         */
        '@typescript-eslint/no-misused-new': 'error',

        /*
         * Disallow TypeScript namespaces.
         * https://typescript-eslint.io/rules/no-namespace
         * Recommended
         */
        '@typescript-eslint/no-namespace': 'error',

        /*
         * Disallow non-null assertions after an optional chain expression.
         * https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
         * Recommended
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        /*
         * Disallow non-null assertions using the `!` postfix operator.
         * https://typescript-eslint.io/rules/no-non-null-assertion
         * Recommended
         */
        '@typescript-eslint/no-non-null-assertion': 'warn',

        /*
         * Disallow aliasing `this`.
         * https://typescript-eslint.io/rules/no-this-alias
         * Recommended
         */
        '@typescript-eslint/no-this-alias': 'error',

        /*
         * Disallow unnecessary constraints on generic types.
         * https://typescript-eslint.io/rules/no-unnecessary-type-constraint
         * Recommended
         */
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',

        /*
         * Disallow unused variables.
         * https://typescript-eslint.io/rules/no-unused-vars
         * Recommended
         */
        '@typescript-eslint/no-unused-vars': [
          WARN,
          {
            vars: 'all',
            args: 'after-used',
            caughtErrors: 'all',
            varsIgnorePattern: '^ignore$',
            argsIgnorePattern: '^ignore$',
          },
        ],

        /*
         * Disallow `require` statements except in import statements.
         * https://typescript-eslint.io/rules/no-var-requires
         * Recommended
         */
        '@typescript-eslint/no-var-requires': 'error',

        /*
         * Enforce the use of `as const` over literal type.
         * https://typescript-eslint.io/rules/prefer-as-const
         * Recommended
         */
        '@typescript-eslint/prefer-as-const': 'error',

        /*
         * Require using `namespace` keyword over `module` keyword to declare custom
         * TypeScript modules.
         * https://typescript-eslint.io/rules/prefer-namespace-keyword
         * Recommended
         */
        '@typescript-eslint/prefer-namespace-keyword': 'error',

        /*
         * Disallow certain triple slash directives in favor of ES6-style import
         * declarations.
         * https://typescript-eslint.io/rules/triple-slash-reference
         * Recommended
         */
        '@typescript-eslint/triple-slash-reference': 'error',

        // #endregion @typescript-eslint/recommended

        // #region @typescript-eslint/recommended-requiring-type-checking

        /*
         * Disallow awaiting a value that is not a Thenable.
         * https://typescript-eslint.io/rules/await-thenable
         * Recommended
         */
        '@typescript-eslint/await-thenable': 'error',

        /*
         * Require Promise-like statements to be handled appropriately.
         * https://typescript-eslint.io/rules/no-floating-promises
         * Recommended
         */
        '@typescript-eslint/no-floating-promises': 'error',

        /*
         * Disallow iterating over an array with a for-in loop.
         * https://typescript-eslint.io/rules/no-for-in-array
         * Recommended
         */
        '@typescript-eslint/no-for-in-array': 'error',

        /*
         * Disallow the use of `eval()`-like methods.
         * https://typescript-eslint.io/rules/no-implied-eval
         * Recommended
         */
        '@typescript-eslint/no-implied-eval': 'error',

        /*
         * Disallow Promises in places not designed to handle them.
         * https://typescript-eslint.io/rules/no-misused-promises
         * Recommended
         */
        '@typescript-eslint/no-misused-promises': 'error',

        /*
         * Disallow type assertions that do not change the type of an expression.
         * https://typescript-eslint.io/rules/no-unnecessary-type-assertion
         * Recommended
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        /*
         * Disallow calling a function with a value with type `any`.
         * https://typescript-eslint.io/rules/no-unsafe-argument
         * Recommended
         */
        '@typescript-eslint/no-unsafe-argument': 'error',

        /*
         * Disallow assigning a value with type `any` to variables and properties.
         * https://typescript-eslint.io/rules/no-unsafe-assignment
         * Recommended
         */
        '@typescript-eslint/no-unsafe-assignment': 'error',

        /*
         * Disallow calling a value with type `any`.
         * https://typescript-eslint.io/rules/no-unsafe-call
         * Recommended
         */
        '@typescript-eslint/no-unsafe-call': 'error',

        /*
         * Disallow member access on a value with type `any`.
         * https://typescript-eslint.io/rules/no-unsafe-member-access
         * Recommended
         */
        '@typescript-eslint/no-unsafe-member-access': 'error',

        /*
         * Disallow returning a value with type `any` from a function.
         * https://typescript-eslint.io/rules/no-unsafe-return
         * Recommended
         */
        '@typescript-eslint/no-unsafe-return': 'error',

        /*
         * Disallow async functions which have no `await` expression.
         * https://typescript-eslint.io/rules/require-await
         * Recommended
         */
        '@typescript-eslint/require-await': 'error',

        /*
         * Require both operands of addition to be the same type and be `bigint`,
         * `number`, or `string`.
         * https://typescript-eslint.io/rules/restrict-plus-operands
         * Recommended
         */
        '@typescript-eslint/restrict-plus-operands': [
          ERROR,
          { checkCompoundAssignments: true },
        ],

        /*
         * Enforce template literal expressions to be of `string` type.
         * https://typescript-eslint.io/rules/restrict-template-expressions
         * Recommended
         */
        '@typescript-eslint/restrict-template-expressions': 'error',

        /*
         * Enforce unbound methods are called with their expected scope.
         * https://typescript-eslint.io/rules/unbound-method
         * Recommended
         */
        '@typescript-eslint/unbound-method': 'error',

        // #endregion @typescript-eslint/recommended-requiring-type-checking

        // #region @typescript-eslint/strict

        /*
         * Require consistently using either `T[]` or `Array<T>` for arrays.
         * https://typescript-eslint.io/rules/array-type
         * Strict
         */
        '@typescript-eslint/array-type': 'warn',

        /*
         * Disallow `// tslint:<rule-flag>` comments.
         * https://typescript-eslint.io/rules/ban-tslint-comment
         * Strict
         */
        '@typescript-eslint/ban-tslint-comment': 'warn',

        /*
         * Enforce that literals on classes are exposed in a consistent style.
         * https://typescript-eslint.io/rules/class-literal-property-style
         * Strict
         */
        '@typescript-eslint/class-literal-property-style': 'warn',

        /*
         * Enforce specifying generic type arguments on type annotation or
         * constructor name of a constructor call.
         * https://typescript-eslint.io/rules/consistent-generic-constructors
         * Strict
         */
        '@typescript-eslint/consistent-generic-constructors': 'warn',

        /*
         * Require or disallow the `Record` type.
         * https://typescript-eslint.io/rules/consistent-indexed-object-style
         * Strict
         */
        '@typescript-eslint/consistent-indexed-object-style': [
          WARN,
          'index-signature',
        ],

        /*
         * Enforce consistent usage of type assertions.
         * https://typescript-eslint.io/rules/consistent-type-assertions
         * Strict
         */
        '@typescript-eslint/consistent-type-assertions': [
          WARN,
          { assertionStyle: 'never' },
        ],

        /*
         * Enforce type definitions to consistently use either `interface` or `type`.
         * https://typescript-eslint.io/rules/consistent-type-definitions
         * Strict
         */
        '@typescript-eslint/consistent-type-definitions': 'warn',

        /*
         * Enforce dot notation whenever possible.
         * https://typescript-eslint.io/rules/dot-notation
         * Strict
         */
        '@typescript-eslint/dot-notation': 'warn',

        /*
         * Require `.toString()` to only be called on objects which provide useful
         * information when stringified.
         * https://typescript-eslint.io/rules/no-base-to-string
         * Strict
         */
        '@typescript-eslint/no-base-to-string': 'warn',

        /*
         * Disallow non-null assertion in locations that may be confusing.
         * https://typescript-eslint.io/rules/no-confusing-non-null-assertion
         * Strict
         */
        '@typescript-eslint/no-confusing-non-null-assertion': 'warn',

        /*
         * Disallow duplicate enum member values.
         * https://typescript-eslint.io/rules/no-duplicate-enum-values
         * Strict
         */
        '@typescript-eslint/no-duplicate-enum-values': 'warn',

        /*
         * Disallow using the `delete` operator on computed key expressions.
         * https://typescript-eslint.io/rules/no-dynamic-delete
         * Strict
         */
        '@typescript-eslint/no-dynamic-delete': 'warn',

        /*
         * Disallow classes used as namespaces.
         * https://typescript-eslint.io/rules/no-extraneous-class
         * Strict
         */
        '@typescript-eslint/no-extraneous-class': 'warn',

        /*
         * Disallow `void` type outside of generic or return types.
         * https://typescript-eslint.io/rules/no-invalid-void-type
         * Strict
         */
        '@typescript-eslint/no-invalid-void-type': 'warn',

        /*
         * Disallow the `void` operator except when used to discard a value.
         * https://typescript-eslint.io/rules/no-meaningless-void-operator
         * Strict
         */
        '@typescript-eslint/no-meaningless-void-operator': [
          WARN,
          { checkNever: true },
        ],

        /*
         * Disallow enums from having both number and string members.
         * https://typescript-eslint.io/rules/no-mixed-enums
         * Strict
         */
        '@typescript-eslint/no-mixed-enums': 'warn',

        /*
         * Disallow non-null assertions in the left operand of a nullish coalescing
         * operator.
         * https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
         * Strict
         */
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',

        /*
         * Disallow throwing literals as exceptions.
         * https://typescript-eslint.io/rules/no-throw-literal
         * Strict
         */
        '@typescript-eslint/no-throw-literal': [
          WARN,
          { allowThrowingAny: false, allowThrowingUnknown: false },
        ],

        /*
         * Disallow unnecessary equality comparisons against boolean literals.
         * https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
         * Strict
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',

        /*
         * Disallow conditionals where the type is always truthy or always falsy.
         * https://typescript-eslint.io/rules/no-unnecessary-condition
         * Strict
         */
        '@typescript-eslint/no-unnecessary-condition': 'warn',

        /*
         * Disallow type arguments that are equal to the default.
         * https://typescript-eslint.io/rules/no-unnecessary-type-arguments
         * Strict
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

        /*
         * Disallow unnecessary constructors.
         * https://typescript-eslint.io/rules/no-useless-constructor
         * Strict
         */
        '@typescript-eslint/no-useless-constructor': 'warn',

        /*
         * Disallow unsafe declaration merging.
         * https://typescript-eslint.io/rules/no-unsafe-declaration-merging
         * Strict
         */
        '@typescript-eslint/no-unsafe-declaration-merging': 'warn',

        /*
         * Disallow comparing an enum value with a non-enum value.
         * https://typescript-eslint.io/rules/no-unsafe-enum-comparison
         * Strict
         */
        '@typescript-eslint/no-unsafe-enum-comparison': 'warn',

        /*
         * Enforce non-null assertions over explicit type casts.
         * https://typescript-eslint.io/rules/non-nullable-type-assertion-style
         * Strict
         */
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',

        /*
         * Enforce the use of `for-of` loop over the standard `for` loop where
         * possible.
         * https://typescript-eslint.io/rules/prefer-for-of
         * Strict
         */
        '@typescript-eslint/prefer-for-of': 'warn',

        /*
         * Enforce using function types instead of interfaces with call signatures.
         * https://typescript-eslint.io/rules/prefer-function-type
         * Strict
         */
        '@typescript-eslint/prefer-function-type': 'warn',

        /*
         * Enforce `includes` method over `indexOf` method.
         * https://typescript-eslint.io/rules/prefer-includes
         * Strict
         */
        '@typescript-eslint/prefer-includes': 'warn',

        /*
         * Require all enum members to be literal values.
         * https://typescript-eslint.io/rules/prefer-literal-enum-member
         * Strict
         */
        '@typescript-eslint/prefer-literal-enum-member': 'warn',

        /*
         * Enforce using the nullish coalescing operator instead of logical chaining.
         * https://typescript-eslint.io/rules/prefer-nullish-coalescing
         * Strict
         */
        '@typescript-eslint/prefer-nullish-coalescing': [
          WARN,
          { ignoreTernaryTests: false },
        ],

        /*
         * Enforce using concise optional chain expressions instead of chained
         * logical ands, negated logical ors, or empty objects.
         * https://typescript-eslint.io/rules/prefer-optional-chain
         * Strict
         */
        '@typescript-eslint/prefer-optional-chain': 'warn',

        /*
         * Enforce using type parameter when calling `Array#reduce` instead of
         * casting.
         * https://typescript-eslint.io/rules/prefer-reduce-type-parameter
         * Strict
         */
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',

        /*
         * Enforce that `this` is used when only `this` type is returned.
         * https://typescript-eslint.io/rules/prefer-return-this-type
         * Strict
         */
        '@typescript-eslint/prefer-return-this-type': 'warn',

        /*
         * Enforce using `String#startsWith` and `String#endsWith` over other
         * equivalent methods of checking substrings.
         * https://typescript-eslint.io/rules/prefer-string-starts-ends-with
         * Strict
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

        /*
         * Enforce using `@ts-expect-error` over `@ts-ignore`.
         * https://typescript-eslint.io/rules/prefer-ts-expect-error
         * Strict
         */
        '@typescript-eslint/prefer-ts-expect-error': 'warn',

        /*
         * Disallow two overloads that could be unified into one with a union or an
         * optional/rest parameter.
         * https://typescript-eslint.io/rules/unified-signatures
         * Strict
         */
        '@typescript-eslint/unified-signatures': 'warn',

        // #endregion @typescript-eslint/strict

        // #region @typescript-eslint/additional

        /*
         * Require function parameters to be typed as `readonly` to prevent
         * accidental mutation of inputs.
         * https://typescript-eslint.io/rules/prefer-readonly-parameter-types
         * Type:
         */
        '@typescript-eslint/prefer-readonly-parameter-types': [
          ERROR,
          { ignoreInferredTypes: true },
        ],

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
            beforeLineComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true,
            allowClassStart: true,

            allowInterfaceStart: true,
            allowTypeStart: true,
          },
        ],

        /*
         * Disallow magic numbers
         * https://typescript-eslint.io/rules/no-magic-numbers
         * Type:
         */
        '@typescript-eslint/no-magic-numbers': [
          ERROR,
          {
            ignore: [0, 1],
            enforceConst: true,
            ignoreDefaultValues: true,
            ignoreClassFieldInitialValues: true,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreTypeIndexes: true,
          },
        ],

        /*
         * Disallow variable declarations from shadowing variables declared in
         * the outer scope.
         * https://typescript-eslint.io/rules/no-shadow
         * Type:
         */
        '@typescript-eslint/no-shadow': [
          ERROR,
          {
            builtinGlobals: true,
            allow: [
              'defaultStatus',
              'event',
              'find',
              'length',
              'name',
              'status',
            ],
          },
        ],

        /*
         * Disallow unused expressions
         * https://typescript-eslint.io/rules/no-unused-expressions
         * Type:
         */
        '@typescript-eslint/no-unused-expressions': [
          ERROR,
          { enforceForJSX: true },
        ],

        /*
         * Disallow the use of variables before they are defined
         * https://typescript-eslint.io/rules/no-use-before-define
         * Type:
         */
        '@typescript-eslint/no-use-before-define': [
          ERROR,
          { ignoreTypeReferences: false },
        ],

        /*
         * Enforce the consistent use of either backticks, double, or single quotes
         * https://typescript-eslint.io/rules/quotes
         * Type:
         */
        '@typescript-eslint/quotes': [
          ERROR,
          'double',
          { avoidEscape: true, allowTemplateLiterals: false },
        ],

        // #endregion @typescript-eslint/additional

        '@shopify/typescript/prefer-singular-enums': ERROR,

        'import/extensions': [ERROR, 'never'],
        'import/no-unused-modules': [
          ERROR,
          { missingExports: false, unusedExports: true },
        ],
        'import/max-dependencies': [ERROR, { ignoreTypeImports: true }],

        'etc/no-assign-mutated-array': ERROR,
        'etc/no-commented-out-code': ERROR,
        'etc/no-const-enum': ERROR,
        'etc/no-deprecated': ERROR,
        'etc/no-enum': ERROR,
        'etc/no-implicit-any-catch': ERROR,
        'etc/no-internal': ERROR,
        'etc/no-misused-generics': ERROR,
        'etc/no-t': ERROR,

        'etc/prefer-interface': [ERROR, { allowIntersection: false }],

        'total-functions/no-unsafe-readonly-mutable-assignment': ERROR,
        'total-functions/require-strict-mode': ERROR,
        'total-functions/no-unsafe-enum-assignment': ERROR,
        'total-functions/no-partial-url-constructor': ERROR,
        'total-functions/no-partial-division': ERROR,
        'total-functions/no-partial-string-normalize': ERROR,
        'total-functions/no-premature-fp-ts-effects': ERROR,
        'total-functions/no-partial-array-reduce': ERROR,
        'total-functions/no-nested-fp-ts-effects': ERROR,
      },

      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },

        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },

        node: {
          tryExtensions: [
            '.mjs',
            '.cjs',
            '.js',
            '.json',
            '.node',
            '.ts',
            '.d.ts',
          ],
        },
      },
    },

    {
      files: [
        '**/test/**',
        '**/tests/**',
        '**/spec/**',
        '**/__tests__/**',
        '*.test.*',
        '*.spec.*',
        '*.e2e.*',
        '*.e2e-spec.*',
      ],

      rules: {
        /*
         * Disallow variable declarations from shadowing variables declared in
         * the outer scope.
         * https://typescript-eslint.io/rules/no-shadow
         * Type:
         */
        '@typescript-eslint/no-shadow': [
          ERROR,
          {
            builtinGlobals: true,
            allow: [
              'defaultStatus',
              'event',
              'find',
              'length',
              'name',
              'status',
              'screen',
            ],
          },
        ],

        /*
         * Disallow magic numbers
         * https://typescript-eslint.io/rules/no-magic-numbers
         * Type:
         */
        '@typescript-eslint/no-magic-numbers': OFF,
      },
    },
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: { sourceType: 'module' },

  plugins: ['@typescript-eslint'],

  rules: {
    'import/no-unused-modules': OFF,
  },
});
