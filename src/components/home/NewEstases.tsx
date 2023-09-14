import React from 'react'
import HeaderTitle from '../ui/HeaderTitle'
import NewEstaseBox from './NewEstaseBox';
import { useLastEstates } from '../../hooks/useEstates';
import EstateSkeleton from '../skeleton/EstateSkeleton';

export default function NewEstases() {
    const {data,isLoading} = useLastEstates()
    return (
        <div className='container mx-auto px-2 xl:px-6 mt-[30px] mb-[60px]'>
            <HeaderTitle 
            start={false}
            title="نقدم العقارات الأحدث لك" 
            description="عقاري يوفر لك معلومات حديثة وموثوقة تجعل العثور على العقار الذي تحلم به بسهولة وسرعة"
            />
            <div className='mt-8 grid sm:grid-cols-2 xl:grid-cols-4 gap-5'>
                {
                    isLoading
                    ?
                    <>
                    <EstateSkeleton/>
                    <EstateSkeleton/>
                    <EstateSkeleton/>
                    <EstateSkeleton/>
                    </>
                    :
                    data&&data.map(item=>
                        {
                            return <NewEstaseBox item={item} key={item.id}/>
                        })
                }
            </div>
            <div className='mt-8 flex justify-center'>
                <button className='bg-primary text-[14px] text-white font-bold py-2 px-4 rounded-[100px]'>
                    مشاهدة أحدث العقارات
                </button>
            </div>
        </div>
    )
}
