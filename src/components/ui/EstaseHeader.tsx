import React from 'react'

type props = {
    number:number,
    title:string,
    description:string
}

export default function EstaseHeader({number,title,description}:props) {
    return (
        <div className='flex gap-x-3 items-center'>
            <div>
                <div className='w-[45px] h-[45px] font-[600] rounded-full flex justify-center items-center bg-primary text-white'>{number}</div>
            </div>
            <div>
                <h3 className='text-[16px] sm:text-[20px] mb-[2px]'>{title}</h3>
                <h4 className='text-[13px] text-lightGray'>{description}</h4>
            </div>
        </div>
    )
}
