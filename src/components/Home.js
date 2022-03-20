import React from 'react'
import Banner from './Banner'
import Card from './Card'
import photo1 from "../photo1.jpg"
import photo2 from "../photo2.jpg"
import photo3 from "../photo3.jpg"
import photo4 from "../photo4.jpg"
import photo5 from "../photo5.jpg"
import photo6 from "../photo6.jpg"

function Home() {
  return (
    <div className='home'>
       <Banner /> 
       <div className="home__section">
            <Card 
            src = {photo1}
            title= "Welcoming"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, explicabo."
            />
            <Card 
            src = {photo2}
            title= "Entire home"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, explicabo."
            />
            <Card 
            src = {photo3}
            title= "Adventurous"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, explicabo."
            />
           
       </div>
       <div className="home__section">
            <Card 
            src = {photo4}
            title= "Title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, explicabo."
            />
            <Card 
            src = {photo5}
            title= "Cozy"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, explicabo."
            />
            <Card 
            src = {photo6}
            title= "Unique Stays"
            description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, explicabo."
            />
       </div>
    </div>
  )
}

export default Home