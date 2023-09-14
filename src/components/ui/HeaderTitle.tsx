import React from 'react'

type props = {
    title:string,
    description:String,
    start:boolean
}

export default function HeaderTitle({title,description,start}:props) {
    return (
        <div>
            <div className={`h-[2px] w-[120px] ${!start&&'mx-auto'} bg-[#e1e1e1] mb-6`}>
                <div className={`h-[2px] bg-primary w-[60px] ${!start&&'mx-auto'}`}></div>
            </div>
            <h3 className={`${!start&&'text-center'} text-[24px] mb-3`}>{title}</h3>
            <h4 className={`${!start&&'text-center'} text-lightGray`}>{description}</h4>
        </div>
    )
}
