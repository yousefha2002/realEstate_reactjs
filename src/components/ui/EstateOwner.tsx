import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'


function EstateOwner() {
  return (
    <div className=''>
        <h3 className='text-2xl mb-4'>صاحب/مالك العقار</h3>
        <div className='flex items-center gap-2 text-[18px] text-lightGray'>
            <MdLocationOn/>
            <p>فلسطين</p>
        </div>
        <div className='flex items-center gap-2 text-[18px] text-lightGray'>
            <BsFillPersonFill/>
            <p>محمد</p>
        </div>
        <div className='flex items-center gap-2 text-[18px] text-lightGray'>
            <AiFillPhone/>
            <p>+123456789</p>
        </div>
    </div>
  )
}

export default EstateOwner