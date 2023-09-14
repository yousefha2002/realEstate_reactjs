import React from 'react'
import CategoryBox from './CategoryBox'
import { useCategories } from '../../hooks/useCategories'
import CategoryTitleSkeleton from '../skeleton/CategoryTitleSkeleton'

export default function Categories() {
    const dataa = ['','','','','','','','','','','','']
    const {isLoading,data} = useCategories()
    return (
        <div className='container px-2 xl:px-6 py-5 mb-10 overflow-x-auto links'>
            <div className='flex items-center gap-x-2 width-[700px] justify-center'>
                {
                    !isLoading
                    ?
                    data&&data.map(item=>
                    {
                        return <CategoryBox key={item.id} item={item}/>
                    })
                    :
                    <>
                        <CategoryTitleSkeleton/>
                        <CategoryTitleSkeleton/>
                        <CategoryTitleSkeleton/>
                        <CategoryTitleSkeleton/>
                        <CategoryTitleSkeleton/>
                    </>
                }
            </div>
        </div>
    )
}
