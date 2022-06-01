import StyledMessage from "./StyledMessage";

const Message = ({message}) => {
    return (
        <StyledMessage>
            <p>{message.username}</p>
            <p>{message.message}</p>
            <p>{message.time}</p>
        </StyledMessage>
    );
}
 
export default Message;