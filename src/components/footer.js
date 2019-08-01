import React from "react"
import { FaTwitter, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

const Footer = () => (
  <footer>
   
      <div class="tagline">Connect with me!</div>
        <nav class="contact-info" aria-label="social">
          <ul>
            <li>
              <a href="mailto:" aria-label="Email">
              <FaRegEnvelope aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" aria-label="Twitter">
              <FaTwitter aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <FaLinkedinIn aria-hidden="true" />
              </a>
            </li>
          </ul>
      </nav>
    <div>
      © {new Date().getFullYear()} Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>. 
          Deployed with <a href="https://www.netlify.com">Netlify</a>.
    </div>
 
  </footer>
)

export default Footer
