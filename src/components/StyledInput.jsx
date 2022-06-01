import styled from "styled-components"

const StyledInput = styled.input`
    padding: 1rem;
    margin-right: 1rem;
    font-family: sans-serif;
    border: 2px solid ${props => props.error ? 'red' : 'light-dark'};

    ::placeholder {
        // color: blue;
        font-family: monospace;
    }
`

export default StyledInput;