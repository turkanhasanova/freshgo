
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar,Autoplay } from 'swiper/modules';
import Cards from './Cards';
import Cards2 from './Cards2';
import Cards3 from './Cards3';
import Footer from './Footer';



const Hero = () => {
    return (
        <div className='hero'>
            <>
                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Scrollbar,Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className='slide1'>
                        <div className='slideandtext'>
                            <button className='me-1'>Action</button>
                            <button>Reviews</button>
                            <h1>Mist Blonde</h1>
                            <p>Sensual and savage, Lorraine Broughton is the most elite spy in MI6.</p>
                            <button className='review btn'>Read Review</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide2'>            
                        <div className='slideandtext'>
                        <button className='me-1'>Action</button>
                        <button>Reviews</button>
                        <h1>Ragnarok</h1>
                        <p>The story is an uninteresting thicket of brawls and machinations.</p>
                        <button className='review btn'>Read Review</button>
                    </div></SwiperSlide>
                    <SwiperSlide className='slide3'>            
                        <div className='slideandtext'>
                        <button className='me-1'>Action</button>
                        <button>Reviews</button>
                        <h1>Baby Jockey</h1>
                        <p>Movie is a romantic musical disguised as a car-chase thriller.</p>
                        <button className='review btn'>Read Review</button>
                    </div></SwiperSlide>
                    <SwiperSlide className='slide4'>            
                        <div className='slideandtext'>
                        <button className='me-1'>Action</button>
                        <button>Reviews</button>
                        <h1>Star Warriors</h1>
                        <p>The galaxy faces a new threat from the evil Kylo Ren - Adam Driver..</p>
                        <button className='review btn'>Read Review</button>
                    </div></SwiperSlide>
                    <SwiperSlide className='slide5'>            
                        <div className='slideandtext'>
                        <button className='me-1'>Action</button>
                        <button>Reviews</button>
                        <h1>Justice Fear</h1>
                        <p>After a four-film building-up began four years ago with Man of Steel.</p>
                        <button className='review btn'>Read Review</button>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </>
 <Cards />
 <Cards2/>
 <Cards3/>
 <Footer/>

        </div>

    )
}

export default Hero