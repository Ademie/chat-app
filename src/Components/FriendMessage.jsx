function FriendMessage({ lastMessage, message }) {
  // check if it is first message sent by user
  const isUserFirstMsg =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {/* if it is the first message, then include the friend's avatar */}
      {isUserFirstMsg && (
        <div
          className="message-avatar"
          style={{ background: `url(${message?.sender?.avatar})` }}
        />
      )}

      {/* check if friend message is an image */}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="An Image"
          className="message-image"
          style={{ marginLeft: isUserFirstMsg ?  '4px' : '48px'}}
        />
      ) : (
        // if it's not an image, then render the text
        <div
          className="message"
          style={{
            float: "left",
            background: "#e35497",
            
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default FriendMessage;
