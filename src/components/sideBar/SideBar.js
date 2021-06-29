import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { menuIconSontext } from '../../App'
import {SideBarContainer, SideBarList, LogInUp} from './SideBarStyle'

const SideBar = () => {
    const {showSideBare, setShowSideBare} = useContext(menuIconSontext)

    return (
        <SideBarContainer showSideBare={showSideBare}>
            <SideBarList>
                <Link to="/allProducts" className="listItem" onClick={()=>setShowSideBare(false)}>all Products</Link>
                <Link to="/man" className="listItem" onClick={()=>setShowSideBare(false)}>men's clothes</Link>
                <Link to="/woman" className="listItem" onClick={()=>setShowSideBare(false)}>women's clothes</Link>
                <Link to="/jewelery" className="listItem" onClick={()=>setShowSideBare(false)}>jewelery</Link>
                <Link to="/electronics" className="listItem" onClick={()=>setShowSideBare(false)}>electronics</Link>
            </SideBarList>
            <LogInUp>
                <button className="login" to="/">log in</button>
                <button className="logup" to="/">log up</button>
            </LogInUp>
        </SideBarContainer>
    )
}

export default SideBar
