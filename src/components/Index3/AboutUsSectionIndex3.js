import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import IndustrialSlider from './IndustrialSlider';

function AboutUsSectionIndex3() {
	return (
		<>
			<div className="row">
				<div className="col-lg-5 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
					<div className="section-head style-1">
						<h3 className="title m-b30">We Are Always Best For Power System</h3>
						<div className="exp-row">
							<h2 className="year counter"> <CountUp end={18} duration={5} /> </h2>
							<p>YEARS OF <span>EXPRIENCE</span></p>
						</div>
					</div>
				</div>
				<div className="col-lg-7 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
					<p className="m-b30">
						Bemco Services Division is a Leading independent services provider for the industrial, power generation and distribution markets. Our specialized technical services for operation & maintenance, MV, HV and EHV substations, power plants, utilities and infrastructure as well as electro- mechanical projects.
					</p>

					<p className="m-b30">
						Bemco Services Division established in 2006 in Saudi Arabia as part of Arabian BEMCO which was formed in 1968 and has developed into a world-class EPC Turnkey Contractor in Industrial and Power Projects including Co-generation, Combined Cycle and Steam Power Plants. Arabian BEMCO has undertaken the largest and most challenging turnkey projects in Saudi Arabia and the region using various state of the art technologies with a workforce reach in totaling 18,000 Employees.
					</p>

				</div>
			</div>

			<div className="row">
				<div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
					<div className="section-head style-1">
						<h3 className="title m-b30">Mission</h3>
						<p className="">
							Cooperative companion for operation and maintenance, we take care of Energy, Generation, Desalination, and the district cooling plants, with a massive listing of innovative tools for the electrical and mechanical systems
						</p>
					</div>
				</div>
				<div className="col-lg-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
					<div className="section-head style-1">
						<h3 className="title m-b30">Vision</h3>
						<p className="">
							To provide better services through professional team using innovative technology and tools
						</p>
					</div>
				</div>
			</div>

		</>
	)
} export default AboutUsSectionIndex3;