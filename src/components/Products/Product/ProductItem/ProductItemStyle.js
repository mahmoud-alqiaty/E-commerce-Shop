import styled from 'styled-components'
import { IoBagAddSharp } from 'react-icons/io5'

export const ProductsPage = styled.div `
    width: 100%;
    margin: 80px 0px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 25px;
    row-gap: 30px;
    box-sizing: border-box;

    h1{
        text-align: center;
        padding: 5px ;
        text-transform: capitalize;
        border-bottom: 3px solid;
        display: none;

    }

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 590px){
        grid-template-columns: repeat(1, 1fr);
        width: 85%;
        margin: 80px auto;
    }
`

export const ProductItemContainer = styled.div `
text-decoration: none;
border: 1px solid #ddd;
border-radius: 10px;
transition: 0.2s;

&:hover{
    box-shadow: 2px 2px 5px #ddd;
}
`

export const ProductItemImg = styled.img `
width: 100%;
height: 350px;
padding: 10px;
`

export const ProductItemInfo = styled.div `
padding: 20px;
border-top: 1px solid #ddd;
color: #000;
font-weight: bold;
position: relative;
min-height: 250px;
background-color: #efe;


.title{
    text-decoration: none;
    font-size: 20px;
}

.price{
    font-size: 22px;
    margin: 15px 0;
}

.category{
    color: #888;
    font-style: italic;
}

.btns{
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0px;
    left: 0;
}

.addToCart-Btn{
    display: inline-block;
    padding: 7px 15px;
    background-color: red;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
}

.showDetails-Btn{
    display: inline-block;
    padding: 7px 15px;
    background-color: #555;
    color: #fff;
    margin-top: 10px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: red;
        box-shadow: 0 2px 5px #555;
    }
}
`

export const AddCartIcon = styled(IoBagAddSharp) `
`