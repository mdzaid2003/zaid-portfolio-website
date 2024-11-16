import React from 'react'

type TagProps = {
  name: string,
  onClick: (name: string) => void,
  isSelected: Boolean
}

export default function ProjectTag({name, onClick, isSelected}: TagProps) {
    const buttonStyles = isSelected ? 'border-red-500 text-white' : 'text-[#ADB7BE] border-slate-600 hover:border-white'
  return (
    <button 
        className={`${buttonStyles} rounded-full border-2 cursor-pointer px-6 py-2 text-xl`}
        onClick={() => onClick(name)}
    >
        {name}
    </button>
  )
}
