module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["airbnb", "prettier", "priettier/react"],
    globals: {
        Atomics: "readonly",
        sharedArrayBuffer: "readonly",
    },
    parser: "babel-eslint",
    parseOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersiion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extesion": ["warn", { extesions: [".jsx", ".js"] }],
        "import/prefer-default-export": "off",
    },
};
