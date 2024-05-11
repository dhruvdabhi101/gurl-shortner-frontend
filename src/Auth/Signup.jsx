import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import formFields from './signup.json'; 
import axios from 'axios';

export default function Signup() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password');

  const onSubmit = async data => {
    const formData = {
      username: data.username,
      password: data.password,
      email: data.email
    }
    const res = await axios.post("http://127.0.0.1:3000/user/signup", formData)
    if(res.status === 200) {
      console.log(res.data);
    }
  };

  return (
    <div className='text-white flex flex-col justify-center items-center w-full h-screen gap-10'>
      <div className='text-4xl font-semibold'>
        <h1>Sign-Up</h1>
      </div>

      {/* form starts from here */}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 p-5'>
        {formFields.map(field => (
          <div key={field.name} className='flex flex-col gap-2'>
            <label className='font-medium text-slate-200'>{field.title}: </label>
            <input
              type={field.type}
              name={field.name}
              {...register(field.name, field.condition)}
              className='text-black border-none focus:border-transparent focus:outline-none px-5 py-1.5 rounded-xl w-80'
            />
            {errors[field.name] && <span className='text-red-600'>{errors[field.name].message}</span>}
          </div>
        ))}

        {/* Password */}
        <div className='flex flex-col gap-2'>
          <label className='font-medium text-slate-200'>Password: </label>
          <input
            type='password'
            name='password'
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message: 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long'
              }
            })}
            className='text-black border-none focus:border-transparent focus:outline-none px-5 py-1.5 rounded-xl w-80'
          />
          {errors.password && <span className='text-red-600 w-72 text-start'>{errors.password.message}</span>}
        </div>

        {/* Confirm Password */}
        <div className='flex flex-col gap-2'>
          <label className='font-medium text-slate-200'>Confirm password: </label>
          <input
            type='password'
            name='confirmPassword'
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              validate: value => value === password || 'Passwords do not match'
            })}
            className='text-black border-none focus:border-transparent focus:outline-none px-5 py-1.5 rounded-xl w-80'
          />
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
  );
}