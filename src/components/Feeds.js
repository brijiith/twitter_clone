import React from 'react'
import sparkle from '../assets/svg/sparkle.svg'
import Input from './Input'
import Posts from './Posts'
import profile from '../assets/images/profile.png'
import feed from '../assets/images/feedPhoto.png'

function Feeds() {
  return (
    <div className=' flex-grow border-l border-r border-borderColor w-13 ml-72'>
       <div className="text-textColor flex items-center  px-4 sticky top-0 z-50 bg-primary border-b border-borderColor">
       <h2 className="text-lg font-bold">Latest Tweets</h2>
       <div className="hoverName  flex items-center justify-center ml-auto">
          <img src={sparkle} alt='' className="  "/>
        </div>
        </div>

        <Input/>
        <Posts
            
            displayName="Adem ilter ✨"
            username= "@ademilter"
            date= "1h"
           profile={profile}
            image={feed}
            caption={"Tam girişimci olucam çocuk ağlıyor."}
          />
  
    </div>
  )
}

export default Feeds