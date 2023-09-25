import React from 'react'

const Cardproperty = (props) => {
  return (
    <div className='bg-white max-w-2xl rounded-2xl overflow-hidden shadow-shadow-2 -rounded--radius-large'>
        <img className='h-full object-cover ' src={props.images} alt="" />
        <div className=' flex flex-col gap-2 py-5 px-6'>
            <h1 className=' font-bold text-3xl'>{props.price}</h1>
            <h3 className=' font-bold text-2xl text-neutral-20'>{props.title}</h3>
            <p className=' text-neutral-40 text-[15px]'>{props.description}</p>
        </div>
        
        <div className='flex  border-t-[1px] font-semibold text-lg border-neutral-80 justify-between px-7 py-8'>
            <div className='flex items-center'>
                <span class="material-symbols-outlined">bed</span>
                <p>3 Bed</p>
            </div>
            <div className='flex items-center'>
                <span class="material-symbols-outlined">bed</span>
                <p>3 Bed</p>
            </div>
            <div className='flex items-center'>
                <span class="material-symbols-rounded meta-icon" aria-hidden="true">straighten</span>
                <p>1430 sqft</p> 
            </div>
        </div>
    </div>
  )
}

export default Cardproperty