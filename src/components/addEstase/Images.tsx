import React from 'react'
import ImageAdded from './ImageAdded'

type props = {
    images : any[],
    handleDeleteImage:(index:number)=>void
}

function Images({images,handleDeleteImage}:props) {
    return (
        <>
        {
        images.length>0&&
        <div className=' my-[10px] py-4'>
            <h5 className='text-[15px] font-[600] mb-2'>Selected Images</h5>
            <hr className='mb-[6px]'/>
            <div className='grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2'>
            {
                images.map((image,index)=><div  key={image.name+'aa'}>
                    <ImageAdded index={index} handleDeleteImage={handleDeleteImage} image={image}/>
                    </div>
                    )
            }
            </div>
            <hr className='mt-[6px]'/>
        </div>}
        </>
    )
}

export default React.memo(Images)