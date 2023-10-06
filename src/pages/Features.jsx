import React from 'react'

const Features = () => {
  return (
    <div className='px-5 pt-20'>
      <div>
        <img className='aspect-[3/2] overflow-hidden -rounded--radius-extra-large' src="./images/feature-banner-1.jpg" alt="" />
      </div>
      <div className='flex flex-col gap-3 pt-5'>
        <h1 className=' font-bold text-4xl text-neutral-20'>We Specialize In Quality Home Renovations</h1>
        <p className=' text-2xl text-neutral-40'>Looking to renovate your home to reflect your style and personality? Look no further than our team of 
          experts who specialize in quality home renovations to transform your space into a dream home you’ll love. 
          From design to execution.</p>

          <div>
            <ul>
              <li className='flex text-2xl gap-2 items-center'>
                <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                <span>Smart Home</span>
              </li>
              <li className='flex text-2xl gap-2 items-center'>
                <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                <span>Smart Home</span>
              </li>
              <li className='flex text-2xl gap-2 items-center'>
                <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                <span>Smart Home</span>
              </li>
              <li className='flex text-2xl gap-2 items-center'>
                <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                <span>Smart Home</span>
              </li>
            </ul>
          </div>

      </div>

      <div>
        <img className='aspect-[3/2] overflow-hidden -rounded--radius-extra-large' src="./images/feature-banner-2.jpg" alt="" />
      </div>

      <div>
        <h1>We Specialize In Quality Home Renovations</h1>
        <p>Looking to renovate your home to reflect your style and personality? Look no further than our team of 
          experts who specialize in quality home renovations to transform your space into a dream home you’ll love. 
          From design to execution.</p>

          <div>
            <ul>

              <li>
              <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
              <span>Smart Home</span>
              </li>

              <li>
              <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
              <span>Beautiful Scene Around</span>
              </li>

              <li>
              <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
              <span>Exceptional lifestyle</span>
              </li>

              <li>
              <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
              <span>Complete 24/7 Security</span>
              </li>

            </ul>
          </div>
      </div>

    </div>
  )
}

export default Features