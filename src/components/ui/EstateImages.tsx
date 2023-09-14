import React from 'react'
import ModalImage from "react-modal-image";


function EstateImages() {
  return (
        <div className='border-b-[1px] py-7 border-b-gray-300'>
            <h3 className=' text-3xl mb-2'>صور العقار</h3>
            <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2'>
                <div className='flex items-center gap-x-[6px]'>
                    <ModalImage
                    small={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                    large={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                    alt=""
                    />
                </div>
                <div className='flex items-center gap-x-[6px]'>
                    <ModalImage
                        small={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        large={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt=""
                        />
                </div>
                <div className='flex items-center gap-x-[6px]'>
                    <ModalImage
                        small={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        large={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt=""
                        />
                </div>
                <div className='flex items-center gap-x-[6px]'>
                    <ModalImage
                        small={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        large={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt=""
                        />
                </div>
                <div className='flex items-center gap-x-[6px]'>
                    <ModalImage
                        small={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        large={"https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt=""
                        />
                </div>
            </div>
        </div>  
    )
}

export default EstateImages