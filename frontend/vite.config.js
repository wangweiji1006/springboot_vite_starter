import { sync } from "glob";
export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/": {
        target: "http://localhost:8080",
        changeOrigin: true,
        configure: (proxy, options) => {
          options.headers = {
            ...options.headers,
            Accept: "text/html",
          };
        },
        bypass: (req) => {
          const url = new URL(req.url, `http://${req.headers.host}`);
          if (url.pathname === "/" || url.pathname.endsWith(".html")) {
            return null;
          }
          return req.url;
        },
      },
    },
  },
};
