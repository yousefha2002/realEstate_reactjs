import React from 'react'

type props = {
    text:string
}

export default function InputLabel({text}:props) {
    return (
        <label className='text-[14px] mb-2 text-lightGray'>
            {text}
        </label>
    )
}
