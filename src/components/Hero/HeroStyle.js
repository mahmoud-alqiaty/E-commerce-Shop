import styled, { keyframes } from 'styled-components'

export const Bannercontainer =  styled.div `
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    .prev, .next{
        width: 60px;
        position: absolute;
        bottom: 50%;
        transform: translateY(50%);
        color: #fff;
        background-color: red;
        padding: 5px 15px;
        cursor: pointer;
        font-size: 35px;
       
    }

    .prev:hover, .next:hover{
        background-color: gray;
    }
    .prev{
        left: 5px;
        
    }
    .next{
        right: 5px;
    }

    .dots{
        width: 150px;
        margin: auto;
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .singleDote{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        /* background-color: #ddd; */
        border: 1px solid #ddd;
        cursor: pointer;
    }

    @media screen and (max-width: 600px){
        .prev, .next{
            display: none;
        }
    }
    
`

export const BannerInnercontainer = styled.div `
    width: 400%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    transform: translateX(0%);
    position: relative;
`

export const BannerItem = styled.div `
    width: 100%;
    height: 100%;
    background:${({bg})=>`linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s;
    .bannerItemCaption{
        max-width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    h1{
        font-size: 50px;
    }

    h3{
        background-color: red;
        padding: 5px 15px;
        margin: 25px 0 35px;
        font-size: 28px;
    }

    button{
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 24px;
        font-weight: 300;
        color: #ddd;
        padding: 5px 0;
        border-bottom: 2px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`