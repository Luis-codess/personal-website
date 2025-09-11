'use client';

import Snowfall from 'react-snowfall';
import { Radio_Canada } from 'next/font/google';
import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';

const radio = Radio_Canada({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  return (
    <div className={`${radio.className} relative min-h-screen overflow-x-hidden`}>
      <Snowfall
        snowflakeCount={200}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10, pointerEvents: 'none' }}
      />
      <div className="max-w-2xl w-full mx-auto px-6 sm:px-12">
        <div className="pt-24 pb-16 flex justify-between items-center">
          <span className="text-lg">Luis Rincon</span>
          <Navbar />
        </div>

        {/* PROJECTS */}
        <section>
          <h3 className="text-cyan-500 uppercase font-semibold pt-12 pb-6">Projects</h3>
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-2 items-center">
              <div>
                <span className="font-medium">Aim Trainer</span>
                <div className="text-gray-500 text-sm">JavaScript, CSS, HTML</div>
              </div>
              <div className="flex justify-end items-center [column-gap:1rem]">
                <a href="https://luis-codess.github.io/aim-trainer/" target="_blank" rel="noopener noreferrer" className="hover:underline">live</a>
                <a href="https://github.com/Luis-codess/aim-trainer" target="_blank" rel="noopener noreferrer" className="hover:underline">github</a>
              </div>
            </div>
            <br></br>

            <div className="grid grid-cols-2 gap-2 items-center">
              <div>
                <span className="font-medium">Yui AI Assistant</span>
                <div className="text-gray-500 text-sm">Python, Voice AI, Flask</div>
              </div>
              <div className="text-right text-gray-500">in progress</div>
            </div>
            <br></br>

            <div className="grid grid-cols-2 gap-2 items-center">
              <div>
                <span className="font-medium">Personal Website</span>
                <div className="text-gray-500 text-sm">Next.js, HTML, CSS, Git</div>
              </div>
              <div className="text-right text-gray-500">currently viewing</div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section>
          <h3 className="text-cyan-500 uppercase font-semibold pt-16 pb-6">Work</h3>
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-medium">
                  IT Desktop Support Assistant at{' '}
                  <a href="https://wp.stolaf.edu" target="_blank" rel="noopener noreferrer" className="underline hover:underline">
                    St Olaf College
                  </a>
                </span>
                <div className="text-gray-600 text-sm">Sep 2023 – Present</div>
              </div>
            </div>
            <br></br>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-medium">
                  Printroom Operator at{' '}
                  <a href="https://www.showdowndisplays.com/" target="_blank" rel="noopener noreferrer" className="underline hover:underline">
                    Showdown Displays
                  </a>
                </span>
                <div className="text-gray-600 text-sm">May 2021 – Present</div>
              </div>
            </div>
          </div>
          <br></br>
        </section>

        {/* Social icons row */}
        <div className="mt-10 flex items-center [column-gap:1.0rem]">
          <a href="https://github.com/Luis-codess" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex hover:opacity-80 transition">
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/luisrinconcodes/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex hover:opacity-80 transition">
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>

        <div className="pb-32" />
      </div>
    </div>
  );
}
