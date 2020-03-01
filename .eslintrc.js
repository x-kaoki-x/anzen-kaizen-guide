module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jquery" : true,
    "jest" : true
  },
  "extends": [
    "airbnb-base",
    "plugin:prettier/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "page": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true
      }
    ]
  }
};