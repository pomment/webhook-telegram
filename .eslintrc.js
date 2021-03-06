module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "no-underscore-dangle": ["error", {
            "allowAfterThis": true,
        }],
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "prefer-destructuring": "off",
        "max-len": "off",
        "no-console": "off",
        "global-require": "off"
    },
    "env": {
        "node": true
    }
};
