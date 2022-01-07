import React from 'react';

const VideoSection = () => {
  return (
    <div className='relative bg-white text-gray-900 block'>
      <h1 className='align-baseline sm:text-5xl  text-2xl font-extralight mt-16'>
        What is GitHub Pages?
      </h1>
      <div className='aspect-w-8 aspect-h-3 mx-auto sm:mt-14 mt-5 max-w-4xl min-h-30'>
        <iframe
          src='https://www.youtube.com/embed/pfaSUYaSgRo'
          title='Github pages?'
          allowFullScreen
          frameBorder='0'></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
