module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
    }
}
