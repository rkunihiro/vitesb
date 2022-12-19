/** @type {import("prettier").Config} */
module.exports = {
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: "consistent",
    jsxSingleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    overrides: [
        {
            files: ["*.md", "*.yaml", "*.yaml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
