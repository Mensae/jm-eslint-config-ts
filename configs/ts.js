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
        'constructor-super': OFF, // ts(2335) & ts(2377)

        /*
         * encourages use of dot notation whenever possible
         * https://eslint.org/docs/rules/dot-notation
         * Type: suggestion
         */
        'dot-notation': OFF,

        /*
         * Enforces that a return statement is present in property getters
         * https://eslint.org/docs/rules/getter-return
         * Type: problem
         * Recommended: Yes
         */
        'getter-return': OFF, // ts(2378)

        /*
         * Disallow `Array` constructors
         * https://eslint.org/docs/rules/no-array-constructor
         * Type: suggestion
         */
        'no-array-constructor': OFF,

        /*
         * Disallow modifying variables that are declared using `const`
         * https://eslint.org/docs/rules/no-const-assign
         * Type: problem
         * Recommended: Yes
         */
        'no-const-assign': OFF, // ts(2588)

        /*
         * Disallow duplicate arguments in functions
         * https://eslint.org/docs/rules/no-dupe-args
         * Type: problem
         * Recommended: Yes
         */
        'no-dupe-args': OFF, // ts(2300)

        /*
         * Disallow duplicate class members
         * https://eslint.org/docs/rules/no-dupe-class-members
         * Type: problem
         * Recommended: Yes
         */
        'no-dupe-class-members': OFF, // ts(2393) & ts(2300)

        /*
         * Disallow duplicate keys when creating object literals
         * https://eslint.org/docs/rules/no-dupe-keys
         * Type: problem
         * Recommended: Yes
         */
        'no-dupe-keys': OFF, // ts(1117)

        /*
         * Disallow empty functions
         * https://eslint.org/docs/rules/no-empty-function
         * Type: suggestion
         */
        'no-empty-function': OFF,

        /*
         * Disallow unnecessary semicolons
         * https://eslint.org/docs/rules/no-extra-semi
         * Type: suggestion
         * Recommended: Yes
         */
        'no-extra-semi': OFF,

        /*
         * Disallow overwriting functions written as function declarations
         * https://eslint.org/docs/rules/no-func-assign
         * Type: problem
         * Recommended: Yes
         */
        'no-func-assign': OFF, // ts(2539)

        /*
         * Disallow use of `eval()`-like methods
         * https://eslint.org/docs/rules/no-implied-eval
         * Type: suggestion
         */
        'no-implied-eval': OFF,

        /*
         * Disallow assigning to imported bindings
         * https://eslint.org/docs/rules/no-import-assign
         * Type: problem
         * Recommended: Yes
         */
        'no-import-assign': OFF, // ts(2539) & ts(2540)

        /*
         * Disallow number literals that lose precision
         * https://eslint.org/docs/rules/no-loss-of-precision
         * Type: problem
         * Recommended: Yes
         */
        'no-loss-of-precision': OFF,

        /*
         * Disallow symbol constructor
         * https://eslint.org/docs/rules/no-new-symbol
         * Type: problem
         * Recommended: Yes
         */
        'no-new-symbol': OFF, // ts(7009)

        /*
         * Disallow the use of object properties of the global object
         * (`Math` and `JSON`) as functions.
         * https://eslint.org/docs/rules/no-obj-calls
         * Type: problem
         * Recommended: Yes
         */
        'no-obj-calls': OFF, // ts(2349)

        /*
         * Disallow declaring the same variable more than once
         * https://eslint.org/docs/rules/no-redeclare
         * Type: suggestion
         * Recommended: Yes
         */
        'no-redeclare': OFF, // ts(2451)

        /*
         * Disallow returning values from setters
         * https://eslint.org/docs/rules/no-setter-return
         * Type: problem
         * Recommended: Yes
         */
        'no-setter-return': OFF, // ts(2408)

        /*
         * Disallow to use `this`/`super` before `super()` calling in constructors.
         * https://eslint.org/docs/rules/no-this-before-super
         * Type: problem
         * Recommended: Yes
         */
        'no-this-before-super': OFF, // ts(2376)

        /*
         * Restrict what can be thrown as an exception
         * https://eslint.org/docs/rules/no-throw-literal
         * Type: suggestion
         */
        'no-throw-literal': OFF,

        /*
         * Disallow the use of undeclared variables unless mentioned in `global`
         * comments.
         * https://eslint.org/docs/rules/no-undef
         * Type: problem
         * Recommended: Yes
         */
        'no-undef': OFF, // ts(2304)

        /*
         * Disallow unreachable statements after a return, throw, continue, or break statement
         * https://eslint.org/docs/rules/no-unreachable
         * Type: problem
         * Recommended: Yes
         */
        'no-unreachable': OFF, // ts(7027)

        /*
         * Disallow negating the left operand of relational operators
         * https://eslint.org/docs/rules/no-unsafe-negation
         * Type: problem
         * Recommended: Yes
         */
        'no-unsafe-negation': OFF, // ts(2365) & ts(2360) & ts(2358)

        /*
         * Disallow unnecessary constructor
         * https://eslint.org/docs/rules/no-useless-constructor
         * Type: suggestion
         */
        'no-useless-constructor': OFF,

        /*
         * Disallow declaration of variables that are not used in the code
         * https://eslint.org/docs/rules/no-unused-vars
         * Type: problem
         * Recommended: Yes
         */
        'no-unused-vars': OFF,

        /*
         * Require `let` or `const` instead of `var`
         * https://eslint.org/docs/rules/no-var
         * Type: suggestion
         */
        'no-var': ERROR, // ts transpiles let/const to var, so no need for vars any more

        /*
         * Require `const` declarations for variables that are never reassigned
         * after declared.
         * https://eslint.org/docs/rules/prefer-const
         */
        'prefer-const': ERROR, // ts provides better types with const

        /*
         * Require rest parameters instead of `arguments`
         * https://eslint.org/docs/rules/prefer-rest-params
         * Type: suggestion
         */
        'prefer-rest-params': ERROR, // ts provides better types with rest args over arguments

        /*
         * Require spread operators instead of `.apply()`
         * https://eslint.org/docs/rules/prefer-spread
         * Type: suggestion
         */
        'prefer-spread': ERROR, // ts transpiles spread to apply, so no need for manual apply

        /*
         * Disallow async functions which have no `await` expression
         * https://eslint.org/docs/rules/require-await
         * Type: suggestion
         */
        'require-await': OFF,

        /*
         * Enforce comparing `typeof` expressions against valid strings
         * https://eslint.org/docs/rules/valid-typeof
         * Type: problem
         * Recommended: Yes
         */
        'valid-typeof': OFF, // ts(2367)

        // #endregion ESLint Core Rules

        // #region @typescript-eslint/recommended

        /*
         * Require that function overload signatures be consecutive.
         * https://typescript-eslint.io/rules/adjacent-overload-signatures
         * Recommended
         */
        '@typescript-eslint/adjacent-overload-signatures': ERROR,

        /*
         * Disallow `@ts-<directive>` comments or require descriptions after
         * directives.
         * https://typescript-eslint.io/rules/ban-ts-comment
         * Recommended
         */
        '@typescript-eslint/ban-ts-comment': ERROR,

        /*
         * Disallow certain types.
         * https://typescript-eslint.io/rules/ban-types
         * Recommended
         */
        '@typescript-eslint/ban-types': ERROR,

        /*
         * Disallow generic `Array` constructors.
         * https://typescript-eslint.io/rules/no-array-constructor
         * Recommended
         */
        '@typescript-eslint/no-array-constructor': ERROR,

        /*
         * Disallow empty functions.
         * https://typescript-eslint.io/rules/no-empty-function
         * Recommended
         */
        '@typescript-eslint/no-empty-function': ERROR,

        /*
         * Disallow the declaration of empty interfaces.
         * https://typescript-eslint.io/rules/no-empty-interface
         * Recommended
         */
        '@typescript-eslint/no-empty-interface': ERROR,

        /*
         * Disallow the `any` type.
         * https://typescript-eslint.io/rules/no-explicit-any
         * Recommended
         */
        '@typescript-eslint/no-explicit-any': WARN,

        /*
         * Disallow extra non-null assertions.
         * https://typescript-eslint.io/rules/no-extra-non-null-assertion
         * Recommended
         */
        '@typescript-eslint/no-extra-non-null-assertion': ERROR,

        /*
         * Disallow unnecessary semicolons.
         * https://typescript-eslint.io/rules/no-extra-semi
         * Recommended
         */
        '@typescript-eslint/no-extra-semi': ERROR,

        /*
         * Disallow explicit type declarations for variables or parameters
         * initialized to a number, string, or boolean.
         * https://typescript-eslint.io/rules/no-inferrable-types
         * Recommended
         */
        '@typescript-eslint/no-inferrable-types': ERROR,

        /*
         * Disallow literal numbers that lose precision.
         * https://typescript-eslint.io/rules/no-loss-of-precision
         * Recommended
         */
        '@typescript-eslint/no-loss-of-precision': ERROR,

        /*
         * Enforce valid definition of `new` and `constructor`.
         * https://typescript-eslint.io/rules/no-misused-new
         * Recommended
         */
        '@typescript-eslint/no-misused-new': ERROR,

        /*
         * Disallow TypeScript namespaces.
         * https://typescript-eslint.io/rules/no-namespace
         * Recommended
         */
        '@typescript-eslint/no-namespace': ERROR,

        /*
         * Disallow non-null assertions after an optional chain expression.
         * https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
         * Recommended
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': ERROR,

        /*
         * Disallow non-null assertions using the `!` postfix operator.
         * https://typescript-eslint.io/rules/no-non-null-assertion
         * Recommended
         */
        '@typescript-eslint/no-non-null-assertion': WARN,

        /*
         * Disallow aliasing `this`.
         * https://typescript-eslint.io/rules/no-this-alias
         * Recommended
         */
        '@typescript-eslint/no-this-alias': ERROR,

        /*
         * Disallow unnecessary constraints on generic types.
         * https://typescript-eslint.io/rules/no-unnecessary-type-constraint
         * Recommended
         */
        '@typescript-eslint/no-unnecessary-type-constraint': ERROR,

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
        '@typescript-eslint/no-var-requires': ERROR,

        /*
         * Enforce the use of `as const` over literal type.
         * https://typescript-eslint.io/rules/prefer-as-const
         * Recommended
         */
        '@typescript-eslint/prefer-as-const': ERROR,

        /*
         * Require using `namespace` keyword over `module` keyword to declare custom
         * TypeScript modules.
         * https://typescript-eslint.io/rules/prefer-namespace-keyword
         * Recommended
         */
        '@typescript-eslint/prefer-namespace-keyword': ERROR,

        /*
         * Disallow certain triple slash directives in favor of ES6-style import
         * declarations.
         * https://typescript-eslint.io/rules/triple-slash-reference
         * Recommended
         */
        '@typescript-eslint/triple-slash-reference': ERROR,

        // #endregion @typescript-eslint/recommended

        // #region @typescript-eslint/recommended-requiring-type-checking

        /*
         * Disallow awaiting a value that is not a Thenable.
         * https://typescript-eslint.io/rules/await-thenable
         * Recommended
         */
        '@typescript-eslint/await-thenable': ERROR,

        /*
         * Require Promise-like statements to be handled appropriately.
         * https://typescript-eslint.io/rules/no-floating-promises
         * Recommended
         */
        '@typescript-eslint/no-floating-promises': ERROR,

        /*
         * Disallow iterating over an array with a for-in loop.
         * https://typescript-eslint.io/rules/no-for-in-array
         * Recommended
         */
        '@typescript-eslint/no-for-in-array': ERROR,

        /*
         * Disallow the use of `eval()`-like methods.
         * https://typescript-eslint.io/rules/no-implied-eval
         * Recommended
         */
        '@typescript-eslint/no-implied-eval': ERROR,

        /*
         * Disallow Promises in places not designed to handle them.
         * https://typescript-eslint.io/rules/no-misused-promises
         * Recommended
         */
        '@typescript-eslint/no-misused-promises': ERROR,

        /*
         * Disallow type assertions that do not change the type of an expression.
         * https://typescript-eslint.io/rules/no-unnecessary-type-assertion
         * Recommended
         */
        '@typescript-eslint/no-unnecessary-type-assertion': ERROR,

        /*
         * Disallow calling a function with a value with type `any`.
         * https://typescript-eslint.io/rules/no-unsafe-argument
         * Recommended
         */
        '@typescript-eslint/no-unsafe-argument': ERROR,

        /*
         * Disallow assigning a value with type `any` to variables and properties.
         * https://typescript-eslint.io/rules/no-unsafe-assignment
         * Recommended
         */
        '@typescript-eslint/no-unsafe-assignment': ERROR,

        /*
         * Disallow calling a value with type `any`.
         * https://typescript-eslint.io/rules/no-unsafe-call
         * Recommended
         */
        '@typescript-eslint/no-unsafe-call': ERROR,

        /*
         * Disallow member access on a value with type `any`.
         * https://typescript-eslint.io/rules/no-unsafe-member-access
         * Recommended
         */
        '@typescript-eslint/no-unsafe-member-access': ERROR,

        /*
         * Disallow returning a value with type `any` from a function.
         * https://typescript-eslint.io/rules/no-unsafe-return
         * Recommended
         */
        '@typescript-eslint/no-unsafe-return': ERROR,

        /*
         * Disallow async functions which have no `await` expression.
         * https://typescript-eslint.io/rules/require-await
         * Recommended
         */
        '@typescript-eslint/require-await': ERROR,

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
        '@typescript-eslint/restrict-template-expressions': ERROR,

        /*
         * Enforce unbound methods are called with their expected scope.
         * https://typescript-eslint.io/rules/unbound-method
         * Recommended
         */
        '@typescript-eslint/unbound-method': ERROR,

        // #endregion @typescript-eslint/recommended-requiring-type-checking

        // #region @typescript-eslint/strict

        /*
         * Require consistently using either `T[]` or `Array<T>` for arrays.
         * https://typescript-eslint.io/rules/array-type
         * Strict
         */
        '@typescript-eslint/array-type': WARN,

        /*
         * Disallow `// tslint:<rule-flag>` comments.
         * https://typescript-eslint.io/rules/ban-tslint-comment
         * Strict
         */
        '@typescript-eslint/ban-tslint-comment': WARN,

        /*
         * Enforce that literals on classes are exposed in a consistent style.
         * https://typescript-eslint.io/rules/class-literal-property-style
         * Strict
         */
        '@typescript-eslint/class-literal-property-style': WARN,

        /*
         * Enforce specifying generic type arguments on type annotation or
         * constructor name of a constructor call.
         * https://typescript-eslint.io/rules/consistent-generic-constructors
         * Strict
         */
        '@typescript-eslint/consistent-generic-constructors': WARN,

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
        '@typescript-eslint/consistent-type-definitions': WARN,

        /*
         * Enforce dot notation whenever possible.
         * https://typescript-eslint.io/rules/dot-notation
         * Strict
         */
        '@typescript-eslint/dot-notation': WARN,

        /*
         * Require `.toString()` to only be called on objects which provide useful
         * information when stringified.
         * https://typescript-eslint.io/rules/no-base-to-string
         * Strict
         */
        '@typescript-eslint/no-base-to-string': WARN,

        /*
         * Disallow non-null assertion in locations that may be confusing.
         * https://typescript-eslint.io/rules/no-confusing-non-null-assertion
         * Strict
         */
        '@typescript-eslint/no-confusing-non-null-assertion': WARN,

        /*
         * Disallow duplicate enum member values.
         * https://typescript-eslint.io/rules/no-duplicate-enum-values
         * Strict
         */
        '@typescript-eslint/no-duplicate-enum-values': WARN,

        /*
         * Disallow using the `delete` operator on computed key expressions.
         * https://typescript-eslint.io/rules/no-dynamic-delete
         * Strict
         */
        '@typescript-eslint/no-dynamic-delete': WARN,

        /*
         * Disallow classes used as namespaces.
         * https://typescript-eslint.io/rules/no-extraneous-class
         * Strict
         */
        '@typescript-eslint/no-extraneous-class': WARN,

        /*
         * Disallow `void` type outside of generic or return types.
         * https://typescript-eslint.io/rules/no-invalid-void-type
         * Strict
         */
        '@typescript-eslint/no-invalid-void-type': WARN,

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
        '@typescript-eslint/no-mixed-enums': WARN,

        /*
         * Disallow non-null assertions in the left operand of a nullish coalescing
         * operator.
         * https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
         * Strict
         */
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': WARN,

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
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': WARN,

        /*
         * Disallow conditionals where the type is always truthy or always falsy.
         * https://typescript-eslint.io/rules/no-unnecessary-condition
         * Strict
         */
        '@typescript-eslint/no-unnecessary-condition': WARN,

        /*
         * Disallow type arguments that are equal to the default.
         * https://typescript-eslint.io/rules/no-unnecessary-type-arguments
         * Strict
         */
        '@typescript-eslint/no-unnecessary-type-arguments': WARN,

        /*
         * Disallow unnecessary constructors.
         * https://typescript-eslint.io/rules/no-useless-constructor
         * Strict
         */
        '@typescript-eslint/no-useless-constructor': WARN,

        /*
         * Disallow unsafe declaration merging.
         * https://typescript-eslint.io/rules/no-unsafe-declaration-merging
         * Strict
         */
        '@typescript-eslint/no-unsafe-declaration-merging': WARN,

        /*
         * Disallow comparing an enum value with a non-enum value.
         * https://typescript-eslint.io/rules/no-unsafe-enum-comparison
         * Strict
         */
        '@typescript-eslint/no-unsafe-enum-comparison': WARN,

        /*
         * Enforce non-null assertions over explicit type casts.
         * https://typescript-eslint.io/rules/non-nullable-type-assertion-style
         * Strict
         */
        '@typescript-eslint/non-nullable-type-assertion-style': WARN,

        /*
         * Enforce the use of `for-of` loop over the standard `for` loop where
         * possible.
         * https://typescript-eslint.io/rules/prefer-for-of
         * Strict
         */
        '@typescript-eslint/prefer-for-of': WARN,

        /*
         * Enforce using function types instead of interfaces with call signatures.
         * https://typescript-eslint.io/rules/prefer-function-type
         * Strict
         */
        '@typescript-eslint/prefer-function-type': WARN,

        /*
         * Enforce `includes` method over `indexOf` method.
         * https://typescript-eslint.io/rules/prefer-includes
         * Strict
         */
        '@typescript-eslint/prefer-includes': WARN,

        /*
         * Require all enum members to be literal values.
         * https://typescript-eslint.io/rules/prefer-literal-enum-member
         * Strict
         */
        '@typescript-eslint/prefer-literal-enum-member': WARN,

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
        '@typescript-eslint/prefer-optional-chain': WARN,

        /*
         * Enforce using type parameter when calling `Array#reduce` instead of
         * casting.
         * https://typescript-eslint.io/rules/prefer-reduce-type-parameter
         * Strict
         */
        '@typescript-eslint/prefer-reduce-type-parameter': WARN,

        /*
         * Enforce that `this` is used when only `this` type is returned.
         * https://typescript-eslint.io/rules/prefer-return-this-type
         * Strict
         */
        '@typescript-eslint/prefer-return-this-type': WARN,

        /*
         * Enforce using `String#startsWith` and `String#endsWith` over other
         * equivalent methods of checking substrings.
         * https://typescript-eslint.io/rules/prefer-string-starts-ends-with
         * Strict
         */
        '@typescript-eslint/prefer-string-starts-ends-with': WARN,

        /*
         * Enforce using `@ts-expect-error` over `@ts-ignore`.
         * https://typescript-eslint.io/rules/prefer-ts-expect-error
         * Strict
         */
        '@typescript-eslint/prefer-ts-expect-error': WARN,

        /*
         * Disallow two overloads that could be unified into one with a union or an
         * optional/rest parameter.
         * https://typescript-eslint.io/rules/unified-signatures
         * Strict
         */
        '@typescript-eslint/unified-signatures': WARN,

        // #endregion @typescript-eslint/strict

        // #region @typescript-eslint/additional

        /*
         * Require function parameters to be typed as `readonly` to prevent
         * accidental mutation of inputs.
         * https://typescript-eslint.io/rules/prefer-readonly-parameter-types
         * Type: suggestion
         * Requires type checking
         */
        '@typescript-eslint/prefer-readonly-parameter-types': [
          OFF,
          { ignoreInferredTypes: true },
        ],

        /*
         * Disallow magic numbers
         * https://typescript-eslint.io/rules/no-magic-numbers
         * Type: suggestion
         */
        '@typescript-eslint/no-magic-numbers': [
          WARN,
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
         * Type: suggestion
         */
        '@typescript-eslint/no-shadow': [
          WARN,
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
         * Type: suggestion
         */
        '@typescript-eslint/no-unused-expressions': [
          WARN,
          { enforceForJSX: true },
        ],

        /*
         * Disallow the use of variables before they are defined
         * https://typescript-eslint.io/rules/no-use-before-define
         * Type: problem
         */
        '@typescript-eslint/no-use-before-define': [
          ERROR,
          { ignoreTypeReferences: false },
        ],

        // #endregion @typescript-eslint/additional

        // #region @shopify/typescript

        /*
         * Prefer singular TypeScript enums.
         * https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/docs/rules/typescript/prefer-singular-enums.md
         * Category: Stylistic Issues
         */
        '@shopify/typescript/prefer-singular-enums': WARN,

        // #endregion @shopify/typescript

        // #region import

        /*
         * Ensure consistent use of file extension within the import path.
         * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
         * Type: suggestion
         * Category: Style guide
         */
        'import/extensions': [ERROR, 'never'],

        /*
         * Forbid modules without exports, or exports without matching import in another module.
         * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
         * Type: suggestion
         * Category: Helpful warnings
         */
        'import/no-unused-modules': [
          WARN,
          { missingExports: false, unusedExports: true },
        ],

        /*
         * Enforce the maximum number of dependencies a module can have.
         * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
         * Type: suggestion
         * Category: Style guide
         */
        'import/max-dependencies': [ERROR, { ignoreTypeImports: true }],

        // #endregion import

        // #region etc

        /*
         * Forbids the assignment of returned, mutated arrays.
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/no-assign-mutated-array.md
         * Type: problem
         * Category: none
         * Recommended: Yes
         */
        'etc/no-assign-mutated-array': ERROR,

        /*
         * Forbids commented-out code.
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/no-commented-out-code.md
         * Type: problem
         * Category: none
         */
        'etc/no-commented-out-code': ERROR,

        /*
         * Forbids the use of const enum. Constant enums are not compatible with isolated modules.
         * See: https://ncjamieson.com/dont-export-const-enums/
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/no-const-enum.md
         * Type: problem
         * Category: none
         */
        'etc/no-const-enum': ERROR,

        /*
         * Forbids the use of deprecated APIs.
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/no-deprecated.md
         * Type: problem
         * Category: none
         * Recommended: Yes
         */
        'etc/no-deprecated': ERROR,

        /*
         * Forbids the use of enum.
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/no-enum.md
         * Type: problem
         * Category: none
         */
        'etc/no-enum': ERROR,

        /*
         * Like the no-implicit-any-catch rule in @typescript-eslint/eslint-plugin,
         * but for Promise rejections instead of catch clauses.
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/no-implicit-any-catch.md
         * Type: problem
         * Category: none
         * Recommended: Yes
         */
        'etc/no-implicit-any-catch': ERROR,

        /*
         * Forbids the use of internal APIs.
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/no-internal.md
         * Type: problem
         * Category: none
         * Recommended: Yes
         */
        'etc/no-internal': ERROR,

        /*
         * Forbids type parameters without inference sites and type parameters
         * that don't add type safety to declarations.
         * This is an ESLint port of Wotan's no-misused-generics rule.
         * See: https://effectivetypescript.com/2020/08/12/generics-golden-rule/.
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/no-misused-generics.md
         * Type: problem
         * Category: none
         */
        'etc/no-misused-generics': ERROR,

        /*
         * Forbids single-character type parameters.
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/no-t.md
         * Type: problem
         * Category: none
         */
        'etc/no-t': ERROR,

        /*
         * Forbids type aliases where interfaces can be used.
         * https://github.com/cartant/eslint-plugin-etc/blob/main/docs/rules/prefer-interface.md
         * Type: suggestion
         * Category: none
         */
        'etc/prefer-interface': [WARN, { allowIntersection: false }],

        // #endregion etc

        // #region total-functions

        'total-functions/no-unsafe-type-assertion': ERROR,
        'total-functions/no-unsafe-readonly-mutable-assignment': ERROR,
        'total-functions/require-strict-mode': ERROR,
        'total-functions/no-enums': ERROR,
        'total-functions/no-partial-url-constructor': ERROR,
        'total-functions/no-partial-division': ERROR,
        'total-functions/no-partial-string-normalize': ERROR,
        'total-functions/no-premature-fp-ts-effects': ERROR,
        'total-functions/no-partial-array-reduce': ERROR,

        // #endregion total-functions
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
          WARN,
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
