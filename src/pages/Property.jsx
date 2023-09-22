import React from 'react'
import Cardproperty from '../components/Cardproperty'
import property1 from '../../public/images/property-1.jpg'
import property2 from '../../public/images/property-2.jpg'
import property3 from '../../public/images/property-3.jpg'
import property4 from '../../public/images/property-4.jpg'
import property5 from '../../public/images/property-5.jpg'
import property6 from '../../public/images/property-6.jpg'
import property7 from '../../public/images/property-7.jpg'
import property8 from '../../public/images/property-8.jpg'

const Property = () => {
  return (
    <div className='px-4 pt-10'>
        <div>
            <h1 className='text-[28px] font-bold'>Best home in your city</h1>
            <p>Lorem ipsum dolor sit amet consectetur. 
                In quisque scelerisque eget id facilisis. Aliquam in libero egestas at.
            </p>
        </div>
        <button className='flex items-center px-12 py-8 border-blue-300 gap-3 border-primary-100 border-[5px]'>
             <h1>Explore more</h1> 
            <span class="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
        </button>

        <div className='pt-16'>
            <Cardproperty 
            images={property1}
            price='$710.68'
            title='COVA Home Realty'
            description='1901 Thornridge Cir. Shiloh, Hawaii 81063'
            />
        </div>
    </div>
  )
}

export default Property