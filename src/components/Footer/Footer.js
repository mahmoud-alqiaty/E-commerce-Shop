import React from 'react'
import { Link } from 'react-router-dom'
import { DivBorder, FooterContainer, FooterLogo, Footercol } from './FooterStyle'
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterestP} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo>
                shoping
            </FooterLogo>
            <Footercol>
                <h4 className="colHeader">
                    departments
                </h4>
                <div className="colCotent">
                    <Link to="/man" className="footerColItem">men's clothes</Link>
                    <Link to="/woman" className="footerColItem">women's clothes</Link>
                    <Link to="/jewelery" className="footerColItem">jewelery</Link>
                    <Link to="/electronics" className="footerColItem">electronics</Link>
                </div>
            </Footercol>
            <DivBorder />
            <Footercol>
                <h4>our branches</h4>
                <div className="colCotent">
                    <p>cairo</p>
                    <p>alex</p>
                    <p>fayoum</p>
                </div>
            </Footercol>
            <DivBorder />

            <Footercol>
                <h4 className="colHeader">
                    contacts
                </h4>
                <div className="colCotent">
                    <Link to="/woman" className="footerColItem">
                        <FaFacebookF />
                    </Link>
                    <Link to="/woman" className="footerColItem">
                        <FaTwitter />
                    </Link>
                    <Link to="/woman" className="footerColItem">
                        <FaInstagram />
                    </Link>
                    <Link to="/man" className="footerColItem">
                        <FaPinterestP />
                    </Link>
                </div>
            </Footercol>
        </FooterContainer>
    )
}

export default Footer
