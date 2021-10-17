import { MessageData } from "../@types";
import { Socket } from "socket.io-client";

const server = "localhost:3001";

export const sendMessage = (socket: Socket, message: MessageData): void => {
  socket.emit("send_message", message);
};

export const filterData = (socket: Socket, filter: string): void => {
  socket.emit("filter_messages", filter);
};

export default server;
