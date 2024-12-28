"use client"

import React, { useEffect, useRef, useState } from 'react'
import Video from '../reels/Video'
import Quiz from '../reels/Quiz'
import { useSelector } from 'react-redux'
//import { videosList } from '../data/videosData';
// import { getVideoList } from '../services/api/video/controllers/listVideos';
// import { findResolutions, maxResolution, videoUrlCreator } from '../utilities/resolutionExtractor';
// import { userLikedVideos } from '../services/api/user/controllers/userLikedVideos';

const ReelPlayer = ({ userid="",videos=[] }) => {
  const videoContainerRef = useRef();
  const [activeVideo, setActiveVideo] = useState(0);
  const [videosList, setVideosList] = useState([...videos]);
  const [videoIds, setVideoIds] = useState([]);
  const [videosLikedList, setVideosLikedList] = useState([]);
  
  const handleScroll = (e) => {
    //simple logic - just detect how far the present video is from the center of viewport

    const videos = videoContainerRef.current.children;
    let newActiveIndex = activeVideo;
    let closestDis = Infinity;
    for (let index = 0; index < videos.length; index++) {
      const rect = videos[index].getBoundingClientRect();
      const disFromCenter = Math.abs(rect.top + rect.height/2 - window.innerHeight/2);
      if (disFromCenter < closestDis) {
        closestDis = disFromCenter;
        newActiveIndex = index;
      }
    }
    if (newActiveIndex !== activeVideo) {
      setActiveVideo(newActiveIndex);
    }
  }

  useEffect(() => {
    const container = videoContainerRef.current;
    container.addEventListener("scroll",handleScroll);
    return () => container.removeEventListener('scroll',handleScroll);
  },[activeVideo]);

  const user = useSelector(state => state.user);
  console.log("videos",videosList);
  
  return (
    <div ref={videoContainerRef} className='reelplayer_frame shadow h-[560px] overflow-scroll snap-y snap-mandatory scroll-smooth bg-neutral-900 ' style={{ aspectRatio:"9/16"}}>
      {
        videos.map(item => [item,item]).flat().map((video, ind) => {
           if(ind%2 === 0) return <Video key={ind} videoid={video?.vid_id} video={video} userid={user.userId} likes={video?.likes_count} username={"nishant"} videosLikedList={[]} active={activeVideo === ind} />
           else return <Quiz key={ind} question={video.question} explanation={video.explanation} option_1={video.option_1} option_2={video.option_2} option_3={video.option_3} option_4={video.option_4} correct_option={video.correct_option} />
        }
        )
      }
    </div>
  )
}

export default ReelPlayer