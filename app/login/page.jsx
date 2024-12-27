"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/userReducer';
import { useRouter } from 'next/navigation';

const page = () => {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.user.auth);

  const router = useRouter();
  
  useEffect(() => {
    if (auth) {
      router.push('/');
    }
  },[auth])

  const [pass, setPass] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  let initialData = {
    email:"",
    password:""
  }

  const [formData, setFormData] = useState(initialData);

  const handleUserInput = (e) => {
    const { name,value } = e.target;
    setFormData({
      ...formData,[name]:value
    });
  }
  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { email,password } = formData;
      const data = await fetch(`${baseURL}/user/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify({ email:email.trim(),password:password.trim() })
      });
      const res = await data.json();
      
      if(data.status === 200){
        alert("Login successful");
        dispatch(login({ token:res.appUserToken}));
        router.push('/');
      }else if(data.status === 400){
        return alert("invalid credentials");
      }else if(data.status === 401){
        alert("Not a registered user");
        router.push('/signup');
      }else{
        throw new Error("Server error");
      }
    } catch (err) {
      // console.log(`An error occurred in login user:${err}`);
      alert("An error occurred in server");
    }finally{ setIsLoading(false); }
    setFormData(initialData);
  }

  return (
    <div className='flex flex-col justify-center items-center mt-40'>
          <form className='flex flex-col justify-center gap-6 p-4 shadow rounded' method='POST' onSubmit={handleLogin}>
           <h4 className='text-center capitalize font-bold text-2xl text-neutral-900'>Login</h4>
           <div className='border border-neutral-900 flex items-center rounded'>
           <span className='px-2 text-neutral-900'><i className="fa-solid fa-envelope"></i></span>
           <input className='outline-none p-2 flex-1 border-l border-neutral-900 font-semibold' type='email' placeholder='Email' autoComplete="off" name='email' value={formData.email} onChange={handleUserInput} required />
           </div>
           <div className='border border-neutral-900 flex items-center rounded'>
           <span className='px-2 text-neutral-900'><i className="fa-solid fa-key"></i></span>
           <input className='outline-none p-2 flex-1 border-l border-neutral-900 font-semibold' type={pass?'password':'text'} autoComplete="off" placeholder='Password' name='password' value={formData.password} onChange={handleUserInput} required />
           <span className='px-2 text-neutral-900'>{pass?<i className="fa-solid fa-eye-slash" onClick={() => setPass(false)}></i>:<i className="fa-solid fa-eye" onClick={() => setPass(true)}></i>}</span>
           </div>
            <button className='bg-neutral-900 hover:bg-neutral-700 text-white p-2 rounded' type='submit' disabled={isLoading}>{isLoading?'processing...':'Login'}</button>
         </form>
  </div>
  )
}

export default page