/* eslint-disable sort-imports */
'use client';
import {useEffect, useRef} from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
const Video = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: '/videos/ai1.mp4',
            type: 'video/mp4',
          },
        ],
      });
    }
  });

  return (
    <>
      <div className=" relative mt-5 h-fit  overflow-hidden  rounded-xl bg-zinc-900  px-3 pb-4  pt-6">
        <div className="absolute left-3 top-2 flex gap-1">
          <div className="h-2 w-2 rounded-full bg-red-600" />
          <div className="h-2 w-2 rounded-full bg-yellow-300" />
          <div className="h-2 w-2 rounded-full bg-green-600" />
        </div>

        <iframe
          width="600"
          className="h-full w-full rounded-lg sm:h-80 sm:w-96 md:w-[30rem] xl:h-[400px] xl:w-[680px] "
          height="530"
          src="https://www.youtube.com/embed/bSvTVREwSNw?si=AaTxBZA5g9HS7Ru1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Video;
