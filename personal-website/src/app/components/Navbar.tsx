'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/',                label: 'experience' },
    { href: '/about',           label: 'about'      },
    { href: 'mailto:rincon2@stolaf.edu', label: 'contact' },
    { href: '/github_resume.pdf', label: 'resume'     },
  ]

  return (
    <nav className="sticky top-28 self-start">
      <ul className="flex flex-col items-end space-y-2 list-none">
        {navItems.map(({ href, label }) => {
          const isActive = href === pathname

          return (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('mailto:') || href.endsWith('.pdf')
                  ? { target: '_blank', rel: 'noopener' }
                  : {})}
                className={`
                  text-black no-underline transition-colors
                  ${isActive ? 'text-cyan-500' : 'text-black'}
                  hover:underline hover:decoration-cyan-500 hover:underline-offset-2
                `}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
