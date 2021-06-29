import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div `
    width: 100%;
    padding: 30px;
    background-color: #030a1c;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: #fff;

    @media screen and (max-width: 600px){
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`
export const DivBorder = styled.div `
    width: 1px;
    height: 180px;
    background-color: #af0158;
    align-self: center;

    @media screen and (max-width: 600px){
        display: none;
    }
`
export const FooterLogo = styled(Link) `
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    align-self: center;
    margin-right: 30px;
    font-family: 'Yellowtail', cursive;


    @media screen and (max-width: 900px){
        display: none;
    }
`
export const Footercol = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;

    h4{
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
    }
    .colCotent{
        margin-top: 15px;
    }

    .follow-link{
        display: flex;
        align-items: center;
        padding: 6px 10px;
        border-radius: 5px;
    }
    .follow-link:hover{
        border-bottom: none;

    }

    .follow-link-icon{
        margin-right: 10px;
    }

    .follow-link-text{
        display: inline-block;
        overflow: hidden;
        width: 90px;
        border-left: 1px solid #ddd;
    }

    .follow-link-facebook{
        background-color: #3b5999;
    }
    .follow-link-twitter{
        background-color: #55acee;
    }
    .follow-link-insta{
        background-color: #e4405f;
    }
    .follow-link-pinterest{
        background-color: #bd081c;
    }

    .footerColItem{
        text-decoration: none;
        text-transform: capitalize;
        font-size: 16px;
        color: #ddd;
        display: flex;
        margin-top: 10px;
    }


    @media screen and (max-width: 600px){
        margin-bottom: 40px;

        .colCotent{
            margin-top: 5px;
        }
    }
`