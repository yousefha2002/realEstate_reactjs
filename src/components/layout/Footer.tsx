import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#66347F]'>
            <div className='container mx-auto px-2 xl:px-6 py-10'>
                <h3 className='text-center text-white'>{new Date().getFullYear()} عقاري | جميع الحقوق محفوظة</h3>
            </div>
        </div>
    )
}
