import React from 'react'
import InputLabel from '../components/ui/InputLabel'
import { Link } from 'react-router-dom'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useMutation } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import {loginUser} from '../redux/userSlice'
import {useDispatch} from 'react-redux'

interface IFormInputs {
    email:string
    password:string
}


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { handleSubmit, control, formState: { errors },} = useForm<IFormInputs>({
        defaultValues: {
            password:"", email:""
        },
    });

    const {mutateAsync , isLoading} = useMutation(handleLogin);
    const onSubmit: SubmitHandler<IFormInputs> = (data) => mutateAsync(data)

    async function handleLogin(dataForm:IFormInputs)
    {
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}/user/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(dataForm)
            })
            const data = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: data.message,
                })
                throw new Error('failed occured')
            }
            dispatch(loginUser({user:{id:data.user.id,name:data.user.name},token:data.token}))
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
    }

    return (
    <div className='grid grid-cols-12'>
        <div className=' md:block hidden col-span-8'>
            <img 
            className='w-full h-[100vh] object-fill'
            src="https://images.pexels.com/photos/6039244/pexels-photo-6039244.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className=' col-span-12 md:col-span-4'>
            <h3 className='h-[80px] flex items-center justify-center font-bold text-2xl border-b-gray-300 border-b-[1px]'>عقاري</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] mx-auto my-5'>
                <div className='mb-5'>
                    <InputLabel text='البريد الالكتروني'/>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                        <input type="email" placeholder='البريد الالكتروني' {...field}
                        className='block mt-1 bg-transparent border-[1px] border-lightGray outline-none w-full p-1 text-[14px] h-[30px] rounded-[4px]
                        focus:ring-blue-500 focus:border-blue-500'/>}
                        />
                        {errors.email?.type === "required" && (
                            <p className='text-red-600 text-[14px] mt-1'>هذا الحقل مطلوب</p>
                    )}
                </div>
                <div className='mb-5'>
                    <InputLabel text='كلمة المرور'/>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                        <input type="password" placeholder='كلمة المرور' {...field}
                        className='block mt-1 bg-transparent border-[1px] border-lightGray outline-none w-full p-1 text-[14px] h-[30px] rounded-[4px]
                        focus:ring-blue-500 focus:border-blue-500'/>}
                        />
                        {errors.password?.type === "required" && (
                            <p className='text-red-600 text-[14px] mt-1'>هذا الحقل مطلوب</p>
                    )}
                </div>
                {
                !isLoading?
                <button className='w-full bg-primary text-white rounded-[20px] py-2 duration-200 hover:opacity-80'>تسجيل مستخدم جديد</button>
                :
                <button className='w-full bg-primary text-white rounded-[20px] py-2 duration-200 opacity-80'>تسجيل مستخدم جديد ...</button>
                }
                <h4 className=' text-center text-[14px] mt-4'> ليس لديك حساب؟ <Link className='text-primary' to={"/signup"}>تسجيل مستخدم جديد</Link></h4>
            </form>
        </div>
    </div>
    )
}

export default Login