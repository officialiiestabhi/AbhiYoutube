import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const{snippet,statistics}=info;
    const{thumbnails,title,channelTitle}=snippet;
  return (
    <div className='w-72 p-2 m-2 shadow-lg bg-slate-800'>
      
        <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail"></img>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
            
        </ul>
      </div>
    
  )
}

export default VideoCard
