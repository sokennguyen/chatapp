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
      id:0,
      createdBy:1,
      members:[1],
      name:'self',
      messages:[
          {
            content:'first self message',
            sentBy:1,
            readBy:[1]
          },
          {
            content:'second self message',
            sentBy:1,
            readBy:[1]
          }
        ]
    },
    {
      id:1,
      createdBy:2,
      members:[1,2],
      name:'__PEER__',
      messages:[
          {
            content:'first peer message',
            sentBy:2,
            readBy:[1],
          },
          {
            content:'second peer message',
            sentBy:1,
            readBy:[2],
          }
      ]
    }
  ])
  
  const [activeChat,setActiveChat] = useState(1)
  return (
    <>
      <Header user={user} chat={userChats.find(chat=>chat.id===activeChat)}/>
      <NavMain activeChat={activeChat} chats={userChats}/>
    </>
  )
}

export default App
