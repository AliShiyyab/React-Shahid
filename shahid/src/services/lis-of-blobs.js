const blogData = {
  blogs: [
    {
      "title": "Software developer",
      "author": "Ali Shiyyab",
      "content": "Walla ma 3nde content hahaha",
      "image": "data:image/jpeg;base64,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"
    },
    {
      "title": "Tips for Writing Great Blog Posts",
      "author": "Jane Smith",
      "content": "Crafting engaging and informative blog posts is essential for a successful blog. Here are some tips to help you write great blog content that resonates with your audience.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cDrRVQH5Q1JJPnIzoeg25aKJTYKDr1N3YQ&usqp=CAU"
    },
    {
      "title": "The Power of Visual Content",
      "author": "David Williams",
      "content": "Visual content, such as images and videos, can significantly enhance your blog's appeal. Discover how to leverage the power of visuals in your blog posts.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cDrRVQH5Q1JJPnIzoeg25aKJTYKDr1N3YQ&usqp=CAU"
    },
    {
      "title": "SEO Strategies for Bloggers",
      "author": "Sarah Brown",
      "content": "Search engine optimization (SEO) is crucial for increasing your blog's visibility in search results. Learn effective SEO strategies to attract more readers.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cDrRVQH5Q1JJPnIzoeg25aKJTYKDr1N3YQ&usqp=CAU"
    },
    {
      "title": "Monetizing Your Blog",
      "author": "Michael Johnson",
      "content": "Want to turn your blog into a source of income? Explore various methods for monetizing your blog and generating revenue from your content.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cDrRVQH5Q1JJPnIzoeg25aKJTYKDr1N3YQ&usqp=CAU"
    },
    {
      "title": "Blogging Trends in 2023",
      "author": "Emily Davis",
      "content": "Stay up-to-date with the latest blogging trends. In this post, we'll discuss the emerging trends that bloggers should watch out for in 2023.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cDrRVQH5Q1JJPnIzoeg25aKJTYKDr1N3YQ&usqp=CAU"
    }
  ]
}
;

export default blogData;
