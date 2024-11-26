import React from 'react'
import Footer1 from './Footer1'
import Footer2 from './Footer2'

export default function Footer() {
  return (
    <div>
      <Footer1 />
      <div 
      style={{
        width:'100%',
        height:'0.5px',
        backgroundColor:'gold',
        border:'none',
        display:'flex',
        justifyContent:'center'
      }}
      >

      </div>
      <Footer2 />
    </div>
  )
}
