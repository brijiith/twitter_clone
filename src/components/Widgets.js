import React from 'react'
import search from '../assets/svg/search.svg'
import settings from '../assets/svg/settings.svg'
import Trending from './Trending'

function Widgets() {
  return (
    <div className="inline ml-8  py-1 space-y-5">
      <div className="sticky top-0 py-1.5  z-50 w-80 ">
        <div className="flex items-center bg-[#202327] mb-6 p-3 rounded-full relative">
          <img  className=" z-50" src={search} alt=''/>
          <input
            type="text"
            className="bg-transparent placeholder-gray outline-none text-textColor absolute inset-0 pl-11 border border-transparent w-full focus:border-theme rounded-full focus:bg-primary focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
<div className='divide-y divide-borderColor bg-[#202327]  rounded-lg w-full'>
<div className='p-4 flex justify-between'>
    <h1 className='text-textColor text-xl leading-6 font-bold'>Trends for you</h1>
<img className='' src={settings} alt=''/>
</div>
<Trending
line="Trending in Turkey"
hash="Fransa'da 15,5"
tweet="8,130 Tweets"
/>
<Trending
line="Soccer · Trending"
hash="14 Haziran'da"
tweet="4,113 Tweets"
/>
<Trending
line="Trending in Turkey"
hash="#diyanetkapatılsın"
tweet="8,570 Tweets"
/>
<Trending
line="Trending in Turkey"
hash="#KabineSınavıErteler"
tweet="61.8K Tweets"
/>
<Trending
line="Music · Trending"
hash="Travis Scott"
tweet="23.3K Tweets"
/>

<h2 className='cursor-pointer text-theme px-4 py-2.5 hover:text-[#1a8cd8]'> Show More</h2>



</div>

      </div>

      </div>

      
  )
}

export default Widgets