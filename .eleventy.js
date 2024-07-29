module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
};

// module.exports = function (eleventyConfig) {
//   eleventyConfig.addPassthroughCopy("assets");
//   // other configurations...

//   return {
//     dir: {
//       input: "src",
//       includes: "_includes",
//       output: "_site",
//     },
//   };
// };
