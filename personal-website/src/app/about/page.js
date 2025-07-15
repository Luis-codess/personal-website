'use client';

import Snowfall from 'react-snowfall';
import { Radio_Canada } from 'next/font/google';
import React from 'react';
import Navbar from '../components/Navbar';

const radio = Radio_Canada({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Home() {
  return (
    <div className={`${radio.className} relative min-h-screen overflow-x-hidden`}>
      {/* Snowfall background */}
      <Snowfall
        snowflakeCount={200}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -10,
          pointerEvents: 'none',
        }}
      />

      {/* HEADER */}
    <div className="max-w-screen-lg mx-auto px-12 pt-24 pb-16 flex justify-between items-center">
        <span className="text-lg">Luis Rincon</span>
        <Navbar />
      </div>

      {/* MAIN */}
     <div className="max-w-screen-lg mx-auto px-12 space-y-40 pb-24">
        {/* PROJECTS */}
        <section>
          <h3 className="text-cyan-500 uppercase font-semibold mb-6">Projects</h3>
          <div className="space-y-12">
            {/* Aim Trainer */}
            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium">Aim Trainer</span>
                <span className="text-gray-500">live  github</span>
              </div>
              <div className="text-gray-500 text-sm">
                Python, Py5, py5_tools
              </div>
            </div>
            <br></br>

            {/* Yui AI Assistant */}
            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium">Yui AI Assistant</span>
                <span className="text-gray-500">Planned</span>
              </div>
              <div className="text-gray-500 text-sm">
                Python, Voice AI, Flask
              </div>
            </div>
            <br></br>

            {/* Personal Website */}
            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium">Personal Website</span>
                <span className="text-gray-500">In Progress</span>
              </div>
              <div className="text-gray-600 text-sm">
                Next.js, HTML, CSS, Git
              </div>
            </div>
          </div>
          <br></br>
        </section>


        {/* WORK */}
        <section>
          <h3 className="text-cyan-500 uppercase font-semibold mb-6">Work</h3>
          <div className="space-y-16">
            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium">
                  IT Desktop Support Assistant
                </span>
                <span className="text-gray-500">Sep 2023 – Present</span>
              </div>
              <div className="text-gray-600 text-sm">@ St Olaf College</div>
            </div>
            <br></br>

            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium">
                  Printroom Operator
                </span>
                <span className="text-gray-500">May 2021 – Present</span>
              </div>
              <div className="text-gray-600 text-sm">@ Showdown Displays</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
