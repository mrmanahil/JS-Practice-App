import { CardMedia } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!videoRef.current.paused) {
        setSeconds(seconds + 1);
      }
    }, 1000);
    if (seconds.toString().includes("100")) {
      console.log("YES");
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div>
      <CardMedia
        autoPlay
        component="video"
        image={
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
        ref={videoRef}
        width="100%"
        height={500}
        controls
        style={{ boxShadow: "rgb(255 255 255 / 10%) 0px 30px 30px" }}
      />
      <div>
        <p>Custom Time Display: {seconds.toFixed(2)} seconds</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
