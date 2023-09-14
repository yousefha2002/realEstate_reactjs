import EstaseHeader from '../ui/EstaseHeader'
import { Controller,UseFormRegister, Control, useForm, UseFormWatch } from 'react-hook-form';
import InputLabel from '../ui/InputLabel';
import { IFormInput } from '../../types/FormInput';
import SecondaryButton from '../ui/SecondaryButton';

type props = {
    register : UseFormRegister<IFormInput>,
    control : Control<IFormInput>,
    watch:UseFormWatch<IFormInput>;
    handleNavigateForm:(move:string)=>void
}

export default function EstaseInfo({register,control,handleNavigateForm,watch}:props) {
    return (
        <div>
            <EstaseHeader
            number={1}
            title='بيانات العقار'
            description='من فضلك قم بتعبئة بيانات عقارك بدقة حتى نساعدك في إنتشار عقارك لأكبر عدد من المستخدمين.'/>
            <div className='px-10 my-6'>
                <div className='flex flex-col mb-6'>
                    <InputLabel text='موقع العقار'/>
                    <Controller
                    control={control}
                    {...register("address", { required: true })} 
                    render={({ field }) => <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...field}
                    autoComplete='off'/>
                    }
                    />
                </div>
                <div className='flex gap-x-3 items-center'>
                    <div className='flex flex-col mb-6 w-[55%]'>
                        <InputLabel text='نوع العقار'/>
                        <Controller
                        control={control}
                        {...register("category", { required: true })} 
                        render={({ field }) =><select {...field} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>اختر نوع العقار</option>
                            <option value="US">متجر</option>
                            <option value="CA">منزل</option>
                            <option value="FR">شقة</option>
                            <option value="DE">أرض</option>
                        </select>
                        }
                        />
                    </div>
                    <div>
                    <div className="flex">
                        <div className="flex items-center mr-4 gap-x-3">
                            <Controller
                            control={control}
                            {...register("kind", { required: true })} 
                            render={({ field }) => <input {...field} value="rent" id="inline-radio" type="radio" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"/>
                            }
                            />
                            <label className="ml-2 text-sm font-medium text-gray-900">إيجار</label>
                        </div>
                        <div className="flex items-center mr-4 gap-x-3">
                            <Controller
                            control={control}
                            {...register("kind", { required: true })} 
                            render={({ field }) => <input {...field} value="ownership" id="inline-radio" type="radio" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"/>
                            }
                            />
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">تمليك</label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='flex gap-x-3 sm:items-center sm:flex-row flex-col'>
                    <div className='flex flex-col mb-6'>
                        <InputLabel text='مساحة العقار'/>
                        <Controller
                        control={control}
                        {...register("space", { required: true })} 
                        render={({ field }) => <input type='number' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...field}
                        autoComplete='off'/>
                        }
                        />
                    </div>
                    <div className='flex flex-col mb-6'>
                        <InputLabel text='سعر العقار'/>
                        <Controller
                        control={control}
                        {...register("price", { required: true })} 
                        render={({ field }) => <input type='number' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...field}
                        autoComplete='off'/>
                        }
                        />
                    </div>
                    <div className='flex flex-col mb-6 flex-1'>
                        <InputLabel text='عملة العقار'/>
                        <Controller
                        control={control}
                        {...register("currency", { required: true })} 
                        render={({ field }) =><select {...field} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>اختر العملة </option>
                            <option value="US">دولار</option>
                            <option value="CA">شيقل</option>
                            <option value="FR">دينار</option>
                        </select>
                        }
                        />
                    </div>
                </div>
                {watch('kind')==="rent"&&<div className='flex flex-col mb-6'>
                    <InputLabel text='مدة الإيجار'/>
                    <Controller
                    control={control}
                    {...register("period", { required: true })} 
                    render={({ field }) => <input type='number' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...field}
                    autoComplete='off'/>
                    }
                    />
                </div>}
                <div className='py-4 flex items-center gap-x-1'>
                    <SecondaryButton type='button' onClick={()=>handleNavigateForm('next')} text='التالي'/>
                </div>
            </div>
        </div>
    )
}