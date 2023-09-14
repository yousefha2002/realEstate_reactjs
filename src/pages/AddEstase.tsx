import React, { useCallback, useState } from 'react'
import EstaseInfo from '../components/addEstase/EstaseInfo'
import {useForm,SubmitHandler} from 'react-hook-form';
import { IFormInput } from '../types/FormInput';
import AdditionlInformation from '../components/addEstase/AdditionlInformation';
import AddImages from '../components/addEstase/AddImages';
import Images from '../components/addEstase/Images';
import PrimaryButton from '../components/ui/PrimaryButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import Layout from '../components/layout/Layout';

export default function AddEstase() {
    const [current,setCurrent] = useState(1)

    const {handleSubmit,register,control,watch} = useForm({
        defaultValues: {
            address: "",
            kind:"",
            category:"",
            space:0,
            price:0,
            currency:"",
            title:"",
            description:"",
            phone:"",
            period:0
            }
    });

    const onSubmit: SubmitHandler<IFormInput> = async (data:IFormInput) => {
        console.log(data)
        console.log(images)
    }

    function handleNavigateForm(move:string)
    {
        move==='next'?setCurrent(back=>back+1):setCurrent(back=>back-1)
    }

    /** handle add images */
    const [images,setImages] = useState<any[]>([])
    const handleAddImage = useCallback((file:any)=>
    {
        if(file)
        {
            setImages((back=>[...back ,file]))
        }
    },[images])

    const handleDeleteImage = useCallback((index:number)=>
    {
        setImages((prev) => {
            const updatedFiles = [...prev];
            updatedFiles.splice(index, 1);
            return updatedFiles;
            });
    },[images])

    return (
        <Layout>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='container mx-auto px-2 xl:px-6'>
                <div className='w-[700px] max-w-full'>
                    {
                        current===1?
                        <EstaseInfo watch={watch} handleNavigateForm={handleNavigateForm} control={control} register={register}/>
                        :
                        current===2?
                        <AdditionlInformation handleNavigateForm={handleNavigateForm} control={control} register={register}/>
                        :
                        <>
                        <AddImages onChange={handleAddImage}/>
                        <Images images={images} handleDeleteImage={handleDeleteImage}/>
                        <div className='mt-8 flex items-center gap-x-1'>
                            <PrimaryButton onClick={()=>handleNavigateForm('prev')} text="السابق"/>
                            <SecondaryButton type="submit" text='إضافة عقار'/>
                        </div>
                        </>
                    }
                </div>
            </div>
        </form>
        </Layout>
    )
}