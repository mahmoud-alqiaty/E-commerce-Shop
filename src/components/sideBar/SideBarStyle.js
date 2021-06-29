import styled from 'styled-components'

export const SideBarContainer = styled.div `
    width: 250px;
    height: calc(100vh - 60px);
    padding: 0px 0 80px;
    position: fixed;
    top: 60px;
    left: ${({showSideBare})=> showSideBare? "0":"-100%"};
    z-index: 100;
    background-color: #280a25;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: 0.4s;
    overflow: auto;
    
`
export const SideBarList = styled.div `
    width: 100%;

    .listItem{
        text-decoration: none;
        text-transform: capitalize;
        color: #fff;
        font-size: 20px;
        display: block;
        padding: 10px 20px;
        margin: 15px 0;
        transition: 0.2s;
        border-bottom: 1px solid #000;
    }

    .listItem:hover{
        font-weight: bold;
        background-color: #ddd;
        color: #555;
    }
`

export const LogInUp = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .login, .logup{
        width: 100%;
        text-decoration: none;
        text-transform: capitalize;
        font-size: 18px;
        font-weight: bold;
        padding: 10px 15px;
        margin-bottom: 9px;
        border-radius: 25px;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .login{
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    }

    .login:hover{
        background-color: #fff;
        color: #555;
    }

    .logup{
        background-color: blue;
        color: #fff;
    }
`