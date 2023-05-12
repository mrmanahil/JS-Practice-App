import { CardMedia } from "@mui/material";
import React, { useRef, useEffect } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const subtitles = [
    { text: "Hello world!", startTime: 1, endTime: 3 },
    { text: "How are you?", startTime: 5, endTime: 7 },
    { text: "Goodbye!", startTime: 10, endTime: 60 },
  ];

  useEffect(() => {
    const video = videoRef.current;
    const subtitleContainer = document.createElement("div");
    subtitleContainer.style.position = "relative";
    subtitleContainer.style.width = "100%";
    subtitleContainer.style.height = "100%";
    video.parentElement.appendChild(subtitleContainer);

    const subtitleElements = subtitles.map((subtitle) => {
      const subtitleElement = document.createElement("div");
      subtitleElement.innerText = subtitle.text;
      subtitleElement.style.fontSize = "1.5rem";
      subtitleElement.style.color = "white";
      subtitleElement.style.backgroundColor = "black";
      subtitleElement.style.padding = "0.5rem";
      subtitleElement.style.borderRadius = "5px";
      subtitleElement.style.position = "absolute";
      subtitleElement.style.top = "50%";
      subtitleElement.style.left = "50%";
      subtitleElement.style.transform = "translate(-50%, -50%)";
      subtitleElement.style.display = "none";
      subtitleContainer.appendChild(subtitleElement);

      return {
        element: subtitleElement,
        start: subtitle.startTime,
        end: subtitle.endTime,
      };
    });

    const updateSubtitles = () => {
      const currentTime = video.currentTime;
      subtitleElements.forEach((subtitle) => {
        if (currentTime >= subtitle.start && currentTime <= subtitle.end) {
          subtitle.element.style.display = "block";
        } else {
          subtitle.element.style.display = "none";
        }
      });
    };

    video.addEventListener("timeupdate", updateSubtitles);

    return () => {
      video.removeEventListener("timeupdate", updateSubtitles);
      subtitleContainer.remove();
    };
  }, []);

  return (
    <div>
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
        // sx={{
        //   bgcolor: "background.paper",
        //   boxShadow: 0,
        //   borderRadius: 1,
        //   p: 0,
        //   minWidth: "30%",
        //   minHeight: 500,
        //   gap: 2,
        //   mt: 4,
        //   objectFit: "cover",
        // }}
      />
    </div>
  );
};

export default VideoPlayer;
