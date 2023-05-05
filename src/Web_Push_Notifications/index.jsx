import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

const PusherTest = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const pusher = new Pusher("d829180e447a10fada67", {
      cluster: "ap2",
      // add any other options here, such as encrypted: true
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", (data) => {
      console.log(data, "Test");
      setMessage(data.message);
    });

    // cleanup function to unsubscribe from the channel
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  const handleClick = () => {
    const pusher = new Pusher("d829180e447a10fada67", {
      cluster: "ap2",
      // add any other options here, such as encrypted: true
    });

    const channel = pusher.channel("my-channel"); // <-- change here
    console.log(channel);

    // Publish a message to the channel and event
    channel.trigger("my-event", {
      message: "Hello, world!",
    });
  };

  return (
    <div>
      <h1 onClick={() => handleClick()}>Pusher Test</h1>
      <p>{message}</p>
    </div>
  );
};

export default PusherTest;
