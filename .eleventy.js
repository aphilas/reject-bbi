module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/admin')

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }  
}