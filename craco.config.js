// craco.config.js
module.exports = {
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: ["src/scss"], // 👈 allows @import "variables"; etc.
        },
      },
    },
  },
};
