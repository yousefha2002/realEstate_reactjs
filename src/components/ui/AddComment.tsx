import React from 'react'
import {FaComment} from 'react-icons/fa'
import {BsFillSendFill} from 'react-icons/bs'

function AddComment() {
  return (
    <div className='my-7'>
        <div className='flex items-center gap-2'>
            <FaComment className=' text-gray-300 text-[22px]'/>
            <h3 className=' text-xl mb-2'> اترك تعليق</h3>
        </div>
        <textarea placeholder='تعليق' className=' bg-transparent w-full h-[160px] p-2 
        rounded-[4px] border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500'></textarea>
        <button className='flex items-center justify-center bg-primary text-white w-[100px] py-2 rounded-[20px] mt-2 duration-300 hover:opacity-80'>
            <BsFillSendFill/>
            <p>إرسال</p>
        </button>
    </div>
  )
}

export default AddComment