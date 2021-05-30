import React, { useState } from 'react'
import {Bannercontainer, moveInLeft, BannerInnercontainer, BannerItem, SindleDote, BannerCaption} 
from './HeroStyle'
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

    const handleDoteClick = (index)=>{
        let updatedComingData = [...Herodata]
        let transfereArry = []
        for(let i=0; i<index; i++){
            let one = updatedComingData.shift()
            transfereArry.pop(one)
        }
        const conctedArry = updatedComingData.concat(transfereArry)
        setComingHerodata(conctedArry)
    }
    
    // const interval = setInterval(handlenext, 2000);
    return (
        <Bannercontainer>
            <BannerInnercontainer>
                {
                    comingHerodata.map(({img, title, titleSpan, text, icon}, index)=>
                    <BannerItem key={index} bg={img} index={index}>
                        <BannerCaption className="bannerItemCaption" index={index}>
                            <h1>{title}</h1>
                            <h3>{titleSpan}</h3>
                            <button>{text} {icon}</button>
                        </BannerCaption>
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
               { 
                    Herodata.map((item, index)=>
                    {
                        let finidx = comingHerodata.findIndex(coming=>coming===item)
                        return(
                            <SindleDote 
                                className="singleDote" 
                                displayed={finidx==0? 0 : 1}
                                onClick={()=> handleDoteClick(index)}
                            ></SindleDote>
                        )
                    }
                )}
            </div>
        </Bannercontainer>
    )
}

export default Hero
