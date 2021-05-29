import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div `
    width: 100%;
    height: 200px;
    padding: 30px;
    background-color: #030a1c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`
export const DivBorder = styled.div `
    width: 1px;
    height: 100%;
    background-color: #ddd;
`
export const FooterLogo = styled(Link) `
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`
export const Footercol = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: flex-start;
    color: #fff;

    h4{
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
    }
    .colCotent{
        margin-top: 15px;
    }

    .footerColItem{
        text-decoration: none;
        text-transform: capitalize;
        font-size: 16px;
        color: #ddd;
        display: block;
        margin-top: 10px;
    }

    .footerColItem:hover{
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
`