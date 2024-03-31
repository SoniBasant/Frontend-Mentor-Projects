import React, { useState } from 'react';

import {Navigate} from 'react-router-dom';

import illustrationImageDesktop from './assets/images/illustration-sign-up-desktop.svg';
import illustrationImageMobile from './assets/images/illustration-sign-up-mobile.svg';
import iconList from './assets/images/icon-list.svg';

// email component
function EmailComponent({ value, onChange }) {
  return (
    <input 
      type="email" 
      id="email"
      value={value}
      onChange={onChange} 
      placeholder='email@company.com'
      className='border rounded-md p-2 pl-4 font-robotoRegular text-CharcoalGrey text-mediumSize cursor-pointer w-full xl:text-baseSize'
    />
  )
}

// button component
function ButtonComponent({ onClick }) {
  return (
    <>
      <button
        onClick={onClick} 
        className='bg-DarkSlateGrey text-white text-belowSize font-robotoBold py-3 rounded w-full hover:bg-Tomato xl:text-baseSize hover:shadow-colorShadow'>
        Subscribe to monthly newsletter
      </button>
    </>
  )
}

// stats change area
// email validation message
// email input
// button input
function ActivityArea() {
  const [emailInput, setEmailInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  // email validation
  function EmailFormat(mail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
  }

  // Button click action for email validation
  // wrong ip > different err msg for empty and non-valid input
  // right ip > no err msg, set valid email (to navigate thank you page), set email ip in session storage
  function handleBtnClick() {
    if(emailInput === "") {
      setErrorMsg('Enter your Email')
    } else if(!EmailFormat(emailInput)) {
      setErrorMsg('Valid email required');
    } else {
      setErrorMsg('');
      setValidEmail(true);
      sessionStorage.setItem("userEmail", emailInput);
    }
  }

  // for email input
  function handleEmailChange(e) {
    setEmailInput(e.target.value);
  }

  return (
    <div className='sm:mt-2'>
      {validEmail ? (
        <Navigate to = "/thankyou"/>
      ):(
        <>
          <div className='flex flex-col space-y-1'>
            <div className='flex justify-between'>
              <small className='text-DarkSlateGrey font-robotoBold'>Email address</small>
              <small className='text-Tomato font-robotoBold'>{errorMsg}</small>
            </div>
            <EmailComponent value={emailInput} onChange={handleEmailChange} />
          </div>
          <ButtonComponent onClick={handleBtnClick} />  
        </>
      )}
    </div> 
  );
}

// main page component
function App() {
  return (
    <>
      <div className='white-space flex flex-col-reverse items-center space-x-0 bg-white p-0 pb-10 sm:flex-row sm:space-x-2 sm:p-2 sm:pb-2'>
        {/* text part*/}
        <main className='flex-1 px-7'>
          <div className='flex flex-col justify-center h-full space-y-4'>
            <header>
              <h1 className='text-4xl font-robotoBold text-DarkSlateGrey mt-8 xl:text-5xl sm:mt-0'>Stay updated!</h1>
            </header>
            <p className='text-DarkSlateGrey text-belowSize font-robotoRegular lg:text-mediumSize'>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className='list-none m-0 text-DarkSlateGrey text-belowSize font-robotoRegular space-y-2 lg:text-mediumSize'>
              <li className='flex items-start'>
                <img src={iconList} alt="List Icon" className="w-4 h-4 mr-2 mt-1" />
                  Product discovery and building what matters
              </li>
              <li className='flex items-start'>
                <img src={iconList} alt="List Icon" className="w-4 h-4 mr-2 mt-1" />
                  Measuring to ensure updates are a success
              </li>
              <li className='flex items-start'>
                <img src={iconList} alt="List Icon" className="w-4 h-4 mr-2 mt-1" />
                And much more!
              </li>
            </ul>
            
            <ActivityArea />
          </div>
        </main>

        {/* image part */}
        <img className='flex-1 illustration hidden sm:block' src={illustrationImageDesktop} alt='Illustration desktop' />
        <img className='flex-1 illustration block sm:hidden' src={illustrationImageMobile} alt='Illustration mobile' />
      </div>
      
    </>
  );
}

// export default App;
export default App;