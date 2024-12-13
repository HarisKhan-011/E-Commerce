import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

export const Mainlayout = ({children}) => {
  return (
   <>
   <Navbar />
   <main>{children}</main>
 <Footer />
   </>
  )
}
