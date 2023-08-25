import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import Card5 from '../Card5'
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
const Reviews = () => {

    const movies = useSelector(p=>p);

  return (
    <div className='reviews'>
                  <>
                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide className='slide1'>
                        <div className='slideandtext'>
                            <button className='me-1'>Action</button>
                            <button>Reviews</button>
                            <h1>Notary</h1>
                            <p>Uniquely enable accurate supply chains rather than frictionless technology. Globally network focused materials vis-a-vis cost effective manufactured..</p>
                            <button className='review btn'>Read Review</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide2'>            
                        <div className='slideandtext'>
                        <button className='me-1'>Action</button>
                        <button>Reviews</button>
                        <h1>Edge Runner 2058</h1>
                        <p>Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with networks.</p>
                        <button className='review btn'>Read Review</button>
                    </div></SwiperSlide>
                    <SwiperSlide className='slide3'>            
                        <div className='slideandtext'>
                        <button className='me-1'>Action</button>
                        <button>Reviews</button>
                        <h1>Flyery</h1>
                        <p>Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after networks.</p>
                        <button className='review btn'>Read Review</button>
                    </div></SwiperSlide>
                    <SwiperSlide className='slide4'>            
                        <div className='slideandtext'>
                        <button className='me-1'>Action</button>
                        <button>Reviews</button>
                        <h1>Saving Mister Ray</h1>
                        <p>User generated content in real-time will have multiple touchpoints for offshoring along the information highway.</p>
                        <button className='review btn'>Read Review</button>
                    </div></SwiperSlide>
                </Swiper>
            </>
            <div className='allcards2'>
                <div className='container'>
                <div className='mycard'>
            <Row className='g-2 mt-5'>
            {movies.map((item)=>(
                <Card5  title={item.title} genre={item.genre} rate={item.rate} photo={item.image}/>
            ))}
            </Row>
            </div>
            </div>
            </div>
            
            

            
           
            
                
            
            
    </div>
  )
}

export default Reviews