import styled from "styled-components";
import { Link } from 'react-router-dom';

export const divPricipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 20vw;
    height: 100vh;
    background-color: #151A8F;
`

export const logoMenu = styled.div`
    height: 80%;
    padding: 35px;
    `

export const titleh1 = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin: 0 0 25px 0;
    `

export const navUl = styled.ul`
    list-style-type: none;
    `


export const li = styled(Link)`
    display: flex;
    padding: 10px 0;
    margin: 0 0 25px 0;
    font-size: 18px;
    font-weight: lighter;
    text-decoration: none;
    color: white;
`

export const divButton = styled.div`
    position: relative;
    top: 0;
    left: 74%;
`

export const button = styled.button`
    padding: 10px;  
    background-color: transparent;
    border: none;
    font-weight: bold;
    color: #E40000;
    font-size: 16px;
    cursor: pointer;
`