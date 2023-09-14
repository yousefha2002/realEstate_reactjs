import EstaseHeader from '../ui/EstaseHeader'
import { Controller,UseFormRegister, Control } from 'react-hook-form';
import InputLabel from '../ui/InputLabel';
import { IFormInput } from '../../types/FormInput';
import SecondaryButton from '../ui/SecondaryButton';
import PrimaryButton from '../ui/PrimaryButton';

type props = {
    register : UseFormRegister<IFormInput>,
    control : Control<IFormInput>,
    handleNavigateForm:(move:string)=>void
}

export default function AdditionlInformation({register,control,handleNavigateForm}:props) {
    return (
        <div>
            <EstaseHeader
            number={2}
            title='بيانات اضافية للعقار بالإضافة إلى مالك العقار'
            description='من فضلك أدخل عنوان ووصف العقار بالإضافة إلى بيانات التواصل مع مالك العقار أو من ينوب عنه'/>
            <div className='px-10 my-6'>
                <div className='flex flex-col mb-6'>
                    <InputLabel text='العنوان'/>
                    <Controller
                    control={control}
                    {...register("title", { required: true })} 
                    render={({ field }) => <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...field}
                    autoComplete='off'/>
                    }
                    />
                </div>
                <div className='flex flex-col mb-6'>
                    <InputLabel text='الوصف'/>
                    <Controller
                    control={control}
                    {...register("description", { required: true })} 
                    render={({ field }) => <textarea rows={4} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...field}
                    autoComplete='off'></textarea>
                    }
                    />
                </div>
                <div className='flex flex-col mb-6'>
                    <InputLabel text='هاتف صاحب العقار'/>
                    <Controller
                    control={control}
                    {...register("phone", { required: true })} 
                    render={({ field }) => <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...field}
                    autoComplete='off'/>
                    }
                    />
                </div>
                <div className='py-4 flex items-center gap-x-1'>
                    <PrimaryButton onClick={()=>handleNavigateForm('prev')} text='السابق'/>
                    <SecondaryButton type='button' onClick={()=>handleNavigateForm('next')} text='التالي'/>
                </div>
            </div>
        </div>
    )
}
