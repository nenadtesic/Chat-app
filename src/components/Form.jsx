import { useState } from "react";
import { postMessage } from "../service";
import { isMessageEmtpy, isUsernameEmpty, isValidUsername } from "../validation";
import StyledInput from "./StyledInput";

const Form = ({setMessages}) => {
    const [inputUsername, setInputUsername] = useState('')
    const [username, setUsername] = useState('')
    const [messageText, setMessageText] = useState('')
    const [errors, setErrors] = useState([false, false, false])
    let errorMessages = ['username mora da sadrzi minimum tri karaktera!', 'Morate se ulogovati!', 'Poruka ne sme biti prazna!']

    return ( 
        <div>
            <p style={{color: 'red'}}>{errors[0] ? errorMessages[0] : ''}</p>
            <StyledInput error={errors[0]} value={inputUsername} placeholder="...username" onChange={e => {setInputUsername(e.target.value)}} /> 
            
            <button onClick={() => {
                if (!isValidUsername(inputUsername)) {
                    setErrors(prev => prev.map((err,i) => i === 0 ? true : err))
                    return
                }

                setErrors(prev => prev.map((err,i) => i !== 2 ? false : err))
                setUsername(inputUsername)
                setInputUsername('')
            }}>Login</button>
            
            <p>Ulogovani korisnik: <span style={{textDecoration: 'underline'}}>{username}</span></p>

            <textarea value={messageText} onChange={e=>{setMessageText(e.target.value)}} cols="40" rows='4' placeholder="...message text" />
            <p style={{color: 'red'}}>{errors[1] ? errorMessages[1] : ''}</p>
            <p style={{color: 'red'}}>{errors[2] ? errorMessages[2] : ''}</p>

            <button onClick={()=>{
                if (!isUsernameEmpty(username)) {
                    setErrors(prev => prev.map((err,i) => i === 1 ? true : err))
                    return
                }

                if (!isMessageEmtpy(messageText)) {
                    setErrors(prev => prev.map((err,i) => i === 2 ? true : err))
                    return
                }
                setErrors(prev => prev.map((err,i) => i === 2 ? false : err))

                let currentTime = new Date()
                let newMessage = {
                    username,
                    message:messageText,
                    time:`${currentTime.getHours() < '10' ? '0' + currentTime.getHours() : currentTime.getHours()}:${currentTime.getMinutes() < '10' ? '0' + currentTime.getMinutes() : currentTime.getMinutes()}:${currentTime.getSeconds() < '10' ? '0' + currentTime.getSeconds() : currentTime.getSeconds()}`,
                }
                
                postMessage(newMessage).then(res => {
                    setMessages(prev => [...prev, res.data])
                })

                setMessageText('')

            }}>Send Message</button>
        </div>
     );
}
 
export default Form;