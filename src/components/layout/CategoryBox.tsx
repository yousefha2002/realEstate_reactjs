import React from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../../types/Category'

type props = {
    item:Category
}

export default function CategoryBox({item}:props) {
    return (
        <Link to={`/category/${item.id}`} className='link'>
            <div className='bg-white rounded-[100px] text-primary px-4 py-2 shadow-md text-[15px] font-[600] hover:text-white hover:bg-primary duration-300'>
                <div className=' truncate'>
                    {item.title}
                </div>
            </div>
        </Link>
    )
}
