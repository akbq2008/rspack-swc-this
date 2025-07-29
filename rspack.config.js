import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import { VueLoaderPlugin } from "vue-loader";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));


const targets = ["last 2 versions", "> 0.2%", "not dead", "Firefox ESR",
  "chrome 70",
  "iOS 7"];

export default defineConfig({
  entry: {
    main: path.resolve(__dirname, './src/index.js')

  },
  resolve: {
    extensions: ["...", ".ts", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          experimentalInlineMatchResource: true
        }
      },
      {
        test: /\.(js|ts)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "ecmascript"
                }
              },
              env: { targets },
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: path.resolve(__dirname, './index.html')
    }),
    new VueLoaderPlugin()
  ],
});
