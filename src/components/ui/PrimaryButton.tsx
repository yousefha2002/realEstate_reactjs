import React from 'react'

type props = {
    text:string,
    onClick:()=>void
}

export default function PrimaryButton({text,onClick}:props) {
    return (
        <button onClick={onClick}
        className='bg-white text-[14px] duration-300 hover:bg-primary hover:text-white text-primary border-2 border-primary font-bold py-2 px-6 rounded-[20px]'>
            {text}
        </button>
    )
}
