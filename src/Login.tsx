import React, { useState } from 'react'

export default function Login() {
  const [showButton, toggleButton] = useState(false);
  
  const handleShowButton = () => toggleButton(!showButton);

  return (
    <div className='my-10 flex justify-center items-center'>
             {showButton &&        
          <button  
            className='w-full rounded py-1 pt-2 bg-[#f6c344] text-sm font-bold text-gray-600 m-4 cursor-pointer hover:border-grey-300 hover:bg-yellow-500'>
            Enter email and password
          </button>
        }
      <div className="mx-2 w-96 border shadow rounded-lg bg-[#FCFCFC]">
        <div className="flex flex-col justify-center items-center p-12  border-b">
          <div className="login-input-box">
          <label >EMAIL</label> 
          <input type="email" />
          </div>
          <div className="login-input-box">
          <label>PASSWORD</label> 
          <input type="password" />
          </div>
          <button  
            onClick={() => {handleShowButton()}}
            className='w-full rounded py-1 pt-2 bg-[#f6c344] text-sm font-bold text-gray-600 m-4 cursor-pointer hover:border-grey-300 hover:bg-yellow-500'>
            LOGIN
          </button>
        </div>
          <button className='w-full h-full flex justify-center cursor-pointer py-5'>
            Forgot your
            <p className='text-yellow-500'>&nbsp;password</p>
            ?
          </button>
      </div>  
    </div>
  )
}
