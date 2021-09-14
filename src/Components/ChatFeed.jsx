import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import FriendMessage from "./FriendMessage";
import { PicCenterOutlined } from "@ant-design/icons";

const ChatFeed = (props) =>{
  // destructure the props and access these variables/functions
  const { chats, activeChat, userName, messages } = props;
  // look for the current and active chats
  const chat = chats && chats[activeChat];

  // Read receipts
  const renderReadReceipts = (message, isMyMessage) =>{
    return chat.people.map((person, index) => person.last_read === message.id && (
      <div
        key={`read_${index}`}
        className="read-receipt"
        style={{
          float: isMyMessage ? 'right' : 'left',
          background:  `url(${person?.person?.avatar})`
        }}
      />
    ))
  }

  // A function to display messsages
  const renderMessages = () => {
    // hold the keys of each message
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      
      // to know if this is the last sent message
      const lastMessageKey = index === 0 ? null : keys[index - 1]; //if there are messages, make sure to return the last message
      const isMyMessage = userName === message.sender.username;
      
      return (
        <div key={ `msg_${index}` } style={{ width: "100%" }}>
          <div className="message-block">
            {/* If it is my message, then render MyMessage component ELSE render FriendMessage */}
            {isMyMessage ? (
              <MyMessage message={ message } />
            ) : (
              <FriendMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>

          {/* to check if messages has been read */}
          <div
            className="read-receipts"
            // if it is my message return 18px else return 0px margin....
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  // if there's no chat, return no here yet
  if (!chat) return "Nothing here yet...";
  // structure of our chatfeed
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        {/* the chat subtitle is the person username */}
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>

      {renderMessages()}
      {/* spacing before send message form */}
      <div style={{ height: "100px" }} />
      {/* send message form */}
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}

export default ChatFeed;
