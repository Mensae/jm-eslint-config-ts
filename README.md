# @jm/eslint-config-ts

An [ESLint](http://eslint.org/) config that enforces best practices and prevents possible problems for TypeScript.

It is meant as an extention to [@jm/eslint-config-base](https://github.com/Mensae/jm-eslint-config-base), but can
be used without.
By default it does not include any rules with regard to styling and formatting.

The idea is to use [prettier](https://prettier.io) for styling and so it does not include
rules that are conflicting with [prettier](https://prettier.io).

## Available configs

- `ts`, The, default, base configuration that does not include any rules with regard to styling
- `formatting`, Extention to the `ts` config that does include styling rules but only those that are not covered by [prettier](https://prettier.io).

## Installation

```sh
# inside your project's working tree
npm install @jm/eslint-config-ts --save-dev
```

## Usage

Example `.eslintrc.json` with only the base config

```json
{
  "extends": ["@jm/ts"]
}
```

Example `.eslintrc.json` with base config extended with formatting rules

```json
{
  "extends": ["@jm/ts", "@jm/eslint-config-ts/formatting"]
}
```

### Recommended usage

```json
{
  "extends": ["@jm/base", "@jm/ts"]
}
```

Or with formatting:

```json
{
  "extends": [
    "@jm/base",
    "@jm/eslint-config-base/formatting",
    "@jm/ts",
    "@jm/eslint-config-ts/formatting"
  ]
}
```
