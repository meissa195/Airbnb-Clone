import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import {Link, useHistory} from "react-router-dom"
import Search from './Search';
function Banner() {
// history from reactor dom where it pushes history 
const history = useHistory()
const [showSearch, setShowSearch] = useState(false);
let changeSearch = () => (setShowSearch(!showSearch))

  return (
   <div className="banner">
       {/* date picker */}
       <div className="banner__search">
           {showSearch && <Search />}
        
           <Button onClick={changeSearch} variant='outlined'
           className='banner__searchButton'
           >{showSearch ? "Hide" : "Search Dates"}</Button>
       </div>
       {/* banner with text */}
       <div className="banner__info">
           <h1>Get out and stretch your imagination</h1>
           <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={() => history.push('./search')}
                variant='outlined'>
                    Explore Nearby
                </Button>
       </div>
   </div>
  )
}

export default Banner