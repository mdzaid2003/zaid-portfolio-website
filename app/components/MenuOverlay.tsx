import React from 'react'
import Navlink from './Navlink'

type OverlayProps = {path: string, title: string}

export default function MenuOverlay({links} : {links: OverlayProps[]}) {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, ind) => (
            <li key={ind}>
                <Navlink href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  )
}
