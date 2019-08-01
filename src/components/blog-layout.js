import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"

class BlogLayout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let blogHeading
    let headerImage
    let mainContent

    if (location.pathname === rootPath) {
      blogHeading = (
        <h2>
          <Link to={`/blog`}>
            Recent Blog Posts
          </Link>
        </h2>
      )
      headerImage = (
        <div class="img-margin">
        <div class="img-container"></div>
        </div>
      )
      mainContent = (
       <div>
        <h1>Heading Level 1</h1>
        <h2>Heading Level 2</h2>
        <p>Lorem ipsum dolor sit amet, <a href="/about">here is a link to the about page</a>, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Nisl suscipit adipiscing bibendum est ultricies.
          Egestas sed tempus urna et pharetra pharetra massa massa. Consequat mauris nunc congue nisi vitae suscipit tellus.
          Gravida neque convallis a cras semper auctor. Posuere morbi leo urna molestie. Tortor id aliquet lectus proin. Maecenas
          ultricies mi eget mauris pharetra et ultrices. Non sodales neque sodales ut. Nulla aliquet porttitor lacus luctus.
          Ut placerat orci nulla pellentesque dignissim enim sit. Egestas maecenas pharetra convallis posuere morbi leo urna.</p>
        <h2>Heading Level 2</h2>
        <p>Blandit aliquam etiam erat velit scelerisque in. Elit eget gravida cum sociis. Et netus et malesuada fames ac turpis
          egestas. Eget mauris pharetra et ultrices neque ornare aenean. Lacinia quis vel eros donec ac odio tempor. Auctor
          augue mauris augue neque gravida in fermentum. Id neque aliquam vestibulum morbi. Faucibus scelerisque eleifend donec
          pretium. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Tincidunt eget nullam non nisi est sit.
          Nunc id cursus metus aliquam.</p>
          </div>
      )
    } else {
      blogHeading = (
        <h1>
         {title}
         </h1>
      )
      headerImage = null
      mainContent = null
    }
    return (
      <div>
       <Header headerImage={headerImage} />
        <main id="main" class="main" tabindex="-1">
        {mainContent}
        {blogHeading}
        {children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default BlogLayout
