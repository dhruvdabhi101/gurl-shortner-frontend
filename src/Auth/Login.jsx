import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import formFields from './login.json';
import axios from 'axios';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    const res = await axios.post("http://127.0.0.1:3000/user/signin", data)
    if(res.status === 200) {
      console.log(res.data);
    }
  };

  return (
    <div className='text-white flex flex-col justify-center items-center w-full h-screen gap-10'>
      <h1 className='text-4xl font-semibold'>Log-In</h1>

      {/* form starts from here */}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 p-5'>
        {/* Render form fields from JSON */}
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
  );
}
