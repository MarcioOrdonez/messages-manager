import "./styles.css";
import type { FC } from "react";
import { useState, useEffect } from "react";
import * as io from "socket.io-client";
import Message from "../../components/Message";
import NavBar from "../../components/NavBar";
import { MessageData } from "../../types/types";


const server = "localhost:3001"
let socket:io.Socket = io.connect(server);


const View: FC = () => {

    const [message, setMessage] = useState<MessageData>();
    useEffect(() => {
      if(!socket.connected){
        socket = io.connect(server);
      }
            socket.on("view_messages", (data) => {
              if (data){
                const message = {
                  id: data.id, author_id: data.author_id, users: data.users, text: data.text
                }
                setMessage(message);

            socket.disconnect();
              }
            });
      },[message]);

    return (
      <>
      <NavBar />
      <div className="main">
    <div className="message-table">
      {message ? <Message message={message} /> : <div></div>}
    </div>
    </div>
      </>
)}

export default View;
