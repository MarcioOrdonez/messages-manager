import "./styles.css";
import type { FC } from "react";
import { useState, useEffect } from "react";
import * as io from "socket.io-client";
import NavBar from "../../components/NavBar";
import { filterData, sendMessage } from "../../services/websocket";
import { MessageData } from "../../types/types";
import Message from "../../components/Message";


const server = "localhost:3001"
let socket:io.Socket = io.connect(server);


const Manage: FC = () => {

    const [messages, setMessages] = useState<Array<MessageData>>([]);
    const [filter, setFilter] = useState("");
    
    useEffect(() => {
        socket = io.connect(server);
      }, []);


    useEffect(() => {
      if(!socket.connected){
        socket = io.connect(server);
      }
          socket.on("connect", () => {
            let msg:Array<MessageData> = [];
            socket.on("manage_messages", (data) => {
              console.log(data)
              if (data){
                console.log(data)
                const message = {
                  id: data.id, author_id: data.author_id, users: data.users, text: data.text
                }
                console.log(message);
                    msg = [...msg, message]
                    setMessages(msg);
              }
            });
          })
      },[messages]);

      const manageSendMessage = (socket: io.Socket, message: MessageData) => {
        sendMessage(socket,message);
        console.log("mando a mensage")
        return
      }
      
    return (
      <>
      <NavBar />
      <div className="filter">
        <input className="filter__input" onChange={({target}) => setFilter(target.value)} />
        <div className="filter__button" onClick={() => filterData(socket, filter)}>
          Filtrar
        </div>
      </div>
      <div className="main">
    <div className="message-table">
      {messages.map((message,index) => 
      <Message key={index} message={message}>
        <div onClick={() => manageSendMessage(socket, message)}>Enviar</div>
      </Message>
      )}
    </div>
    </div>
      </>
)}

export default Manage;
