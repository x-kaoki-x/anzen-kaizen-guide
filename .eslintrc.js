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
        "plugin:vue/essential",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "page": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
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