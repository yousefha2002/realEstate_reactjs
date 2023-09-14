import React from 'react'

type props = {
    text:string,
    onClick?:()=>void,
    type:'submit' | 'button' | 'reset'
}

export default function SecondaryButton({text,onClick,type}:props) {
    return (
        <button onClick={onClick} type={type}
        className='bg-primary text-[14px] duration-300 hover:bg-[#6f10a2b3] text-white font-bold py-2 px-6 rounded-[20px]'>
            {text}
        </button>
    )
}