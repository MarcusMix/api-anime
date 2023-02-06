import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.li) `
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1rem;
    flex-wrap: wrap;
    max-width: 250px;
    padding: 0.5rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: 'Fira Sans';
    background-color: white;
    
    & p {
        padding: 0.5rem;
        text-align: start;
        margin-top: 0.3rem;
        background-color: white;
    }
`