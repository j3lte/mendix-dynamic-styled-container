const base = require("@mendix/pluggable-widgets-tools/configs/eslint.ts.base.json");

module.exports = {
    "globals": {
        "google": "readonly",
        "JSX": "readonly",
    },
    ...base,

};
