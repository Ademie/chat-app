import React from 'react'
import './App.css'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed  from './Components/ChatFeed'
import LoginForm from './Components/LoginForm'

const App= () => {
  // showLogin form if user is not logged in
  if(!localStorage.getItem('username')) return <LoginForm/>
  return(
    // call the chat-engine and pass props
    <ChatEngine 
      height="100vh"
      projectID="43abc399-c6c8-4622-aee3-caa5d089898c"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      // customizing the chatfeed for yourself
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
      />
  )
}
export default App;




//to automatically refresh the app without reloading the webpage
if (module.hot){
  module.hot.accept()
}
