import { CardMedia } from "@mui/material";
import React, { useEffect, useRef } from "react";

const WithControlling_Browser = () => {
  const videoRef = useRef(null);

  const captions_array = [
    { start: 0, end: 2, message: "hello" },
    { start: 3, end: 4, message: "how" },
    { start: 5, end: 59, message: "Good Bye" },
  ];

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
      00:00:${start.toFixed(3).padStart(6, "0")} --> 00:00:${end
            .toFixed(3)
            .padStart(6, "0")}
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
        image={
          "https://static-files-lms.s3.us-east-2.amazonaws.com/b9247207-bece-4b17-9d1c-e5bfad9c6122ForBiggerFun.mp4"
        }
        autoPlay
        ref={videoRef}
        width="100%"
        height={500}
        controls
        style={{ boxShadow: "rgb(255 255 255 / 10%) 0px 30px 30px" }}
      />
    </>
  );
};

export default WithControlling_Browser;
