"use client"
import React from 'react';
import Image from 'next/image';

const Certificates = () => {
  return (<div id="Certificates"><div/>
    <div className="lightning-bg min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Some Achievements
          </h1>
          <p className="text-base text-white">
            These are some of my certificates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 ">
          {/* Import and use images directly */}
          <div className="relative rounded overflow-hidden hover:scale-110 duration-700">
            <Image
              alt="Certificate 1"
              src={require("../../../public/certifcate-3.jpg")}
              layout="responsive"
              width={800}
              height={600}
            />
          </div>

          <div className="relative rounded overflow-hidden hover:scale-110 duration-700">
            <Image
              alt="Certificate 2"
              src={require("../../../public/certifcate-4.jpg")}
              layout="responsive"
              width={800}
              height={600}
            />
          </div>

          <div className="relative rounded overflow-hidden hover:scale-110 duration-700">
            <Image
              alt="Certificate 3"
              src={require("../../../public/certificate-2.jpg")}
              layout="responsive"
              width={800}
              height={600}
            />
          </div>

          <div className="relative rounded overflow-hidden hover:scale-110 duration-700">
            <Image
              alt="Certificate 4"
              src={require("../../../public/certificate-5.jpg")}
              layout="responsive"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div><div/>
    </div></div>
  
  );
};

export default Certificates;
