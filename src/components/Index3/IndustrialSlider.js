import React from "react";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import pic1 from './../../assets/Bemco/services/pic1.jpg'
import pic2 from './../../assets/Bemco/services/pic2.jpg'
import pic3 from './../../assets/Bemco/services/pic3.jpg'
import pic4 from './../../assets/Bemco/services/pic4.jpg'
import pic5 from './../../assets/Bemco/services/pic5.jpg'
import pic6 from './../../assets/Bemco/services/pic6.jpg'
import pic7 from './../../assets/Bemco/services/pic7.jpg'
import pic8 from './../../assets/Bemco/services/pic8.png'


// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper";


const industryBlog = [
	{ title: 'Operation & Maintenance', image: pic1, page: '/operation-maintenance' },
	{ title: 'Testing & Commissioning', image: pic2, page: '/testing-commissioning' },
	{ title: 'Installation & Retrofitting', image: pic3, page: '/installation-retrofitting' },
	{ title: 'HVAC & TAB', image: pic4, page: '/supply-MV/LV' },
	{ title: 'Facility Management', image: pic5, page: '/HVAC-TAB' },
	{ title: 'Engineering Services', image: pic6, page: '/facility-management' },
	{ title: 'Supply MV/LV & Control Panels', image: pic7, page: '/engineering-services' },
	{ title: 'Supply Spare Parts', image: pic8, page: '/supply-spare-parts' },
];


export default function IndustrialSlider() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper className="swiper-container content-slider about-swiper slider-btn-1"
				speed={1500}
				parallax={true}
				slidesPerView={3}
				spaceBetween={0}
				loop={true}
				pagination={{
					type: "fraction",
				}}
				autoplay={{
					delay: 3100,
				}}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				onSwiper={(swiper) => {
					// Delay execution for the refs to be defined
					setTimeout(() => {
						// Override prevEl & nextEl now that refs are defined
						swiper.params.navigation.prevEl = navigationPrevRef.current
						swiper.params.navigation.nextEl = navigationNextRef.current

						// Re-init navigation
						swiper.navigation.destroy()
						swiper.navigation.init()
						swiper.navigation.update()
					})
				}}
				modules={[Navigation, Autoplay, Pagination]}
				breakpoints={{
					1200: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					320: {
						slidesPerView: 1,
					},
				}}
			>

				{industryBlog.map((information, index) => (
					<SwiperSlide key={index}>
						<div className="content-box2 overlay-shine">
							<div className="dz-info">
								<h3 className="title">{information.title}</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
							</div>
							<div className="dz-media m-b30">
								<img src={information.image} alt={information.title} style={{ height: '25vh' }} />
							</div>
							<div className="dz-bottom">
								<Link to={information.page} className="btn-link">READ MORE<i className="fas fa-arrow-right"></i></Link>
							</div>
						</div>
					</SwiperSlide>
				))}
				<div className="swiper-button">
					<div className="button-prev swiper-button-prev4" ref={navigationPrevRef} ><i className="las la-arrow-left"></i></div>
					<div className="button-next swiper-button-next4" ref={navigationNextRef}><i className="las la-arrow-right"></i></div>
				</div>
			</Swiper>

		</>
	)
}