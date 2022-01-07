import React from 'react';
import { useEffect } from 'react';

const IntroSection = () => {
  const slides = document.getElementsByClassName('slide');
  let i = 0;

  const slider = () => {
    setTimeout(() => {
      slides[i]?.classList?.remove('active');
      slides[i + 1]?.classList?.add('active');
      i++;
      if (i < slides.length) {
        slider();
      } else {
        slides[0].classList.add('active');
        i = 0;
        slider();
      }
    }, 3500);
  };

  useEffect(() => {
    slider();
    return () => {
      clearTimeout(slider);
    };
  }, []);

  return (
    <div className='bg-gray-900 relative text-gray-100'>
      <a
        href='#'
        className='flex alignItems align-baseline sm:p-8 p-5 '>
        <img
          src='https://pages.github.com/images/logo.svg'
          className='mx-auto h-5 sm:h-auto '></img>
      </a>
      <a
        href='#'
        className='sm:text-sm text-xs font-semibold bg-gray-600 sm:p-2 p-1  absolute right-3 top-3 rounded-md text-gray-400 hover:text-gray-100'>
        Pages Help
      </a>

      <h1 className='mt-4 mx-auto mb-auto sm:text-5xl text-2xl max-w-4xl font-extralight text-center text-gray-100 font-sans tracking-wider'>
        Websites for you and your projects.
      </h1>
      <h2 className='mt-4 font-extralight text-gray-400 tracking-wider text-md'>
        Hosted directly from your{' '}
        <a href='#' className='underline text-gray-50'>
          GitHub repository
        </a>
        . Just edit, push, and your changes are live.
      </h2>
      <div
        className='relative align-baseline  mt-8 p-0 mx-auto max-w-4xl'
        id='slideshow'>
        <img
          src='https://pages.github.com/images/slideshow/bootstrap.png'
          className='slide active'
          alt=''></img>
        <img
          src='https://pages.github.com/images/slideshow/yeoman.png'
          className='slide'
          alt=''></img>
        <img
          src='https://pages.github.com/images/slideshow/facebookdesign.png'
          className='slide'
          alt=''></img>
        <img
          src='https://pages.github.com/images/slideshow/foundation.png'
          className='slide'
          alt=''></img>
        <img
          src='https://pages.github.com/images/slideshow/ghtraining.png'
          className='slide'
          alt=''></img>
        <img
          src='https://pages.github.com/images/slideshow/ghtraining.png'
          className='z-0 opacity-0'
          alt=''></img>
      </div>
    </div>
  );
};

export default IntroSection;
