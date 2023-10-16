"use client"
import Image from 'next/image'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Contact from './components/contact';
import Certificates from './components/certificates';
import Skills from './components/skills';




export default function Home() {
  return (
  <div>
  <Hero/>
  <Certificates/>
<Skills/>
  <Contact/>
  <></> 
  </div>);}