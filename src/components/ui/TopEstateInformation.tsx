import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsFillPersonFill ,BsFillBuildingFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {BiArea} from 'react-icons/bi'

function TopEstateInformation() {
  return (
    <div>
        <h3 className=' text-4xl'>شقة</h3>
            <div className='flex items-center my-7 gap-5 text-lightGray'>
                <div className='flex items-center gap-2 text-[14px]'>
                    <AiOutlineClockCircle/>
                    <p>2023-07-17 04:38 AM</p>
                </div>
                <div className='flex items-center gap-2 text-[14px]'>
                    <BsFillPersonFill/>
                    <p>2 مشاهدات</p>
                </div>
            </div>
            <div className='flex items-center gap-2 text-[20px] text-lightGray'>
                <MdLocationOn/>
                <p> فلسطين, قطاع غزة, غزة, تل الهوا</p>
            </div>
            <div className='flex items-center my-7 gap-5 text-lightGray  border-b-[1px] pb-7 border-b-gray-300'>
                <div className='flex items-center gap-2 text-[20px]'>
                    <BsFillBuildingFill/>
                    <p>600 شيقل</p>
                </div>
                <div className='flex items-center gap-2 text-[20px]'>
                    <BiArea/>
                    <p>1 م2</p>
                </div>
            </div>
            <div className='border-b-[1px] pb-7 border-b-gray-300'>
                <h3 className=' text-3xl mb-2'>عن العقار</h3>
                <p className='text-lightGray'>شقة طابق ثاني للإيجار
                غرفتين + صالة + حمام + مطبخ
                العنوان / تل الهوا - محيط شارع 8 قريبة على البحر
                سعر الإيجار 600 شيكل
                يوجد مراعاة بسيطة
                </p>
            </div>
    </div>
  )
}

export default TopEstateInformation