import { MessageData } from "../domains/messages";
import * as socketIo from "socket.io";
import { Stream } from "../handlers/streamMessage";
import { TwitterRepository } from "../repositories/twitter/repository";

const repository = new Stream(new TwitterRepository());

export const socketOnConnection = async (socket: socketIo.Socket) => {
  console.log("connection");
  socket.on("filter_messages", async (data) => {
    repository.setFilter([{ value: data }]);
    const stream = await repository.getStream();
    stream.on("data", (message) => {
      try {
        console.log(message);
        if (message.title === "ConnectionException") {
          removeListeners(stream);
        } else {
          try {
            const json = JSON.parse(message);
            console.log(message);
            const msg: MessageData = {
              author_id: json.data.author_id,
              id: json.data.id,
              text: json.data.text,
              users: json.includes.users[0],
            };
            console.log(msg);
            socket.emit("manage_messages", msg);
          } catch (e) {
            console.log(e);
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
    socket.on("disconnect", () => {
      removeListeners(stream);
    });
  });

  socket.on("send_message", (message) => {
    console.log(message);
    try {
      socket.volatile.broadcast.emit("view_messages", message);
    } catch (e) {
      console.log(e);
    }
  });
};

const removeListeners = (stream: NodeJS.ReadableStream) => {
  stream.removeAllListeners("data");
  console.log("USER DISCONNECTED");
};
