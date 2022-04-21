import React, { useState, useEffect } from "react";

import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import '../style/layout.css'


export default function Layout(props) {
  const [preload, setPreload] = useState('preload');

  useEffect(() => {
    setPreload('');
  }, []);


  return (
    <div className={`layout ${preload}`}>
      <Head {...props} />
      <Header />

      <main className="main">
        {props.children}
      </main>
      
      <Footer />
    </div>
  )
}
