const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/sarahlynch/my-a11y-blog/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sarahlynch/my-a11y-blog/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/sarahlynch/my-a11y-blog/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/sarahlynch/my-a11y-blog/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/sarahlynch/my-a11y-blog/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/sarahlynch/my-a11y-blog/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/sarahlynch/my-a11y-blog/src/pages/portfolio.js")))
}

