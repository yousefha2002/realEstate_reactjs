import React from 'react'
import CategoryBox from './CategoryBox'
import { useCategoriesWithEstates } from '../../hooks/useCategories'

export default function Categories() {
    const {data,isLoading} = useCategoriesWithEstates()
    console.log(data)
    return (
        <div className='container px-2 xl:px-6 my-[60px]'>
            <div className='grid lg:grid-cols-2 gap-7'>
                {
                    !isLoading
                    ?
                    data&&data.map((item)=><CategoryBox key={item.id} item={item}/>)
                    :
                    ""
                }
            </div>
        </div>
    )
}
