import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//image 
import image from './../../assets/Bemco/services/pic3.jpg'
//Components
import FooterSingUp from './../../components/FooterSingUp';

export default function OperationMaintenance() {
    return (
        <>
            {/* <Header /> */}
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Installation & Retrofitting' parentPage='Home' childPage='Services' />

                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-4 col-md-5 col-sm-12 m-b30">
                                <aside className="side-bar sticky-top right">
                                    <div className="service_menu_nav widget style-1">
                                        <ul className="menu">
                                            <li className="menu-item"><Link to={"/operation-maintenance"}>Operation & Maintenance</Link></li>
                                            <li className="menu-item"><Link to={"/testing-commissioning"}>Testing & Commissioning</Link></li>
                                            <li className="menu-item"><Link to={"/installation-retrofitting"}>Installation & Retrofitting</Link></li>
                                            <li className="menu-item"><Link to={"/supply-MV/LV"}>Supply MV/LV & Control Panels</Link></li>
                                            <li className="menu-item"><Link to={"/HVAC-TAB"}>HVAC & TAB</Link></li>
                                            <li className="menu-item"><Link to={"/facility-management"}>Facility Management</Link></li>
                                            <li className="menu-item"><Link to={"/engineering-services"}>Engineering Services</Link></li>
                                            <li className="menu-item"><Link to={"/supply-spare-parts"}>Supply Spare Parts</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <h2 className="title">Installation & Retrofit</h2>

                                <img src={image} alt='Installation & Retrofit' className='w-100 mb-3' style={{ height: '50vh' }} />

                                <p className="m-b10">
                                    At Bemco Services we are dedicated to helping you achieve your unique installation and startup goals,
                                    from small unit installation tasks to full-scale project management with comprehensive execution of
                                    installation requirements such as verifying equipment performance, providing quality workmanship,
                                    and—most importantly—doing it all on time and on budget
                                </p>import Services from './../Services';


                                <p>Plant Installation Management Services</p>
                                <ul className="list-check primary m-b30 ms-5">
                                    <li>Installation Planning and Management: Pre-installation meeting, defined and planned</li>
                                    <li>Installation processes</li>
                                    <li>Material Control: all material and equipment arrival and inspection, inventory control and
                                        material shortage report</li>
                                    <li>Installation Coordination: ensure proper installation, alignment, and checkout, tracking of
                                        field changes</li>
                                    <li>P rocedural Documentation: Installation schedule, periodic progress meetings, as built
                                        construction prints, records maintenance, post-installation meeting</li>
                                    <li>Performance Testing: Acceptance testing, performance optimization, acoustics and emissions</li>
                                    <li>Testing</li>
                                    <li>Training</li>
                                    <li>Mobilization Support Services: Process and procedures documentation and Environmental</li>
                                    <li>Health and Safety (EHS) compliance governance</li>
                                </ul>

                                <p>Specializing In</p>
                                <ul className="list-check primary ms-5">
                                    <li>Installation of Electrical Equipment, power plant generation & transmission</li>
                                    <li>Retrofit & Upgrade of Power Plant & Substation Equipment</li>
                                    <li>HVAC Duct & Equipment Installation, Retrofit & Upgrade</li>
                                    <li>Instrumentation & Control - I & C</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-full dz-subscribe style-1 bg-gray">
                    <FooterSingUp />
                </section>
            </div>
            <Footer />
        </>
    )
}


