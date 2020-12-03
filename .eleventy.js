module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/admin')

  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addFilter("getPostsByAuthor", (posts, author) => {
    return posts.filter(post => post.data.author === author)
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }  
}