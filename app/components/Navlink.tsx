import Link from 'next/link'
import React from 'react'

type NavlinkProps = {href: string, title: string}

export default function Navlink({href, title} : NavlinkProps ) {
  return (
    <Link
        href={href}
        className='block pl-3 pr-4 py-2 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
    >
        {title}
    </Link>
  )
}
