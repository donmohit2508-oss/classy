import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const Register = () => {

    const [isShowPassword , setIsShowPassword] = useState(false);
    const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput=(e)=>{
    const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  }; 
  }
  

  return (
    <section className='section py-10'>
      <div className='container'>
        <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
            <h3 className="text-center text-[18px] text-black">Register with a new Account</h3>
            <form className='w-full mt-5'>
                <div className='form-group w-full mb-5'>
                    <TextField 
                    id="name"
                    name="name"
                    label="Full Name" 
                    variant="outlined" 
                    className='w-full'
                    onChange={onChangeInput}
                    />
                </div>
                <div className='form-group w-full mb-5'>
                    <TextField 
                    id="email" 
                    name="email" 
                    label="Email id" 
                    variant="outlined" 
                    className='w-full'
                    onChange={onChangeInput}
                    />
                    
                </div>
                <div className='form-group w-full mb-5 relative'>
                    <TextField 
                    type={isShowPassword === false ? 'password' : 'text'} 
                    id="password" 
                    name="password" 
                    label="Password " 
                    variant="outlined" 
                    className='w-full'
                    onChange={onChangeInput}/>

                    <Button className="absolute! right-[10px] top-[10px] text-black! z-50 w-[35px]! h-[35px]! min-w-[35px]! rounded-full!" onClick={() => setIsShowPassword(!isShowPassword)}>
                    {isShowPassword === false ? (
                        <IoEyeSharp className="text-[20px] opacity-75" />
                    ) : (
                        <IoEyeOffSharp className="text-[20px] opacity-75" />
                    )}
                    </Button>
                </div>


                <div className='flex items-center w-full mt-3 mb-3'>
                    <Button className='btn-org btn-lg w-full'>Register</Button>
                </div>
                
                <p className='text-center '>Already have an Account<Link className="text-[14px] font-[600] text-[#ff5252]" to="/login">Login</Link></p>

                <p className='text-center font-[500] pb-2'>Or continue to social account</p>
                <Button className='flex gap-3 w-full bg-[#f1f1f1]! btn-lg text-black!'><FcGoogle className='text-[20px]'/>Sign in with Google</Button>

            </form>
        </div>
      </div>
    </section>
  )
}

export default Register;