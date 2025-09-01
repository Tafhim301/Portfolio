
import Footer from "./Footer";
import Navbar from "./Navbar";
import type { ReactNode } from "react";

interface Iprops {
    children: ReactNode
}

export default function CommonLayout({children} : Iprops) {
  return (
    <div>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
       
    </div>
  )
}
