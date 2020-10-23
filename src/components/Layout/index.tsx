import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {}

const Comp: React.FC<Props> = ({ children }) => (
  <>
    <Navbar />
    <main role="main" className="container">
      {children}
    </main>
    <Footer />
  </>
)

export default Comp
