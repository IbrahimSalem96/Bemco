import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image 
import image from './../../assets/Bemco/services/pic3.jpg';

//Components
import FooterSingUp from './../../components/FooterSingUp';
import { useState } from 'react';

export default function OperationMaintenance() {
    const [content, setContent] = useState('Installation & Retrofitting')

    return (
        <>
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
                                        <p className='fs-4 text-dark' style={{ whiteSpace: 'nowrap' }}>Installation & Retrofitting</p>
                                        <ul className="menu">
                                            <li className="menu-item" onClick={() => setContent('Installation of Electrical Equipment')}><Link to={"#"}>Installation of Electrical Equipment</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Retrofit & Upgrade')}><Link to={"#"}>Retrofit & Upgrade</Link></li>
                                            <li className="menu-item" onClick={() => setContent('HVAC Duct & Equipment')}><Link to={"#"}>HVAC Duct & Equipment</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Instrumentation & Control')}><Link to={"#"}>Instrumentation & Control</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <img src={image} alt='Testing & Commissioning' className='w-100 mb-3' style={{ height: '50vh' }} />

                                {content === 'Installation & Retrofitting' && (
                                    <>
                                        <h2 className="title">Installation & Retrofitting</h2>
                                        <p className="m-b10">
                                            Based in Saudi Arabia, Bemco Services is a leading provider of operations and maintenance (O&M) services for the Energy industry. These services typically include:
                                        </p>

                                        <p className="m-b10">Plant Installation Management Services</p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> Installation Planning and Management: Pre-installation meeting, defined and planned</li>
                                            <li> Installation processes</li>
                                            <li> Material Control: all material and equipment arrival and inspection, inventory control and material shortage report</li>
                                            <li> Installation Coordination: ensure proper installation, alignment, and checkout, tracking of field changes</li>
                                            <li>P rocedural Documentation: Installation schedule, periodic progress meetings, as built  construction prints, records maintenance, post-installation meeting</li>
                                            <li>P erformance Testing: Acceptance testing, performance optimization, acoustics and emissions</li>
                                            <li> testing</li>
                                            <li>Training</li>
                                            <li> Mobilization Support Services: Process and procedures documentation and Environmental</li>
                                            <li>Health and Safety (EHS) compliance governance</li>
                                        </ul>

                                        <p className="m-b10">Specializing In</p>

                                        <p className="m-b10">
                                            More importantly, the added benefits included when you choose Bemco Services for your Operation & Maintenance needs are that you will have a full team of qualified experts—equipped with state of the art technology-- who care about your bottom line and comply with international Quality, Health & Safety, and Environmental standards.
                                        </p>

                                        <p className="m-b10 fw-bold fs-4">
                                            Operation, maintenance, and warranty services include
                                        </p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> Power Plants (Steam Turbines, Gas Turbines, Combined Cycle & Diesel Generators)</li>
                                            <li> District Cooling Plants</li>
                                            <li> Start Up & Warranty Service</li>
                                            <li>Facilities Maintenance</li>
                                        </ul>

                                        <p className="m-b10 fw-bold fs-4">Specializing In</p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Installation of Electrical Equipment, power plant generation & transmission</li>
                                            <li>Retrofit & Upgrade of Power Plant & Substation Equipment</li>
                                            <li>HVAC Duct & Equipment Installation, Retrofit & Upgrade</li>
                                            <li>Instrumentation & Control - I & C</li>
                                        </ul>
                                    </>
                                )}

                                {content === 'Installation of Electrical Equipment' && (
                                    <>
                                        <h2 className="title">Installation of Electrical Equipment</h2>
                                        <p className="m-b10">
                                            Bemco Services has successfully positioned itself as a premier power plant and transmission substation
                                            installation subcontractor with vast experience including (but not limited to) installation of major power
                                            generation plant equipment from global manufacturers on a variety of substation types in multiple
                                            locations for the most stringent and demanding of customers. Our experience, which also includes
                                            Simple & Combined Cycle Gas Turbine plant construction and 380KV Substation, has led us to maintain
                                            a full team of skilled specialists with specialized equipment and - of course - the experience to ensure
                                            customer confidence that your equipment, plant, and facilities will be constructed properly, on-time and
                                            within budget .
                                        </p>

                                        <p className="m-b10">LV, MV & HV Equipment Installation:</p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Isolated Phase Bus Duct (IPBD)</li>
                                            <li>Generation, Transmission & Distribution Power Transformers & Reactors– all types and sizes up to 380KV</li>
                                            <li>HV/MV/LV Switchgear – all types including Air, SF6, Vacuum and Gas up to 380KV</li>
                                            <li>Control & Protection Panels & Distribution Boards</li>
                                            <li>HV, MV, LV, Instrumentation & Control Cables Pulling and Termination</li>
                                            <li>Current & Voltage Transformers</li>
                                            <li>Circuit Breakers, Disconnect switches & Capacitor Banks</li>
                                            <li>Substation Control System</li>
                                            <li>Copper & Aluminum Bus bar & Overhead Conductors</li>
                                            <li>Cable Management System</li>
                                            <li>Support Structures</li>
                                            <li>HVAC Duct, Equipment & Control system</li>
                                        </ul>
                                    </>
                                )}

                                {content === 'Retrofit & Upgrade' && (
                                    <>
                                        <h2 className="title">Power Plant and Substation Equipment Retrofit & Upgrade</h2>
                                        <p className="m-b10">
                                            In order to run a functional power plant or substation, it may be required to replace equipment that has
                                            reached the end of its operational lifetime… or even upgrade to new equipment where additional
                                            features are needed. Bemco Services provides the most cost effective solution for retrofit, replacement,
                                            or upgrading equipment based on quantifiable analysis of operating condition and equipment life
                                            assessment.
                                            <br></br><br></br>
                                            By combining various services and expertise with a precise diagnosis of aged electrical equipment, our
                                            upgrade and retrofit services are designed to meet the unique needs of power generation,
                                            transmission, and distribution applications for Utility and Industrial customers.
                                            Retrofit, Upgrade, & Replacement Solutions for P ow erplant and Substation Equipment
                                        </p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> HV/MV/LV </li>
                                            <li>Protection & Control System</li>
                                            <li>Power Transformers Life extension</li>
                                            <li>Circuit Breaker</li>
                                            <li> HV/MV/LV Switchgear Bay Extension or Upgrade</li>
                                            <li>Transformer Cooling Upgrade</li>
                                            <li>Boiler</li>
                                        </ul>

                                        <p className="m-b10">
                                            In many cases the replacement equipment can be fitted with minimal interruption to existing
                                            operations.
                                        </p>

                                        <p className="m-b10">
                                            Yet in the cases where safety demands greater isolation, then we focus on fast installation aided by
                                            pre-configuration and in-situ testing. The bottom line is that each of the qualified contractors employed
                                            by Bemco Services understand what matters in the field: keeping site work and operational disruption
                                            to a minimum.
                                        </p>
                                    </>
                                )}

                                {content === 'HVAC Duct & Equipment' && (
                                    <>
                                        <h2 className="title">HVAC Duct & Equipment</h2>
                                        <p className="m-b10">
                                            Specializing in power plants, transmission substations, and commercial building projects—Bemco
                                            Services is a leading ductwork installation subcontractor based in Saudi Arabia. We take great pride in
                                            offering ductwork installation packages to all major main mechanical contracting customers.
                                            Choose Bemco Services for a complete package to install, retrofit, or upgrade your entire HVAC system
                                            (including, but not limited to ductwork) as well as testing, adjusting, and balancing services.
                                            Specializing In Installation W ork For:
                                        </p>

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

                                        <p className='m-b10"'>HVAC Retrofit & Upgrade</p>

                                        <p className="m-b10">
                                            Is it time to upgrade to new, energy efficient equipment? We specialize in modifications required in
                                            your HVAC system design, piping, valves, and fittings. We also provide a turn-key solution to replace
                                        </p>

                                        <p className="m-b10">obsolete or damaged equipment such as:</p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Chillers</li>
                                            <li>Air Side Equipment</li>
                                            <li>Cooling Tow</li>
                                            <li>Pumps</li>
                                        </ul>
                                    </>
                                )}

                                {content === 'Instrumentation & Control' && (
                                    <>
                                        <h2 className="title">Instrumentation & Control - I & C</h2>
                                        <p className="m-b10">
                                            Based in Saudi Arabia, Bemco Services executes installation and EPC contracts for electrical,
                                            instrumentation and process control systems in the energy sectors (power generation and distribution,
                                            Oil & Gas, industry, civil and infrastructures).
                                        </p>

                                        <p className="m-b10">
                                            Due to our specialized experience, we provide an eclectic combination of services that include (but are
                                            not limited to) project management, engineering, procurement, installation, and commissioning. From
                                            helping you select the proper equipment and systems to meet technical requirements to a careful
                                            installation for maximum reliability, you are in good hands with Bemco Services!
                                        </p>

                                        <p className="m-b10">EPC/ LSTK Basis Installation:</p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Field instrumentation</li>
                                            <li>Control system (both PLC and DCS)</li>
                                            <li>Auxiliary systems (earthing, lighting, small power, lightening, cathodic protection, etc.)</li>
                                            <li>HV substations</li>
                                            <li>MV and LV distribution</li>
                                        </ul>

                                        <p className="m-b10">EPC/ LSTK Basis Installation:</p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Project Management</li>
                                            <li>Installation of electrical and I&C systems</li>
                                            <li>Pre-commissioning</li>
                                            <li>Instrument calibration and loop checkout services</li>
                                            <li>Commissioning</li>
                                            <li>Start-up</li>
                                            <li>Training</li>
                                        </ul>

                                        <p className="m-b10">Retrofit, Upgrade and Replacement of I &C Systems:</p>
                                        <p className="m-b10">
                                            Our experience, in cooperation with international manufactures, includes execution of the retrofit,
                                            upgrade and replacement of existing control, electrical and instrumentation systems for existing plants,
                                            from the feasibility study to the engineering, procurement and construction, of the electrical,
                                            instrumentation and process control systems.
                                        </p>

                                        <p className="m-b10">Accelerated Schedules:</p>
                                        <p className="m-b10">Most Energy, Oil & GAS projects demands shorter down times and quicker turnarounds.</p>
                                        <p className="m-b10">It is very common to operate two and sometimes three shifts of personnel to meet these demands.</p>
                                        <p className="m-b10">
                                            We focus on accommodating accelerated schedules and shorter installation times by staffing projects
                                            with the right number and quality of skilled specialists, we are constantly striving to support our
                                            customers above and beyond the required level... because long term relationships are our priority.

                                        </p>
                                    </>
                                )}

                            </div>
                        </div>
                    </div >
                </section >

                <section className="section-full dz-subscribe style-1 bg-gray">
                    <FooterSingUp />
                </section>
            </div >
            <Footer />
        </>
    )
}


