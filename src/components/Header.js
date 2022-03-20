import React from 'react'
import airbnb from "../airbnb.png"
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core"
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <Link to ="/">
            {/* aibnb logo */}
            <img className='header__logo'src={airbnb} alt="airbnb logo" />
        </Link>
        {/* search bar */}
        <div className='header__center'>
            <input type="text" name="" id="" />
            <SearchIcon />
        </div>
        {/* right of bar */}
        <div className="header__right">
            <p>Become a host</p>
            <ExpandMoreIcon />
            <LanguageIcon />
            <Avatar />
        </div>
    </div>
  )
}

export default Header