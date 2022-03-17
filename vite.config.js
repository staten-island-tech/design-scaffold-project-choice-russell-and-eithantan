const { resolve } = require("path");
const { defineConfig } = require("vite");


module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                nested: resolve(__dirname, "./html/cocoa.html"),
                // nested2: resolve(__dirname, "./html/practice.html"),
            }
        }
    }
}
);