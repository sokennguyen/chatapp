import { useState } from 'react'
import Header from './components/header/Header'
import './App.css'
import NavMain from './components/navigation/NavMain'

function App() {
  const [userId,setUserId] = useState(1)
  const [chatId,setChatId] = useState(2)
  const chats = [
    {
        id:0,

    }
  ]
  const [activeChat,setActiveChat] = useState(0)
  return (
    <>
      <Header userId={userId} chatId={chatId}/>
      <NavMain activeChat={activeChat} chats={chats}/>
    </>
  )
}

export default App
