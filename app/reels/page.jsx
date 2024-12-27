import React from 'react'
import ReelPlayer from "@/components/reels/ReelPlayer";
// import sampleVideo from "@/public/assets/video1.mp4";

const page = () => {
  
  const reelsData = [
    {
      videoSrc: "/assets/video1.mp4",
      flashcardContent: "This is the flashcard for Reel 1.",
      quizOptions: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
    {
      videoSrc: "/assets/video1.mp4",
      flashcardContent: "This is the flashcard for Reel 2.",
      quizOptions: ["Option A", "Option B", "Option C", "Option D"],
    },
  ];

  return (
    <div className='flex items-center justify-center h-screen bg-neutral-900'>
      <ReelPlayer videos={[...reelsData,...reelsData]} />
    </div>
  )
}

export default page