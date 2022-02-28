import React from 'react'
import {  useState } from "react"
import profile from '../assets/images/profile.png'
import image from '../assets/svg/image.svg'
import gif from '../assets/svg/gif.svg'
import calendar from '../assets/svg/calendar.svg'
import emoji from '../assets/svg/emoji.svg'

function Input() {
    const [input, setInput] = useState("")
  return (
    <div className={`border-b border-borderColor p-3 flex space-x-3 
      }`}>
   <img className='cursor-pointer h-11 w-11' src={profile} alt=''/>
   <div className='divide-y divide-borderColor w-full'>
       <div>
       <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-gray text-lg placeholder-borderColor tracking-wide w-full min-h-[50px]"
          />
       </div>
       <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <div
                className="icon"
              >
                <img src={image} alt='' className='cursor-pointer mr-4' />
                <input
                  type="file"
                  hidden
    
                />
              </div>

              <div className="icon ">
              <img src={gif} alt='' className='cursor-pointer mr-4' />
              </div>

              <div className="icon" >
              <img src={calendar} alt='' className='cursor-pointer mr-4' />
              </div>

              <div className="icon"><img src={emoji} alt='' className='cursor-pointer mr-4' />
              </div>

       
            </div>
            <button
              className="bg-theme text-textColor rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8]  disabled:opacity-50 disabled:cursor-default"
            
            >
              Tweet
            </button>


   </div>
   
</div>






    </div>
  )
}

export default Input