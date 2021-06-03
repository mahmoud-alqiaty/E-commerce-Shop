import React, { useState, useEffect } from 'react'
import {Bannercontainer, moveInLeft, BannerInnercontainer, BannerItem, SingleDote, BannerCaption} 
from './HeroStyleTwo.js'
import {Herodata} from './HeroData'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'


const HeroTwo = () => {

    const [current, setcurrent] = useState(0)
    const [reapatedSlide, setReapatedSlide] = useState(false)

    useEffect(() => {
        const time = setTimeout(() => {
            if(current<(Herodata.length - 1)){
                setcurrent(current + 1)
                setReapatedSlide(false)
            } else{
                clearTimeout(time)
                setcurrent(0)
                setReapatedSlide(true)
            }
        }, 5000);
        return () => {
            clearTimeout(time)
        }
    }, [current])
    console.log(reapatedSlide);
    const updatedArry = [...Herodata]
    updatedArry.pop()
    return (
        <Bannercontainer>
            <BannerInnercontainer current={current}>
                {
                    Herodata.map(({img, title, titleSpan, text, icon}, index)=>
                    <BannerItem 
                        key={index} 
                        bg={img} 
                        index={index} 
                        current={current}
                        reapatedSlide={index==0?reapatedSlide:false}
                    >
                        <BannerCaption 
                            className="bannerItemCaption" 
                            index={index} 
                            current={current}
                        >
                            <h1>{title}</h1>
                            <h3>{titleSpan}</h3>
                            <button>{text} {icon}</button>
                        </BannerCaption>
                    </BannerItem>
                    )
                }
            </BannerInnercontainer>
            
            <div className="dots">
                {
                    updatedArry.map((item,index)=>
                        <SingleDote
                            index={index}
                            current={current}
                        >

                        </SingleDote>
                    )

                }
            </div>
        </Bannercontainer>
    )
}

export default HeroTwo
