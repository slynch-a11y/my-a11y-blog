import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Portfolio = () => (
<div>
  <SEO title="Portfolio" />
  <Header />
  <main id="main" class="main" tabindex="-1">
    Here's my portfolio!
  </main>
  <Footer />
</div>
)
  
export default Portfolio