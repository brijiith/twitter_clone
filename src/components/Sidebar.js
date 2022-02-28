import React from 'react'
import twitter from '../assets/svg/twitter.svg'
import SidebarTag from './SidebarTag'
import home from '../assets/svg/home.svg'
import explore from '../assets/svg/explore.svg'
import notify from '../assets/svg/notify.svg'
import message from '../assets/svg/message.svg'
import bookmark from '../assets/svg/bookmark.svg'
import lists from '../assets/svg/lists.svg'
import profilee from '../assets/svg/profilee.svg'
import more from '../assets/svg/more.svg'
import white from '../assets/images/white.png'
import profile from '../assets/images/profile.png'

function Sidebar() {
  return (
      <>
 <div className='sideList flex flex-col fixed h-full '>

  <div className='flex hoverName justify-center w-12 h-12 p-0 '> 
  <img className=' mx-auto my-auto ' src= {twitter}   alt=""/>
  </div>

  <div className="gap-y-5 mt-4 mb-2.5 ">

        <SidebarTag text="Home" Icon={home} active />
        <SidebarTag  text="Explore" Icon={explore} />
        <SidebarTag  text="Notifications" Icon={notify} />
        <SidebarTag  text="Messages" Icon={message} />
        <SidebarTag  text="Bookmarks" Icon={bookmark} />
        <SidebarTag  text="Lists" Icon={lists} />
        <SidebarTag  text="Profile" Icon={profilee} />
        <SidebarTag  text="More" Icon={more} />
        
      </div>
      <button className='bg-theme text-textColor px-20 py-4 text-base leading-5 font-bold rounded-full hover:bg-[#1a8cd8]'>Tweet</button>

      <div
        className="text-textColor flex items-center justify-center mt-auto hoverName ml-auto -mr-5"
        
      >
        <img
          src={profile}
          alt=""
          className=" mr-2.5"
        />
        <div className="inline leading-5 mr-12">
          <h4 className="font-bold hover:underline cursor-pointer">Adem ilter ✨</h4>
          <p className="text-gray hover:underline cursor-pointer">@ademilter</p>
        </div>
        < img className=''  src={white} alt=''/>
      </div>
  </div>
  </>
  )
}

export default Sidebar