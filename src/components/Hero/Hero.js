import React from 'react'
import manBanner from '../../images/manBnner.jpg'
// import womanBanner from '../../images/womanBanner'
import womanBageBanner from '../../images/womanPBageBnner.jpg'
import manShoesBanner from '../../images/manShoesBanner.jpg'
import styled from 'styled-components'

const Bannercontainer = styled.div `
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
`

const BannerItem = styled.div `
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${womanBageBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const BannerItemImg = styled.img `
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Hero = () => {
    return (
        <Bannercontainer>
            <BannerItem>
            </BannerItem>
        </Bannercontainer>
    )
}

export default Hero
