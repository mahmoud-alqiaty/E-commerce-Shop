import React, { useState } from 'react'
import {Bannercontainer, moveInLeft, BannerInnercontainer, BannerItem, SindleDote, BannerCaption} 
from './HeroStyleTwo.js'
import {Herodata} from './HeroData'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'


const HeroTwo = () => {
    
    return (
        <Bannercontainer>
            <BannerInnercontainer>
                {
                    Herodata.map(({img, title, titleSpan, text, icon}, index)=>
                    <BannerItem 
                        key={index} 
                        bg={img} 
                        index={index} 
                        animationDelay={index * 5}
                        zIndex={index * 4}
                    >
                        <BannerCaption className="bannerItemCaption" index={index}>
                            <h1>{title}</h1>
                            <h3>{titleSpan}</h3>
                            <button>{text} {icon}</button>
                        </BannerCaption>
                    </BannerItem>
                    )
                }
            </BannerInnercontainer>
           </Bannercontainer>
    )
}

export default HeroTwo
