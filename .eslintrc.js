module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "modules": true,
    },
    "sourceType": "module"
  },
  "plugins": [
    "classes",
  ],
  "globals": {
    "jasmine": true,
    "idx": true,
    "process": true,
    "__dirname": true
  },
  "parser": "babel-eslint",
  "rules": {
    "classes/space": 2,
    "classes/name": [2, "class", "method"],
    "classes/style": 2,
    "strict": 0,
    "prefer-const": "error",
    "brace-style": "error",
    "new-cap": ["error",
      { "newIsCap": true }
    ],
    "block-spacing": "error",
    "keyword-spacing":"error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "space-in-parens": ["error", "never"],
    "space-unary-ops": "error",
    "space-before-function-paren": ["error", "never"],
    "no-multi-spaces": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "computed-property-spacing": ["error", "never"],
    "func-call-spacing": ["error"],
    "object-curly-spacing": ["error", "always"],
    "space-before-blocks": ["error"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "space-infix-ops": "error",
    "eol-last": "error",
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "arrow-spacing": [
      "error"
    ],
    "max-len": ["error", 130]
  }
};