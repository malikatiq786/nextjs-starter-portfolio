import React from 'react'

const year = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className='p-5 h-14 bg-background bg-black text-white'>Made with Malik Atiq {year}</footer>
  )
}
