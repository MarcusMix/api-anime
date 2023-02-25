import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    overflow: hidden;
    padding-bottom: 4rem;
`

export const WrapperImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    width: 100vh;
    margin: auto;
    object-fit: cover;

    @media (max-width: 768px) {
            img {
            width: 100vh;
        }
    }
`

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
        background: linear-gradient(0.9turn,#4e54c8,#8f94fb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
`

export const Description = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:  0 10%;

    h4 {
        line-height: 150%;
        word-spacing: 2px;
        font-weight: 400;
        font-size: 1.5rem;
        text-align: start;
    }

    p {
        margin: 2rem;
        font-size: 2rem;
    }

    svg {
        align-self: center;
        vertical-align: -12%;
    }

    img {
        max-width: 700px;
        margin: 4rem;
        border-radius: 1rem;
    }

    @media (max-width: 768px) {
        h4 {
            font-size: 1rem;
        }

        img {
            width: 100%;
            margin-bottom: 4rem;
        }
    }
`