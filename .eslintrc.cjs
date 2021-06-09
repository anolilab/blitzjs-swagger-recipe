module.exports = {
    root: true,
    extends: ["@anolilab/eslint-config"],
    parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
        projectFolderIgnoreList: [".blitz/**"],
    },
    env: {
        // Your environments (which contains several predefined global variables)
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        // mocha: true,
        jest: true,
        // jquery: true
    },
    globals: {
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        // Customize your rules
        "unicorn/no-array-for-each": "off",
        "unicorn/no-null": "off",
        "unicorn/no-array-reduce": "off",
    },
};
