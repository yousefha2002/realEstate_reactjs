import React from 'react'
import EstaseHeader from '../ui/EstaseHeader'

import {BiImageAdd} from 'react-icons/bi'
type props = {
    onChange:(file:any)=>void
}

export default function AddImages({onChange}:props) {
    return (
        <div>
            <EstaseHeader
            number={3}
            title='صور العقار'
            description='يمكنك إضافة صور للعقار مما يساعد المستخدمين لأفضل رؤية وإختيار لعقارك'/>
            <div className="my-[10px]">
                    <label htmlFor='images'>
                        <div className='flex items-center w-full gap-x-2 justify-center h-[80px] border-[1px] border-gray-500 border-dashed'>
                            <div><BiImageAdd /></div>
                            <h5 className='text-[15px] font-[600]'>اختر صورة أو أكثر</h5>
                        </div>
                    </label>
                <hr/>
            </div>
            <input onChange={(e)=>onChange(e.target.files ? e.target.files[0] : null)} hidden type='file' id="images"/>
        </div>
    )
}
