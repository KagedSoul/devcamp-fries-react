module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "babel-preset-es2015", "babel-preset-stage-1"]
          // eddited "es2015, and stage-1"
          // -also manualy installed with npm
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"]
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
