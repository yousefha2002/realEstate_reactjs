import React from 'react'
import { FaComment } from 'react-icons/fa'

function EstateComments() {
  return (
    <div className='border-b-[1px] py-7 border-b-gray-300'>
        <div className='flex items-center gap-2'>
            <FaComment className=' text-gray-300 text-[22px]'/>
            <h3 className=' text-xl mb-2'>التعليقات</h3>
        </div>
        {
            false
            ?
            <div className='h-[80px] flex items-center justify-center text-[20px] text-gray-400'>
                <h3>لا يوجد تعليقات، كن أول المعلقين</h3>
            </div>
            :
            <div className='mt-6'>
                {
                    [1,2,3,4,5].map(it=>{
                        return <div className=' shadow-md p-2 mb-2' key={it}>
                        <div className='flex items-center gap-2'>
                            <img className="w-10 h-10 rounded-full" 
                            src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt="Rounded avatar"/>
                            <h4>محمد</h4>
                        </div>
                        <p className='text-[14px] text-gray-400 mt-3'>محتوى التعليق هنا</p>
                    </div>
                    })
                }
            </div>
        }
    </div>
  )
}

export default EstateComments