import styled from 'styled-components'

const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 1.4rem;
    border-radius:5px;
    background:transparent;
    border: 0.05rem solid var(--lightBlue);
    color:var(--lightBlue);
    padding 0.2rem 0.5rem;
    coursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background-color: var(--lightBlue);
        color:var(--mainBLue);
    }
    &:focus{
        outline:none;
    }
`
export default ButtonContainer;