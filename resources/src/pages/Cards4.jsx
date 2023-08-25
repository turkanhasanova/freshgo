import React from 'react'
import Card from '../Card'
const Cards4 = () => {
  return (
    <div className='cards5'>
        <div className='container'>
        <div className='title d-flex align-items-center mb-3'>
        <h5>Latest Reviews</h5>
        <button className='btn'>View More</button>
      </div>
        <div className='cards d-flex'>
            <Card photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/spiderman-poster.jpg" genre="NETFLIX · REVIEWS" title="Notary"/>
            <Card photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/blade-runner-2049-poster.jpg" genre="ACTION · REVIEWS" title="Edge Runner 2058" />
            <Card photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/it-poster.jpg" genre="HORROR · REVIEWS" title="Flyer" />
            <Card photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/saving-private-ryan-poster.jpg" genre="MOVIES · REVIEWS" title="Saving Mister Ray" />
            <Card photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/wonder-poster.jpg" genre="DRAMA · REVIEWS" title="Apotek" />
        </div>
        </div>
    </div>
  )
}

export default Cards4