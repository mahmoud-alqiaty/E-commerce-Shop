import styled from 'styled-components'
import { IoBagAddSharp } from 'react-icons/io5'


export const ProductPageContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    padding: 40px;
    margin-top: 80px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 700px){
        height: auto;
        padding: 10px;
    }
`
export const ProductItemContainer = styled.div `
    width: 95%;
    height: 100%;
    display: flex;
    border: 1px solid #aaa;
    border-radius: 10px;
    box-shadow: 0 1px 5px blue;

    @media screen and (max-width: 1024px){
        width: 100%;
    }

    @media screen and (max-width: 700px){
        flex-direction: column;
        width: 100%;
    }
`
export const ImgSide = styled.img `
    width: 50%;
    height: 450px;
    display: block;
    padding: 40px;

    @media screen and (max-width: 700px){
        width: 100%;
        height: 300px;
        padding: 20px;
    }
`

export const BorderLine = styled.div `
    height: 100%;
    width: 2px;
    background-color: #aaa;

    @media screen and (max-width: 700px){
        height: 2px;
        width: 100%;
    }
`

export const InfoSide = styled.div `
    width: 50%;
    padding: 20px;
    background-color: #eee;

    .desc{
        margin: 20px 0;
        line-height: 1.3;
        color: #888;
    }

    .category{
        font-size: 14px;
        font-style: italic;
        font-weight: bold;
    }

    .price{
        color: blue;
        font-weight: bold;
        margin: 20px 0;
        font-size: 20px;
        font-weight: 700;
    }

    .addToCart-Btn{
        display: inline-block;
        padding: 7px 15px;
        background-color: red;
        color: #fff;
        margin-top: 10px;
        cursor: pointer;
    }

    @media screen and (max-width: 700px){
        width: 100%;
    }
`

export const AddCartIcon = styled(IoBagAddSharp) `
width: 100px;
`