import styled from "styled-components";

const StyledMessage = styled.div`
    background-color: gray;
    color: white;
    padding-left: 2rem;
    margin-top: 1rem;
    border: 1px solid black;
    font-family: sans-serif;

    p:nth-child(1) {
        padding-top: 0.5rem;
        font-size: 1.2rem;
        margin: 0;
        text-decoration: underline;
        font-weight: 600
    }

    p:nth-child(2) {
        padding-left: 1rem;
    }

    p:nth-child(3) {
        font-size: 0.8rem;
    }
   
`

export default StyledMessage;