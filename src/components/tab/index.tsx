import React from 'react'

interface TabInterface {
  icon: string,
  count: number;
  category: string;
  bgIconColor: string;
}
function Tab({
  icon, 
  count, 
  category,
  bgIconColor
}: TabInterface) {
  return (
    <div className='bg-[#364153] rounded-md flex items-center px-8 py-4 w-72 mx-4 mt-2'>
      <div className='relative flex justify-center w-14 h-14 mr-4'>
        <div className='top-0 right-0 w-full h-full absolute opacity-30 p-4 rounded-full'
        style={{
          background: bgIconColor
        }}/>
        <img src={icon} alt="icon" width={30} height={30}/>
      </div>
      <div className='text-white'>
        <h3 className='opacity-70'>{count}
          <span className='text-lg'>+</span> </h3>
        <p className='opacity-70 text-xs'>{category}</p>
      </div>
    </div>
  )
}

export default Tab