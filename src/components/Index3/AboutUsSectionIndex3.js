import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import IndustrialSlider from './IndustrialSlider';

function AboutUsSectionIndex3() {
	return (
		<>
			<div className="row">
				<div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
					<div className="section-head style-1">
						<h3 className="title m-b30">We Are Always Best For Industrial Solution</h3>
						<div className="exp-row">
							<h2 className="year counter"> <CountUp end={17} duration={5} /> </h2>
							<p>YEARS OF <span>EXPRIENCE</span></p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
					<p className="m-b30">
						BEMCO SERVICES is a highly experienced company that has evolved from the renowned Arabian Bemco Contracting Co. With over 15 years of diverse expertise in the industry, BEMCO SERVICES is specifically designed to meet the specialized technical requirements of the market. This includes catering to HV & MV Substations, Steam and gas turbine power Projects, Industrial Projects, and Electro-Mechanical Projects. The company offers a wide range of services such as installation, protection & control, testing and commissioning, start-up, and operation and maintenance. With its strong foundation and commitment to excellence, BEMCO SERVICES is well-equipped to fulfill the needs of its clients in various fields.

					</p>
					<Link to={"./about-us"} className="btn btn-primary btn-border btn-border m-r10 m-b10">ABOUT US</Link>
				</div>
			</div>
			<IndustrialSlider />
		</>

	)
} export default AboutUsSectionIndex3;