import React from 'react'
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Signup() {

  const {register, handleSubmit, formState:{errors}, watch} = useForm();
  const password = watch('password');

  const onSubmit = data => console.log(data);

  return (
    <div className='text-white flex flex-col justify-center items-center w-full h-screen gap-10'>
        <div className='text-4xl font-semibold'>
          <h1>Sign-Up</h1>
        </div>

        {/* form starts from here */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 p-5'>

          {/* email */}
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-slate-200 '>E-Mail: </label>
            <input type='email' name='email' {...register(
              'email', {
                required:'Email is required',
                pattern:{value: /\S+@\S+\.\S+/, message:'Email is invalid'}})} className='text-black border-none focus:border-transparent focus:outline-none px-5 py-1.5 rounded-xl w-80'></input>

                {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
          </div>

          {/* username */}
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-slate-200'>Username: </label>
            <input type='text' name='username' {...register(
              'username', {
                required:'Username is required',
                minLength:{value:6, message:'Username must be 6 characters long'}})} className='text-black border-none focus:border-transparent focus:outline-none px-5 py-1.5 rounded-xl w-80'></input>

                {errors.username && <span className='text-red-600'>{errors.username.message}</span>}
          </div>

          {/* password */}
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-slate-200'>Password: </label>
            <input type='password' name='password' {...register('password', {
              required:'Password is required', minLength:{value:8, message:'Password must be 8 characters long'}})} className='text-black border-none focus:border-transparent focus:outline-none px-5 py-1.5 rounded-xl w-80'></input>

            {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
          </div>

          {/* confirm password */}
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-slate-200'>Confirm password: </label>
            <input type='password' name='confirmPassword' {...register('confirmPassword', {
              required:'Confirm password is required', validate:value => value === password || 'Password do not match'})} className='text-black border-none focus:border-transparent focus:outline-none px-5 py-1.5 rounded-xl w-80'></input>

            {errors.confirmPassword && <span className='text-red-600'>{errors.confirmPassword.message}</span>}
            </div>

            {/* button */}
            <div className='text-center self-center px-5 py-3 rounded-xl bg-white text-black w-52 border-[1px] border-white hover:bg-transparent hover:text-white hover:transition-all ease-in-out duration-200 cursor-pointer'>
              <button type='submit'>Sign Up</button>
            </div>

            {/* for login */}
            <div className='flex gap-5'>
              <label className='text-slate-500'>Already have an account?</label>
              <Link to='/login' className='hover:underline'>Log-In</Link>
            </div>

        </form>
    </div>
  )
}
