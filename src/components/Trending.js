import React from 'react'
import arrow from '../assets/images/arrow.png'

function Trending(props) {
  return (
    <div className='py-1.5  px-4 flex justify-between'>
<div className='flex flex-col '>
<p className='text-sm text-gray hover:underline font-normal cursor-pointer'>{props.line}</p>
<p className='text-base text-textColor hover:underline font-bold cursor-pointer'>{props.hash}</p>
<p className='text-base text-gray font-normal hover:underline cursor-pointer'>{props.tweet}</p>
</div>
{/* <img className='' src={arrow} alt=''/> */}
    </div>
  )
}

export default Trending