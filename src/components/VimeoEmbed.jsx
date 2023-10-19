// components/VimeoEmbed.js
import React from 'react';

const VimeoEmbed = ({ videoId }) => {
  return (
    <div style={{ padding: '61.24% 0 0 0', position: 'relative' }} className='bg-white rounded-2xl lg:mt-[17px] md:mt-[5px]'>
      <iframe 
        src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`} 
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture" 
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
        title="Vimeo video player"
      ></iframe>
    </div>
  );
};

export default VimeoEmbed;
