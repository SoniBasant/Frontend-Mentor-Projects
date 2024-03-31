import React from 'react';
import iconSuccess from '../assets/images/icon-success.svg';
import { Link } from 'react-router-dom';

function ThankYouPage() {
  const emailInput = sessionStorage.getItem("userEmail");
  return (
    <div className='flex items-center justify-center'>
      <main className='thankyouWhite flex flex-col space-y-5 items-left content-center bg-white p-10 '>
        <section className='thankyouContent flex flex-col space-y-4'>
          <header>
            <img className='w-10 h-10 sm:w-12 sm:h-12' src={iconSuccess} alt="Success Icon" />
            <h2 
              className='font-robotoBold text-DarkSlateGrey  text-3xl  md:text-4xl'>
              Thanks for subscribing!
            </h2>
          </header>

          <p className='font-robotoRegular text-DarkSlateGrey text-mediumSize md:text-baseSize'>
          A confirmation email has been sent to <span className='font-robotoBold'>{emailInput}</span>.  
          Please open it and click the button inside to confirm your subscription.
          </p>
        </section>
        <Link className='dismissBtn bg-DarkSlateGrey rounded-md text-white font-robotoRegular text-belowSize py-3 hover:bg-Tomato hover:shadow-colorShadow' to='/'>
          Dismiss message
        </Link>
      </main>
    
    </div>
  )
}

export default ThankYouPage