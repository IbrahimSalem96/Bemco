import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image
import image from './../../assets/Bemco/services/pic5.jpg'

//Components
import FooterSingUp from './../../components/FooterSingUp';
import { useState } from 'react';

export default function HVACTAB() {
    const [content, setContent] = useState('HVAC & TAB')
    return (
        <>
            {/* <Header /> */}
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='HVAC & TAB' parentPage='Home' childPage='Services' />

                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-4 col-md-5 col-sm-12 m-b30">
                                <aside className="side-bar sticky-top right">
                                    <div className="service_menu_nav widget style-1">
                                        <p className='fs-4 text-dark' style={{ whiteSpace: 'nowrap' }}>HVAC & TAB</p>
                                        <ul className="menu">
                                            <li className="menu-item" onClick={() => setContent('HVAC')}><Link to={"#"}>HVAC</Link></li>
                                            <li className="menu-item" onClick={() => setContent('TAB')}><Link to={"#"}>TAB</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>

                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <img src={image} alt='HVAC & TAB' className='w-100 mb-3' style={{ height: '50vh' }} />

                                {content === 'HVAC & TAB' && (
                                    <>
                                        <h2 className="title">HVAC Installation, Retrofit, and Upgrade Services</h2>
                                        <p className="m-b10">
                                            Specializing in power plants, transmission substations, and commercial building projects—Bemco Services is a leading ductwork installation subcontractor based in Saudi Arabia. We take great pride in offering ductwork installation packages to all major main mechanical contracting customers.
                                        </p>
                                    </>
                                )}

                                {content === 'HVAC' && (
                                    <>
                                        <h2 className="title">Power Plants</h2>
                                        <p className="m-b10">
                                            Specializing in power plants, transmission substations, and commercial building projects—Bemco Services is a leading ductwork installation subcontractor based in Saudi Arabia. We take great pride in offering ductwork installation packages to all major main mechanical contracting customers.
                                            <br></br><br></br>
                                            Choose Bemco Services for a complete package to install, retrofit, or upgrade your entire HVAC system (including, but not limited to ductwork) as well as testing, adjusting, and balancing services
                                        </p>

                                        <p className="m-b10">Specializing In:</p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Galvanized/Stainless Steel/Black Steel Ventilation Duct</li>
                                            <li>Indoor/Outdoor Duct Insulation</li>
                                            <li>Square Diffusers</li>
                                            <li>Flexible Duct Hoses</li>
                                            <li>Air Registers</li>
                                            <li>Motorized Dampers (MD)</li>
                                            <li>Manual Volume Control Dampers (VCD)</li>
                                            <li>Motorized Fire Dampers (MFD)</li>
                                            <li>Fire Dampers (FD)</li>
                                            <li>Back Draft Dampers (BDD)</li>
                                            <li>Sound Attenuators (SA)</li>
                                            <li>Sand Trap/ Exhaust Louvers</li>
                                            <li>Canvas</li>
                                            <li>Rockwool External Insulation</li>
                                            <li>HVAC Equipment Installation</li>
                                            <li>Roof Top Fans</li>
                                            <li>Terminal By-pass Units</li>
                                            <li>Packaged Ventilation Units (PVU)</li>
                                            <li>Electric Steam Humidifiers</li>
                                            <li>Ducted Split A/C units</li>
                                            <li>Roof Top Package A/C Units</li>
                                            <li>HVAC Control</li>
                                            <li>Testing, Adjusting & Balancing</li>
                                        </ul>

                                        <p className="m-b10 fw-bold">HVAC Retrofit & Upgradety, such as</p>

                                        <p className="m-b10">
                                            Is it time to upgrade to new, energy efficient equipment? We specialize in modifications required in your HVAC system design, piping, valves, and fittings. We also provide a turn-key solution to replace obsolete or damaged equipment such as:
                                        </p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Chillers</li>
                                            <li>Air Side Equipment</li>
                                            <li>Cooling Towers</li>
                                            <li> Pumps</li>
                                        </ul>
                                    </>
                                )}

                                {content === 'TAB' && (
                                    <>
                                        <h2 className="title">District Cooling Plants</h2>
                                        <p className="m-b10">
                                            Successful HVAC installation relies on testing, adjusting, and balancing services to ensure the design and performance of your system are achieved on every level. Bemco Services provides a complete testing & commissioning service for all types and sizes of HVAC systems.
                                        </p>

                                        <p className='fw-bold text-dark'>Testing, Adjusting, and Balancing Specialities:</p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Pre-Commissioning and Setting to Work</li>
                                            <li>Air Systems Balancing and Regulation</li>
                                            <li>Water Systems Balancing and Regulation</li>
                                            <li>VAV System Testing</li>
                                            <li>Performance Testing</li>
                                            <li>Temperature and Humidity analyses</li>
                                            <li>Sound Level Readings</li>
                                        </ul>

                                    </>
                                )}

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
