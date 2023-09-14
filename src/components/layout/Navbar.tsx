import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='shadow-md bg-white'>
            <div className='flex justify-between items-center px-2 container xl:px-6 py-3'>
                <h3 className='text-[20px] font-[700]'>عقاري</h3>
                <div className='flex items-center gap-x-2'>
                    <button className='bg-primary text-[14px] text-white font-bold py-2 px-4 rounded'>إضافة عقار</button>
                    <Link to="/login">
                        <button className='border-2 border-primary text-[14px] text-primary font-bold py-2 px-3 rounded'>تسجيل الدخول</button>
                    </Link>
                    <button><IoIosNotificationsOutline className='text-[28px]'/></button>
                </div>
            </div>
        </div>
    )
}
