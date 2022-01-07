import React from 'react';

const TutorialSection = () => {
  return (
    <div className='relative bg-white'>
      <h1 className='font-extralight sm:text-5xl text-2xl max-w-5xl text-center sm:mx-auto mx-4 mt-14 align-baseline leading-normal'>
        Ready to get started? Build your own site from
        scratch or generate one for your project
      </h1>
      <h2 className='font-extralight sm:text-xl  text-ms max-w-lg text-center sm:mx-auto mx-4 sm:mt-10 leading-normal align-baseline tracking-wider mt-5'>
        You get one site per GitHub account and
        organization, and unlimited project sites. Let's get
        started
      </h2>
      <ul className='text-center mx-auto align-baseline list-none my-10'>
        <li
          className='inline-block bg-blue-400  rounded-l-md s:px-4 sm:py-2 px-2 py-1 
        text-white font-normal text-xs sm:text-base border-1 border-blue-400'>
          User or organization site
        </li>
        <li
          className='inline-block sm:px-4 sm:py-2 px-2 py-1 font-normal border-solid rounded-r-md border-gray-400 text-xs
           sm:text-base border-1 border-l-0 box-content 
          hover:text-blue-400  hover:border-blue-400 transition-all ease-in'>
          Project site
        </li>
      </ul>
    </div>
  );
};

export default TutorialSection;
