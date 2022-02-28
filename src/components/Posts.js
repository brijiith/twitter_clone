import React from 'react'
import like from '../assets/svg/like.svg'
import download from '../assets/svg/download.svg'
import comment from '../assets/svg/comment.svg'
import share from '../assets/svg/share.svg'

function Posts(props) {
  return (
    <div className="flex flex-col space-y-2 w-full">
     <div
      className="p-3 flex cursor-pointer border-b border-borderColor "  >
          <img
          src={props.profile}
          alt=""
          className="h-11 w-11 rounded-full mr-4"
        />
        <div className="text-gray">
            <div className="inline-block group flex">
              <h4
                className='font-bold text-[15px] mr-1.5 text-textColor group-hover:underline '>
                {props.displayName}
              </h4>
              <span
                className="text-sm mr-1.5  hover:underline cursor-pointer ml-1.5">
               {props.username}
              </span>
            
            ·{" "}
            <span className="hover:underline ml-1.5 text-sm ">
            {props.date}
            </span>
            </div>
              <p className="text-textColor text-[15px]  mb-3 mt-0.5">
               {props.caption}
              </p>
    
              <img className=' mb-3.5 rounded' src={props.image} alt=''/>

              <div className='flex '>
              <img className='mr-28' src={comment} alt=''/>
              <img className='mr-24' src={share} alt=''/>
              <img className='mr-28' src={like} alt=''/>
              <img className='' src={download} alt=''/>
              </div>
          </div>
       
        
     </div> 

     


    </div>
    
  )
}

export default Posts