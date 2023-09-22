import React from 'react'
import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? 'bg-primary-40 h-[72px]' : 'bg-none h-[100px]'}  fixed top-0 left-0 w-screen py-6 px-5 z-30 flex justify-between items-center`}>
        
        <div>
            <img src="/images/logo.png" alt="" />
        </div>

        <button className='bg-white cursor-pointer inline-flex rounded-xl text-[15px] p-2'
        onClick={() => setMobileNav(!mobileNav)}>
          <span class="material-symbols-outlined">menu</span>
        </button>

        <div className={`${mobileNav ? ' opacity-100 scale-100' : ' opacity-0 scale-50'} transition-all origin-top-right absolute text-[15px] top-[75%] z-40 right-[16px] shadow-md bg-neutral-100 min-w-[260px] px-8 py-8 rounded-3xl`}>
          <ul className='grid gap-4'>
            <li><a className='px-1 py-3 text-neutral-30 hover:text-primary-80 font-semibold' href="#">Home</a></li>
            <li><a className='px-1 py-3 text-neutral-30 hover:text-primary-80 font-semibold' href="#">Rent</a></li>
            <li><a className='px-1 py-3 text-neutral-30 hover:text-primary-80 font-semibold' href="#">Sell</a></li>
            <li><a className='px-1 py-3 text-neutral-30 hover:text-primary-80 font-semibold' href="#">Buy</a></li>
            <li><a className='px-1 py-3 text-neutral-30 hover:text-primary-80 font-semibold' href="#">About</a></li>
            <li><a className='px-1 py-3 text-neutral-30 hover:text-primary-80 font-semibold' href="#">Login</a></li>
          </ul>
          <button className='px-8 py-5 bg-primary-100 text-neutral-100 rounded-3xl'>
            <a href="#">Get Started</a>
          </button>
        </div>

    </header>
  )
}

export default Header