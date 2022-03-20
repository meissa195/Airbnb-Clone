import React from 'react'
import {Button} from "@material-ui/core"
import SearchResult from './SearchResult'
import photo1 from "../photo1.jpg"
import photo2 from "../photo2.jpg"
import photo3 from "../photo3.jpg"
import photo4 from "../photo4.jpg"
import photo5 from "../photo5.jpg"
import photo6 from "../photo6.jpg"
function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage__info">
            <p>62 stays • 26 august to 30 august • 2 guest</p>  
            <h1>Stays nearby</h1>
            <Button variant='outlined'>
                Cancellation Flexibility
            </Button>
            <Button variant='outlined'>
                Type of place
            </Button>
            <Button variant='outlined'>
                Price
            </Button>
            <Button variant='outlined'>
                Rooms and beds
            </Button>
            <Button variant='outlined'>
                More filters
            </Button>
            {/* Card 1 */}
             <SearchResult
            img = {photo1}
            location = "Private room in Long Beach, CA"
            title = "Stay at this beachfront home"
            description = "2 guest • 2 bedroom • 2 beds  2 bathrooms • Wifi • Parking onsite"
            star = {4.8}
            price ="$200 / night"
            total ="$251 / total"
            />
            {/* Card 2 */}
             <SearchResult
            img = {photo2}
            location = "Private room in Long Beach, CA"
            title = "Stay at this beachfront home"
            description = "2 guest • 2 bedroom • 2 beds  2 bathrooms • Wifi • Parking onsite"
            star = {4.8}
            price ="$200 / night"
            total ="$251 / total"
            />
            {/* Card 3 */}
            <SearchResult
            img = {photo3}
            location = "Private room in Long Beach, CA"
            title = "Stay at this beachfront home"
            description = "2 guest • 2 bedroom • 2 beds  2 bathrooms • Wifi • Parking onsite"
            star = {4.8}
            price ="$200 / night"
            total ="$251 / total"
            />
            {/* Card 4 */}
            <SearchResult
            img = {photo4}
            location = "Private room in Long Beach, CA"
            title = "Stay at this beachfront home"
            description = "2 guest • 2 bedroom • 2 beds  2 bathrooms • Wifi • Parking onsite"
            star = {4.8}
            price ="$200 / night"
            total ="$251 / total"
            />
            {/* Card 5 */}
            <SearchResult
            img = {photo5}
            location = "Private room in Long Beach, CA"
            title = "Stay at this beachfront home"
            description = "2 guest • 2 bedroom • 2 beds  2 bathrooms • Wifi • Parking onsite"
            star = {4.8}
            price ="$200 / night"
            total ="$251 / total"
            />
            {/* Card 6 */}
            <SearchResult
            img = {photo6}
            location = "Private room in Long Beach, CA"
            title = "Stay at this beachfront home"
            description = "2 guest • 2 bedroom • 2 beds  2 bathrooms • Wifi • Parking onsite"
            star = {4.8}
            price ="$200 / night"
            total ="$251 / total"
            />
        </div>
    </div>
  )
}

export default SearchPage