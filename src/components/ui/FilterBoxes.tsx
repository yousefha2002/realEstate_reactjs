import React from 'react'
import { useCategories } from '../../hooks/useCategories'
import { useCurrencies } from '../../hooks/useCurrency'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useMutation } from '@tanstack/react-query'
import { FilterInput } from '../../types/FilterInput'

function FilterBoxes() {

    const categories = useCategories()
    const currencies = useCurrencies()

    /** handel form */
    const { handleSubmit, control,register} = useForm<FilterInput>({
        defaultValues: {
            space:"all",price:"all",category:"all",currecny:"all",type:"all"
        },
    });

    const {mutateAsync , isLoading} = useMutation(handleFilterEstates);
    const onSubmit: SubmitHandler<FilterInput> = (data) => mutateAsync(data)

    async function handleFilterEstates(data:FilterInput)
    {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-12'>
                <Controller
                control={control}
                {...register("category", { required: true })} 
                render={({field})=>
                <select {...field} className='col-span-6 md:col-span-4 lg:col-span-3 outline-none h-[50px] rounded shadow m-[2px] px-2 text-gray-500'>
                    <option value={'all'} className=' text-gray-800'>الكل</option>
                    {
                        !categories.isLoading&&categories.data?.map(item=>{
                            return <option key={item.id} value={item.id} className=' text-gray-800'>{item.title}</option>
                        })
                    }
                </select>
                }/>
                <Controller
                control={control}
                {...register("type", { required: true })} 
                render={({field})=>
                <select {...field} className='col-span-6 md:col-span-4 lg:col-span-3 outline-none h-[50px] rounded shadow m-[2px] text-gray-500'>
                    <option value="all" className=' text-gray-800'>ايجار/بيع</option>
                    <option value="0" className=' text-gray-800'>ايجار</option>
                    <option value="1" className=' text-gray-800'>بيع</option>
                </select>
                }/>
                <Controller
                control={control}
                {...register("price", { required: true })} 
                render={({field})=>
                <select {...field} className='col-span-6 md:col-span-4 lg:col-span-3 outline-none h-[50px] rounded shadow m-[2px] text-gray-500'>
                    <option value="all" className=' text-gray-800'>السعر</option>
                    <option value="0-500" className=' text-gray-800'>0 - 500</option>
                    <option value="500-1000" className=' text-gray-800'>500 - 10000</option>
                    <option value="1000-3000" className=' text-gray-800'>10000 - 30000</option>
                    <option value="30000-50000" className=' text-gray-800'>30000 - 50000</option>
                    <option value="+3000" className=' text-gray-800'>+50000</option>
                </select>
            }/>
                <Controller
                control={control}
                {...register("currecny", { required: true })} 
                render={({field})=>
                <select {...field} className='col-span-6 md:col-span-4 lg:col-span-3 outline-none h-[50px] rounded shadow m-[2px] text-gray-500'>
                    <option value="all" className=' text-gray-800'>الكل</option>
                    {
                        !currencies.isLoading&&currencies.data?.map(item=>
                            {
                                return  <option value={item.id} className=' text-gray-800'>{item.title}</option>
                            })
                    }
                </select>
                }/>
                <Controller
                control={control}
                {...register("space", { required: true })} 
                render={({field})=>
                <select {...field} className='col-span-6 md:col-span-4 lg:col-span-3 outline-none h-[50px] rounded shadow m-[2px] text-gray-500'>
                    <option value="all" className=' text-gray-800'>المساحة</option>
                    <option value="0-150" className=' text-gray-800'>0 - 150 متر</option>
                    <option value="150-250" className=' text-gray-800'>150 - 250 متر</option>
                    <option value="250-350" className=' text-gray-800'>250 - 350 متر</option>
                    <option value="350-500" className=' text-gray-800'>350 - 500 متر</option>
                    <option value="+500" className=' text-gray-800'>+500 متر</option>
                </select>
                }/>
                {
                isLoading?
                <button type="submit" className='col-span-6 md:col-span-4 lg:col-span-3 bg-primary m-[2px] text-white font-bold 
                opacity-80 duration-300'>بحث ...</button>
                :
                <button type="submit" className='col-span-6 md:col-span-4 lg:col-span-3 bg-primary m-[2px] text-white font-bold 
                hover:opacity-80 duration-300'>بحث</button>
                }
            </div>
        </form>
    )
}

export default FilterBoxes