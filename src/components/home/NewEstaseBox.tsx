import React from 'react'
import { BiSolidUser,BiTime } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Estate } from '../../types/Esatate';
import { Link } from 'react-router-dom';

type props = {
    item:Estate
}

export default function NewEstaseBox({item}:props) {
    return (
        <Link to={`/estate/${item.id}`}>
        <div className='shadow-md bg-white relative'>
            <img alt="" className='h-[220px] w-[100%]'
            src={`${process.env.REACT_APP_API_KEY}/uploads/${item.images[0].path}`}/>
            <div className='absolute top-4 text-[#ccc] z-2 bg-[#00000099] left-4 px-3 py-1'>{item.category?.title}</div>
            <div className='p-4'>
                <div className='flex text-primary items-center gap-1 mb-2'>
                    <BiSolidUser/>
                    <h3 className='text-[14px]'>{item.user?.name}</h3>
                </div>
                <h3 className='mb-3 text-[18px] font-[600]'>{item.title}</h3>
                <div className='flex items-center gap-1 text-lightGray mb-4'>
                    <FaMapMarkerAlt/>
                    <h3 className='text-[14px]'>{item.address}</h3>
                </div>
                <h3 className='mb-3 text-[14px] text-lightGray'>
                    <span className='text-primary'>{item.price} </span>{item.currency.title} 
                </h3>
                <hr/>
                <div className='flex items-center mt-3 gap-x-3'>
                    <h3 className='bg-primary text-white px-3 py-1 rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px]'>
                        {item.type===1?"إيجار":"بيع"}
                    </h3>
                    <div className='flex items-center gap-1 text-lightGray'>
                        <BiTime/>
                        <h3 className='text-[14px]'>{item.createdAt.split('T')[0]}</h3>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}
