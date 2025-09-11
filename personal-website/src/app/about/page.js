'use client';

import React from 'react';
import Snowfall from 'react-snowfall';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Snowfall behind content */}
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

      <div className="max-w-2xl w-full mx-auto px-6 sm:px-12">
        {/* Header / Navbar */}
        <div className="pt-24 pb-16 flex justify-between items-center">
          <span className="text-lg">Luis Rincon</span>
          <Navbar />
        </div>

        {/* About content */}
        <section className="pb-32">
          <div className="text-pink-400 font-semibold mb-2">hi, hola</div>
          <br></br>
          <div className="text-gray-500 mb-8">[ him ]</div>

          <p className="text-gray-700 leading-relaxed">
            i’m a currently a computer science major with a concentration in Statistics and Data Science at St Olaf College.</p>
            <br></br>

          <p className="text-gray-700 leading-relaxed mt-6">
            when i'm not programming you can catch me lounging around, trying new restaurants, and
          </p>
        <p className="text-gray-700 leading-relaxed mt-6">
            trying to build new things.
            </p>
        <br></br>

          <p className="text-gray-700 leading-relaxed mt-6">
           i still have much more to learn, and i'm always open to exploring new opportunities, —{' '}
            <a href="mailto:rincon2@stolaf.edu" className="underline hover:underline">
              connect with me here
            </a>
            .
          </p>

          {/* Icon links row */}
          <div className="pt-10 flex flex-row [column-gap:1.0rem]">
            <a
              href="https://github.com/Luis-codess"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex"
            >
              <Image src="/github.svg" alt="GitHub" width={30} height={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/luisrinconcodes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex"
            >
              <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
