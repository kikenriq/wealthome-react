import React from 'react'


const Hero = () => {
  return (
    <div className=' w-screen px-5 h-screen bg-gradient-to-l from-[#0F4392] to-[#001D3D]'>
        <img className='relative h-screen object-cover ' src="/images/bg-pattern.png" alt="" />

        <div className=' pt-[130px] text-white flex flex-col gap-8'>
            <h1 className=' font-bold text-[28px]'>Find a place where you can be yourself.</h1>
            <p className='text-[12px] leading-8'>If your are looking for a place where you can be yourself, dont't give up.
                Keep searching until you find a place that feels like home.
            </p>
        </div>

        <form action="./" className=' grid p-2 mt-8 -rounded--radius-large gap-2 bg-neutral-100 z-10'>

            <label htmlFor="" className='relative rounded-2xl hover:bg-neutral-95'>
                <span className='absolute top-[12px] left-[16px] font-semibold text-neutral-5'>Want to</span>

                <select name="want-to" className='cursor-pointer rounded-2xl pt-[40px] px-[16px] pb-[12px]' id="">
                    <option value="buy" selected>Buy</option>
                    <option value="sell" selected>Sell</option>
                    <option value="rent" selected>Rent</option>
                </select>

                <span class="material-symbols-outlined top-1/2 absolute right-4 text-primary-100">real_estate_agent</span>
            </label>

            <label htmlFor="" className='relative rounded-2xl text-neutral-50'>
                <span className='absolute top-[12px] left-[16px] font-semibold text-neutral-5'>Property type</span>

                <select name="property-type" className='cursor-pointer rounded-2xl pt-[40px] px-[16px] pb-[12px]' id="">
                    <option value="any" selected>Any</option>
                    <option value="houses" selected>Houses</option>
                    <option value="apartments" selected>Apartments</option>
                    <option value="villa" selected>Villa</option>
                    <option value="bungalow" selected>Bungalow</option>
                    <option value="loft" selected>Loft</option>
                </select>

                <span class="material-symbols-rounded top-1/2 absolute right-4 text-primary-100" aria-hidden="true">gite</span>
            </label>

            <label className='relative rounded-2xl text-neutral-50' htmlFor="">
                <span className='absolute top-[12px] left-[16px] font-semibold text-neutral-5'>Location</span>

                <input type="text" className='rounded-2xl pt-[40px] px-[16px] pb-[12px]' name="Location" placeholder='Street, City, Zip...' />

                <span class="material-symbols-rounded top-1/2 absolute right-4 text-primary-100" aria-hidden="true">location_on</span>
            </label>

            <button type="submit" className='flex justify-center gap-2 px-6 items-center -rounded--radius-medium h-24 bg-primary-100 hover:to-primary-80 text-neutral-100' >
                <span class="material-symbols-rounded" aria-hidden="true">search</span>

                <span className='text-white'>Search</span>
            </button>

        </form>

    </div>
  )
}

export default Hero