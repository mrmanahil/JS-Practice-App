import { CardMedia } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const WithControlling_Browser = () => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const captions_array = [
    { start: 0, end: 2, message: "hello" },
    { start: 3, end: 4, message: "how" },
    { start: 5, end: 59, message: "Good Bye" },
  ];

  useEffect(() => {
    // Get the video element from the ref
    const videoElement = videoRef.current;

    // Add event listener for the timeupdate event
    const handleTimeUpdate = () => {
      // Update the current time and duration state
      setCurrentTime(videoElement.currentTime);
      setDuration(videoElement.duration);
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    // Remove the event listener when the component unmounts
    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    const VTTFile = makeVTT(captions_array);
    const vid = document.querySelector("video");
    const track = document.createElement("track");
    track.kind = "captions";
    track.label = "English";
    track.srclang = "en";
    track.src = URL.createObjectURL(VTTFile);
    vid.addEventListener("loadedmetadata", (evt) => {
      track.mode = "showing";
      vid.textTracks[0].mode = "showing"; // thanks Firefox
    });
    vid.append(track);

    function makeVTT(array) {
      const text = array.reduce((str, { start, end, message }, index) => {
        // you would also have to make a "seconds to timestamp" parser
        // but I leave it to the reader as an exercise
        return (
          str +
          `
      00:00:${start.toFixed(3).padStart(6, "0")} --> 00:00:${end.toFixed(3).padStart(6, "0")}
      ${message}`
        );
      }, `WEBVTT`);
      return new Blob([text], { type: "text/plain" });
    }
  }, []);

  return (
    <>
      <CardMedia
        component="video"
        //@ts-ignore
        image={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        autoPlay
        ref={videoRef}
        width="100%"
        height={500}
        controls
        style={{ boxShadow: "rgb(255 255 255 / 10%) 0px 30px 30px" }}
      />
      <div>
        {/* Display the real-time timer */}
        <p>Current Time: {formatTime(currentTime)}</p>
        <p>Duration: {formatTime(duration)}</p>
      </div>
    </>
  );
};

function formatTime(seconds) {
  const format = (val) => `0${Math.floor(val)}`.slice(-2);
  const hours = seconds / 3600;
  const minutes = (seconds % 3600) / 60;
  const secs = seconds % 60;
  return [hours, minutes, secs].map(format).join(":");
}

export default WithControlling_Browser;
