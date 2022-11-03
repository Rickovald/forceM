module.exports = {
    env: {
        "browser": true,
        "es2022": true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: path.join(__dirname, "tsconfig.json")

    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "indent": ["error", 2],
        "eol-last": ["error", "never"],
        "no-console": "off",
        "semi": ["error", "always"],
        "camelcase": ["error", {"allow": ["aa_bb"]}]
    },
    extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:react/jsx-runtime"
    ]
}
