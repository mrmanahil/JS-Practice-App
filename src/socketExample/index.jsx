import React from "react";
import io from "socket.io-client";

const Page = () => {
  const socket = io(
    "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
  );
  socket.on("message", (data) => {
    console.log("Received a message from the server:", data);
  });
  return <h1>Test</h1>;
};

export default Page;
