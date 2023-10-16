'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <div><>

    <section className="lightning-bg min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            I am 
            <br className="hidden lg:inline-block"/>
            <Typewriter
  options={{
    strings: ['A Data Scientist', 'A Data Analyst','A Data Engineer','A python Developer','A DevOps Engineer'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
          
          <p className="mb-8 leading-relaxed">
          "I'm a software engineer with a deep love for data. My journey in tech began with a fascination for coding and problem-solving.
           Over the years, my curiosity led me to explore the captivating worlds of data science, data engineering, and data analysis.
           I thrive on turning raw data into actionable insights and building data-driven solutions that make an impact
 I am always curious and ready to explore & learn new technologies along my way to reach my targeted goal.
Always hungry to learn and stays afraid of not trying.
          </p>        <p>


          </p>
          <div className="flex justify-centre py-8 ">
            <Link href={"#Contact"}>
            <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:scale-100 duration-150 rounded text-lg">
              Contact
            </button></Link>
        
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full border-4 border-white"
            alt="hero"
            height={500}
            width={500}
            src={require("../../../public/Yassa-removebg-preview.png")}
        
          />
        </div>
      </div>
    </section>
    <p />
  </>
  </div>
  )
}

export default Hero