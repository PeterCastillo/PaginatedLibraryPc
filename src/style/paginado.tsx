import styled from "styled-components";
import { PaginaPropsStyle } from "../types/paginated";

export const PaginaContainer = styled.div`
    max-width: 300px;
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
    align-items: center;
`

export const Pagina = styled.span<PaginaPropsStyle>`
    padding: 0.8rem;
    border-radius: 50%;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 200ms ease;
    background-color: ${props => props.state? "rgba(0, 0, 0, 0.05)":""};
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`
export const SetAnotherPage = styled.span`
    cursor: pointer;
    padding: 0.8rem;
    border-radius: 50%;
    font-size: 1.1rem;
    transition: all 200ms ease;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`