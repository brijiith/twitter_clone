import React from 'react'

function SidebarTag(props) {
  return (
    <div className='slideButtons flex p-3.5   xl:justify-start text-xl gap-x-5 hoverName'>
   <img className='' src={props.Icon} alt=''/>
       <h2 className='text-textColor text-lg font-bold leading-6'> {props.text}</h2>
        
    </div>
  )
}

export default SidebarTag