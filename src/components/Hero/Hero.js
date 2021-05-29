import React, { useState } from 'react'
import {Bannercontainer, moveInLeft, BannerInnercontainer, BannerItem} from './HeroStyle'
import {Herodata} from './HeroData'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'


const Hero = () => {
    const [comingHerodata, setComingHerodata] = useState(Herodata)
    let shifted

    const handlenext = ()=>{
        let updatedComingData = [...comingHerodata]
        shifted = updatedComingData.shift();
        updatedComingData.push(shifted);
        setComingHerodata(updatedComingData)
    }    
    return (
        <Bannercontainer>
            <BannerInnercontainer>
                {
                    comingHerodata.map(({img, title, titleSpan, text, icon}, index)=>
                    <BannerItem key={index} bg={img}>
                        <div className="bannerItemCaption">
                            <h1>{title}</h1>
                            <h3>{titleSpan}</h3>
                            <button>{text} {icon}</button>
                        </div>
                        </BannerItem>
                    )
                }
            </BannerInnercontainer>
            <div className="controls">
                <div className="prev" onClick={handlenext}>
                    <IoIosArrowBack />
                </div>
                <div className="next" onClick={handlenext}>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className="dots">
                <div className="singleDote"></div>
                <div className="singleDote"></div>
                <div className="singleDote"></div>
                <div className="singleDote"></div>
                <div className="singleDote"></div>
            </div>
        </Bannercontainer>
    )
}

export default Hero
