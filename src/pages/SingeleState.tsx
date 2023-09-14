import React from 'react'
import EstateOwner from '../components/ui/EstateOwner'
import TopEstateInformation from '../components/ui/TopEstateInformation'
import EstateImages from '../components/ui/EstateImages'
import AddComment from '../components/ui/AddComment'
import EstateComments from '../components/ui/EstateComments'
import Layout from '../components/layout/Layout'

function SingeleState() {
  return (
    <Layout>
      <div className='container px-2 xl:px-6 grid grid-cols-12 gap-5'>
        <div className='col-span-12 md:col-span-8 order-2 md:order-1'>
            <TopEstateInformation/>
            <EstateImages/>
            <EstateComments/>
            <AddComment/>
        </div>
        <div className='col-span-12 md:col-span-4 order-1 md:order-2'>
            <EstateOwner/>
        </div>
    </div>
    </Layout>
  )
}

export default SingeleState