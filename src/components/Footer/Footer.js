import React from 'react'
import { Link } from 'react-router-dom'
import { DivBorder, FooterContainer, FooterLogo, Footercol } from './FooterStyle'
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaPhoneAlt, FaRegEnvelope, FaWhatsapp} from 'react-icons/fa'

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
                        <FaPhoneAlt />: <span>+0945832458</span>
                    </Link>
                    <Link to="/woman" className="footerColItem">
                        <FaRegEnvelope />: <span>mahmoudalqiaty15@gmail.com</span>
                    </Link>
                    <Link to="/woman" className="footerColItem">
                        <FaWhatsapp />: <span>+095634189865</span>
                    </Link>
                </div>
            </Footercol>
            <DivBorder />
            <Footercol>
                <h4 className="colHeader">
                    follow
                </h4>
                <div className="colCotent">
                    <Link to="/" className="footerColItem follow-link follow-link-facebook">
                        <span className="follow-link-icon "><FaFacebookF /></span> 
                        <span className="follow-link-text facebook">Facebook</span>
                    </Link>
                    <Link to="/" className="footerColItem follow-link follow-link-twitter">
                        <span className="follow-link-icon"><FaTwitter /></span> 
                        <span className="follow-link-text twitter">Twitter</span>
                    </Link>
                    <Link to="/" className="footerColItem follow-link follow-link-insta">
                        <span className="follow-link-icon "><FaInstagram /></span>
                        <span className="follow-link-text instagram">Instagram </span>
                    </Link>
                    <Link to="/" className="footerColItem follow-link follow-link-pinterest">
                        <span className="follow-link-icon"><FaPinterestP /></span>
                        <span className="follow-link-text pinterest">Pinterest</span>
                    </Link>
                </div>
            </Footercol>
        </FooterContainer>
    )
}

export default Footer
