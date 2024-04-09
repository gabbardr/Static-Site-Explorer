import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { link } from "fs"

const bodyStyle = {
  backgroundColor: "#2D3047",
  margin: -8,
}
const titleStyle = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 820,
  fontSize: "3rem",
  color: "#A2C3A4",
}
const secondheadingStyles = {
  fontSize: "2.5rem",
}
const descriptionStyles = {
  marginBottom: 48,
  maxWidth: 1000,
  marginLeft: 400,
  fontSize: "1.5rem",
  color: "#A2C3A4",
}
const listStyle = {
  fontSize: "1.5rem",
  marginLeft: 850,
  color: "#A2C3A4",
}

const linkStyle = {
  fontSize: "1.5rem",
  marginLeft: 850,
  color: "#A2C3A4",
}

const thirdheaderStyle = {
  fontSize: "2rem",
  marginLeft: 600,
  color: "#A2C3A4",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={bodyStyle}>
      <h1 style={titleStyle}>
        Astronomic-X
        <br />
        <span style={secondheadingStyles}><i>— The next level of space engineering</i></span>
      </h1>
      <p style={descriptionStyles}>
        Here at Astronomic-X we stive to manufacture ships and transportation that will
        take you anywhere in the galaxy. Want to go to Mars? Pluto? perhaps outside the solar system?
        Well, with us that becomes a possibility!
      </p>
      <p style={descriptionStyles}>
        We also offer loads of transportation services. The Mrs wants a lovely evening
        on Jupiter? That can be done here at a low rate of 10000 space bucks!
      </p>
      <ul style={listStyle}>
        <li>
          Saturn
        </li>
        <li>
          Jupiter
        </li>
        <li>
          Pluto
        </li>
        <li>
          Konxtrec-C
        </li>
      </ul>
      <h3 style={thirdheaderStyle}> Want to Find out more About Us? Click Below!</h3>
      <div>
        <Link to= "/about/" style={linkStyle}>Abouts Us</Link>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
