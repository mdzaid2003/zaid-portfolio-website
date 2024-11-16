import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type CardProps = {
  id: string,
  imgUrl: string,
  description: string,
  gitUrl: string,
  title: string,
  previewUrl: string,
}

function ProjectCard({id, imgUrl, title, description, gitUrl, previewUrl}: CardProps) {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
        <div className="h-52 md:h-72 rounded-t-xl group relative" style={{background: `url(${imgUrl})`, backgroundSize:'cover'}}>
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link
              href={'/'}
              className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            >
              <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </Link>
            <Link
              href={'/'}
              className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            >
              <EyeIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </Link>
          </div>
        </div>
        <div className="text-white rounded-b-xl py-6 px-4 bg-[#181818]">
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard