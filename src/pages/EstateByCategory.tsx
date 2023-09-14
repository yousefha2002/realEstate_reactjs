import React from 'react'
import FilterBoxes from '../components/ui/FilterBoxes'
import NewEstaseBox from '../components/home/NewEstaseBox'
import Layout from '../components/layout/Layout'
import { useEstatesbyCategory } from '../hooks/useCategories'
import { useParams } from 'react-router-dom'
import EstateSkeleton from '../components/skeleton/EstateSkeleton'

function EstateByCategory() {
  const {categoryId} = useParams()

  const {data,isLoading} = useEstatesbyCategory(categoryId)
  console.log(data)
  return (
    <Layout>
      <div className='container px-2 xl:px-6'>
        <FilterBoxes/>
        <div className='my-8 grid sm:grid-cols-2 xl:grid-cols-4 gap-5'>
            {
              isLoading?
              <>
                <EstateSkeleton/>
                <EstateSkeleton/>
                <EstateSkeleton/>
                <EstateSkeleton/>
              </>  
              :
              data?.estates?.map(item=><NewEstaseBox key={item.id} item={item}/>)
            }
        </div>
      </div>
    </Layout>
  )
}

export default EstateByCategory