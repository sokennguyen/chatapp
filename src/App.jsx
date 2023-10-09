import { useState } from 'react'
import Header from './components/header/Header'
import './App.css'
import NavMain from './components/navigation/NavMain'

function App() {
  const [user,setUser] = useState({id:1})
  const chats = [
    {
      id:0,
      name:'Self',
      members: [1],
      read:true,
      messages:[
        {
          content:'hehe',
        }
      ]
    },
    {
      id:1,
      name:'Weirdo',
      members: [2,1],
      read:true,
      messages:[
        {
          content:'hehe',
        }
      ]
    },
  ]
  const [activeChat,setActiveChat] = useState(1)
  return (
    <>
      <Header user={user} chat={chats.find(chat=>chat.id===activeChat)}/>
      <NavMain activeChat={activeChat} chats={chats}/>
    </>
  )
}

export default App
