import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form';

export default function Login() {

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = data => console.log(data);

  return (
    <div className='text-white flex flex-col justify-center items-center w-full h-screen gap-10'>
        <h1 className='text-4xl font-semibold'>Log-In</h1>

        {/* form starts from here */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 p-5'>
            {/* username */}
            <div className='flex flex-col gap-2'>
                <label className='font-medium text-slate-200'>Username: </label>
                <input type='text' name='username' {...register('username', {
                    required: 'Username is required'
                    })} className='text-black border-none focus:border-transparent focus:outline-none px-5 py-1.5 rounded-xl w-80'/>

                {errors.username && <span className='text-red-600'>{errors.username.message}</span>}
            </div>

            {/* Password */}
            <div className='flex flex-col gap-2'>
                <label className='font-medium text-slate-200'>Password: </label>
                <input type='password' name='password' {...register     ('password', {
                    required: 'Password is required'
                    })} className='text-black border-none focus:border-transparent focus:outline-none px-5 py-1.5 rounded-xl w-80'/>

                {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
            </div>

        {/* Button */}
        <div className='text-center self-center px-5 py-3 rounded-xl bg-white text-black w-52 border-[1px] border-white hover:bg-transparent hover:text-white hover:transition-all ease-in-out duration-200 cursor-pointer'>
          <button type='submit'>Login</button>
        </div>

        {/* for signup */}
            <div className='flex gap-5'>
                <label className='text-slate-500'>Don't have an account?</label>
                <Link to='/' className='hover:underline'>Sign-Up</Link>
            </div>
        </form>
    </div>
  )
}
