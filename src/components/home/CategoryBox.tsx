import React from 'react'
import HeaderTitle from '../ui/HeaderTitle'
import EstaseBox from './EstaseBox'
import {Category} from '../../types/Category'

type props = {
    item:Category
}

export default function CategoryBox({item}:props) {
    return (
        <div>
            <HeaderTitle
            start={true}
            title="عقاري - شقق"
            description="عقاري يوفر لك جميع الشقق إيجار أو تمليك في مكان واحد"/>
            <div className='grid grid-cols-2 gap-7 mt-6'>
                {
                    item.estates?.map(estate=><EstaseBox estate={estate} key={item.id}/>)
                }
            </div>
        </div>
    )
}