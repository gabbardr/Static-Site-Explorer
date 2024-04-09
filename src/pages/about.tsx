import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { link } from "fs"

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
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
const aboutusparagraphStyle = {
    maxWidth: 1000,
    marginLeft: 600,
    fontSize: "1.5rem",
    color: "#A2C3A4",
}
const quoteStyle = {
    marginLeft: 50,
}
const linkStyle = {
    fontSize: "1.5rem",
    marginLeft: 850,
    color: "#A2C3A4",
  }

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main style={bodyStyle}>
            <h1 style={titleStyle}>
            Astronomic-X
            <br />
            <span style={secondheadingStyles}><i>— About Us</i></span>
            </h1>
            <p style={aboutusparagraphStyle}>
            We started our journey right in my moms garage in 1987. No Kidding! Like many great inventors too,
            we had to overcome many obsticles anc challenges along the way in order to make our dream
            a reality. Eventually we were provided with enough funding to buy a building on the east
            coast in Florida to began our model development. Along our journey weve made many achievements
            such as being the first to travel outside of the solar system, bring new speeds, and make planetary 
            travel a regular occurance!
            
            <br />
            <br />
                <span style={quoteStyle}>-"A man whos committed to their work can achieve great things" -Paul B</span>
            </p>
            <div>
        <Link to= "http://localhost:8000/" style={linkStyle}>Home</Link>
      </div>
       </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>About Page</title>