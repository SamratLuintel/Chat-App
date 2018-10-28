import socketIOClient from "socket.io-client";

const endpoint = "localhost:5000";
const socket = socketIOClient(endpoint);
socket.on("connect", () => {
  console.log("Client is connected to server");
});
export default socket;
