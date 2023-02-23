import styled from "styled-components";
import Container from "../Container/container.component";

export const ContainerInfo = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p  {
        padding: 0.5rem;
        color: white;
        background-color: #45CB85;
        width: 90px;
        border-radius: 0.7rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 40px;
        margin: 1rem;
    }
`

export const Description = styled.section `
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:  0 20%;

    h4 {
        line-height: 32px;
        word-spacing: 5px;
        font-weight: 400;
        font-size: 1.5rem;
    }

    p {
        margin: 2rem;
        
    }
`