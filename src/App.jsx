import { useState } from 'react'
import Header from './components/header/Header'
import './App.css'
import NavMain from './components/navigation/NavMain'

function App() {
  const [user,setUser] = useState({
      id:1,
      name:'cat',
      avatar:'1',
      chats:[0,1]
  })
  const [userChats,setUserChats] = useState([
    {
      id: 1,
      createdBy: 1,
      members: [1],
      name: 'self',
      avatar: '1',
      messages: [
        {
          content: 'first self message',
          sentBy: 1,
          readBy: [1],
        },
        {
          content: 'second self message',
          sentBy: 1,
          readBy: [1],
        },
      ],
    },
    {
      id: 2,
      createdBy: 2,
      members: [1, 2],
      avatar: '1',
      name: '__PEER__',
      messages: [
        {
          content: 'first peer message',
          sentBy: 2,
          readBy: [1],
        },
        {
          content: 'second peer message',
          sentBy: 1,
          readBy: [2],
        },
      ],
    },
    // Add more chat objects here
    {
      id: 3,
      createdBy: 1,
      members: [1, 3],
      avatar: '2',
      name: 'Another Peer',
      messages: [
        {
          content: 'Hello from another peer!',
          sentBy: 3,
          readBy: [1],
        },
      ],
    },
    {
      id: 4,
      createdBy: 4,
      members: [1, 4],
      avatar: '2',
      name: 'Yet Another Peer',
      messages: [
        {
          content: 'Greetings from another peer!',
          sentBy: 4,
          readBy: [1],
        },
      ],
    },
  ])
  
  const [activeChat,setActiveChat] = useState(2)
  return (
    <>
      <Header user={user} chat={userChats.find(chat=>chat.id===activeChat)}/>
      <NavMain activeChat={activeChat} chats={userChats}/>
    </>
  )
}

export default App
