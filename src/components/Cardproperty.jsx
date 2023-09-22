import React from 'react'

const Cardproperty = (props) => {
  return (
    <div className='bg-white max-w-2xl rounded-2xl'>
        <figure className='w-full'>
            <img className='h-full object-cover' src={props.images} alt="" />
        </figure>

        <div className=' flex flex-col gap-2'>
            <h1 className=' font-bold text-4xl'>{props.price}</h1>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        
        <div className='flex pt-8 border-t-[1px] border-neutral-80 justify-between'>
            <div className='flex'>
                <span class="material-symbols-outlined">bed</span>
                <p>3 Bed</p>
            </div>
            <div className='flex'>
                <span class="material-symbols-outlined">bed</span>
                <p>3 Bed</p>
            </div>
            <div className='flex'>
                <span class="material-symbols-rounded meta-icon" aria-hidden="true">straighten</span>
                <p>1430 sqft</p> 
            </div>
        </div>
    </div>
  )
}

export default Cardproperty