import { useEffect, useState } from "react";
import Form from "./components/Form";
import Messages from "./components/Messages";
import { getAllMessages } from "./service";

const App = () => { 
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        getAllMessages().then(res => {
            setMessages(res.data)
        })
    },[])

    return (
        <>
        <Form setMessages={setMessages} />
        <Messages messages={messages}/>
        </>
    )
}

export default App;