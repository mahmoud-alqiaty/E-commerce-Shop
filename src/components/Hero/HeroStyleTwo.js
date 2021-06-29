import styled, { keyframes, css } from 'styled-components'

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

    @media screen and (max-width: 600px){
        .prev, .next{
            display: none;
        }
    }
    
`

export const SingleDote = styled.div `
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #ddd;
    cursor: pointer;
    background-color: ${({current, index})=>current==index? "#ddd":"transperant"};
`

export const BannerInnercontainer = styled.div `
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    transform: ${({current})=> `translateX(${-current*100}%)`};
    transition:${({current})=>current==0? `none`:`transform 1.2s ease-in-out`} ;
`


export const BannerItem = styled.div `
    width: 100%;
    height: 100%;
    background:${({bg})=>`linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s;
    opacity: 1;

`

const anmi = keyframes `
    from{
        opacity: 0;
        transform: translateY(90%);
    }

    to{
        opacity: 1;
        transform: translateY(0%);
    }
`


 export const BannerCaption = styled.div `
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    h1{
        font-size: 90px;
        opacity:${({reapatedSlide})=>reapatedSlide? "1":"0"} ;
        transform: ${({reapatedSlide})=>reapatedSlide? "translateY(90%)":"translateY(0%)"} ;
        animation:
        ${({index, current, reapatedSlide})=>(index==current)? (reapatedSlide? "none" : css`${anmi} 2s ease-in-out forwards`): 'none'} ;
        animation-delay: 1s;
    }

    h3{
        background: red;
        padding: 5px 15px;
        margin: 25px 0 35px;
        font-size: 28px;
        opacity: 0;
        transform: translateY(90%);
        animation:
        ${({index, current})=>(index==current)? css`${anmi} 2s ease-in-out forwards`: 'none'} ;
        animation-delay: 1.5s;
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
        opacity: 0;
        transform: translateY(90%);
        animation:
        ${({index, current})=>(index==current)? css`${anmi} 2s ease-in-out forwards`: 'none'} ;
        animation-delay: 2s;
    }

    @media screen and (max-width: 600px){
        h1{
            font-size: 32px;
        }

        h3{
            font-size: 20px;
        }
    }
`