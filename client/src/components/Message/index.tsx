import "./Message.css";
import type { FC } from "react";
import { MessageData } from "../../types/types";

interface MessageProps {
    message: MessageData
}

const Message: FC<MessageProps> = ({message, children }) => (
    <div className="message-container">
        <div className="message-container__body">
            <div className="message-container__user">
            <img className="message-container__image" alt="Message avatar" src={`https://unavatar.now.sh/twitter/${message.users.username}`}  height="56"/>
                <div>
                    <div className="message-container__name">{message.users.name}</div>
                    <div className="message-container__user-name">@{message.users.username}</div>
                </div>
            </div>
            <div className="message-container__text">{message.text}</div>
        </div>
        <div className="message-container__button">
            {children}
        </div>
    </div>
);


export default Message;





