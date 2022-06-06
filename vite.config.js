const { resolve } = require("path");
const { defineConfig } = require("vite");


module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                nested: resolve(__dirname, "./html/cocoa.html"),
                nested2: resolve(__dirname, "./html/8up.html"),
                nested3: resolve(__dirname, "./html/dew.html"),
                nested4: resolve(__dirname, "./html/download.html"),
                nested5: resolve(__dirname, "./html/DrSalt.html"),
                nested6: resolve(__dirname, "./html/foontis.html"),
                nested7: resolve(__dirname, "./html/pepes.html"),
                nested8: resolve(__dirname, "./html/pink.html"),
                nested9: resolve(__dirname, "./html/root.html"),
                nested10: resolve(__dirname, "./html/spritz.html"),
                nested11: resolve(__dirname, "./html/swoosh.html"),
                nested12: resolve(__dirname, "./html/watah.html"),


                // nested2: resolve(__dirname, "./html/practice.html"),
            }
        }
    }
}
);