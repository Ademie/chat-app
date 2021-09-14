import React from "react"
const MyMessage = ({ message } ) => {
    // to check if our message is an image
    if (message?.attachments?.length > 0){
        return (
            <img
                src={message.attachments[0].file}
                alt="An Image"
                className="message-image"
                style={{float:'right'}}
            />
        )
    }
    // if it's not an image, then render the text
    return (
        <div className="message" 
        style={{ float: 'right', marginRight: '18px', 
        background: '#fc2a8d', color: 'white'}} >
            {message.text}
            
        </div>

    )


}

export default MyMessage
