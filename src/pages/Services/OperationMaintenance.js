import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image 
import image from './../../assets/Bemco/services/pic1.jpg';

//Components
import FooterSingUp from './../../components/FooterSingUp';
import { useState } from 'react';

export default function OperationMaintenance() {
    const [content, setContent] = useState('Operations & Maintenance')

    return (
        <>
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Testing & Commissioning' parentPage='Home' childPage='Services' />

                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-4 col-md-5 col-sm-12 m-b30">
                                <aside className="side-bar sticky-top right">
                                    <div className="service_menu_nav widget style-1">
                                        <p className='fs-4 text-dark' style={{ whiteSpace: 'nowrap' }}>Operations & Maintenance </p>
                                        <ul className="menu">
                                            <li className="menu-item" onClick={() => setContent('Power Plants')}><Link to={"#"}>Power Plants</Link></li>
                                            <li className="menu-item" onClick={() => setContent('District Cooling Plants')}><Link to={"#"}>District Cooling Plants</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Startup and Warranty')}><Link to={"#"}>Startup and Warranty</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Facility Operation & Maintenance')}><Link to={"#"}>Facility Operation & Maintenance</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Maintenance, Repair and Overhaul (MRO)')}><Link to={"#"}>Maintenance, Repair and Overhaul (MRO)</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <img src={image} alt='Testing & Commissioning' className='w-100 mb-3' style={{ height: '50vh' }} />

                                {content === 'Operations & Maintenance' && (
                                    <>
                                        <h2 className="title">Operations & Maintenance</h2>
                                        <p className="m-b10">
                                            Based in Saudi Arabia, Bemco Services is a leading provider of operations and maintenance (O&M) services for the Energy industry. These services typically include:</p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> Plant Maintenance</li>
                                            <li> Facility Management</li>
                                            <li> Operations Support (24/7)</li>
                                            <li> Asset Performance Improvement</li>
                                            <li> Operations Readiness</li>
                                            <li> Start Up & Commissioning</li>
                                            <li> Small Capital Project Design & Construction</li>
                                            <li> Preventive & Corrective Maintenance</li>
                                            <li>Provision of Spare Parts and Consumables</li>
                                            <li>Repair and Refurbishment of major components</li>
                                            <li> Execution of scheduled Outages</li>
                                            <li>Condition Monitoring</li>
                                            <li>Remote Monitoring</li>
                                        </ul>

                                        <p className="m-b10">
                                            The benefits of an Operation & Maintenance contract include minimizing owner risk and reducing overall operating cost, while also maximizing plant productivity and profitability
                                        </p>

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
                                    </>
                                )}

                                {content === 'Power Plants' && (
                                    <>
                                        <h2 className="title">Power Plants</h2>
                                        <p className="m-b10">
                                            When it comes to Power Plant Operation & Maintenance, Bemco Services prioritizes high availability,
                                            performance, profitability, and safety. As an industry leader, we are qualified to provide a variety of
                                            O&M services for Power Plants including:
                                        </p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> O&M estimating and budgeting</li>
                                            <li> Environmental compliance programs and permitting assistance</li>
                                            <li> Startup and commissioning services</li>
                                            <li> Plant staffing, training, personnel policies and procedures</li>
                                            <li> Operating procedures</li>
                                            <li>  Long-term plant operation</li>
                                            <li> Safety and quality control programs</li>
                                            <li> Maintenance management programs</li>
                                            <li> Inventory control</li>
                                            <li> Procurement services</li>
                                            <li> Annual reviews and audits</li>
                                            <li> Plant improvements and upgrades</li>
                                            <li> Replacement parts and field engineering services</li>
                                        </ul>

                                        <p className="m-b10">
                                            Long Term, Custom Maintenance P rograms
                                        </p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Preventive maintenance</li>
                                            <li>Predictive maintenance procedures</li>
                                            <li>Scheduled maintenance</li>
                                            <li>Major refurbishments</li>
                                        </ul>

                                        <p className="m-b10">
                                            We offer a variety of custom operation & maintenance programs for power plants, to reduce forced
                                            outages and maximize equipment reliability, such as
                                        </p>

                                        <p className="m-b10">
                                            Our operational services are designed and implemented to consistently optimize power plant equipment
                                            life by:
                                        </p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Operating plants in a safe, compliant and efficient manner.</li>
                                            <li> Developing and implementing formal procedural, maintenance, environmental and safety</li>
                                            <li> management programs.</li>
                                            <li> Maintaining overall care and control of the plant and site.</li>
                                            <li>Advising and recommending tooling and inventory requirements.</li>
                                            <li> Recommending procedural changes, when necessary, to improve operation</li>
                                        </ul>

                                        <p className="m-b10">
                                            Responding and adjusting to changing operating conditions
                                        </p>
                                    </>
                                )}

                                {content === 'District Cooling Plants' && (
                                    <>
                                        <h2 className="title">District Cooling Plants</h2>
                                        <p className="m-b10">
                                            The output of one cooling plant is enough to meet the cooling energy demand of dozens of buildings.
                                            Proper maintenance is important in reducing the operating cost and downtime of the district cooling
                                            plant equipment, especially because improper maintenance can result in energy waste and poor
                                            environmental quality.
                                            Bemco Services is an industry leader specializing in cooling plant operation & maintenance services. We
                                            service, maintain, and repair all systems and equipment (not limited to any manufacturer) related to
                                            cooling plants, including:
                                        </p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> Chillers (Centrifugal, Air/Water Cooled Screw, Air/Water Cooled Reciprocating, Dual Mode)</li>
                                            <li>Cooling Towers</li>
                                            <li> Ice Storage Tanks</li>
                                            <li> Air Compressor system</li>
                                            <li> Filtration system</li>
                                            <li> Fuel system</li>
                                            <li> Building Management Systems</li>
                                            <li> Fire Fighting systems</li>
                                            <li> Package / Split /Air Handling/ Fan Coil Units</li>
                                            <li> Industrial Refrigeration System</li>
                                            <li>Chilled/Condenser/Domestic Water Pumps</li>
                                            <li> Variable Speed Drives</li>
                                            <li> Electrical System& Panels</li>
                                            <li> Plumbing Systems</li>
                                            <li> Lighting Systems</li>
                                        </ul>

                                        <p className="m-b10">
                                            Choose Bemco Services for an experienced and professional operations and maintenance team with
                                            extensive knowledge in district cooling plant equipment. For a new plant, Bemco Services also partners
                                            with various international manufacturers & suppliers to provide a one-source solution suited to your
                                            own unique needs.
                                        </p>
                                    </>
                                )}

                                {content === 'Startup and Warranty' && (
                                    <>
                                        <h2 className="title">Startup and Warranty</h2>
                                        <p className="m-b10">
                                            Bemco Services offers a team of experienced specialists who are dedicated to power plant startup
                                            support and services, and we work hard to bridge the gap between equipment design, construction,
                                            and full plant operation.
                                            <br></br> <br></br>
                                            Our experience covers all power plant technology and systems, not limited to any specific
                                            manufacturers, and our capabilities range from staff augmentation to complete plant startup programs.
                                        </p>

                                        <p className='mt-3 fs-4 fw-bold'>Technical Expertise</p>

                                        <p>Startup & Commissioning Support P ersonnel W e P rovide</p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Analytical analyses</li>
                                            <li>Performance optimization</li>
                                            <li>System reliability improvement</li>
                                            <li>Operating data collection and monitoring</li>
                                        </ul>

                                        <p className='mt-3 fs-4 fw-bold'>
                                            Protection System Testing & Commissioning Services:</p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Technical adviser</li>
                                            <li>Commissioning engineer</li>
                                            <li>Commissioning technician</li>
                                            <li>Commissioning test engineer</li>
                                            <li>Commissioning manager</li>
                                            <li>Training coordinator</li>
                                        </ul>
                                        <p className="m-b10">Plant W arranty Management</p>

                                        <p className="m-b10">Plant EPC’s today outsource their warranty management to Bemco Services as the complexity in
                                            warranty handling increases and overall warranty administration cost has become more significant.</p>


                                        <p className="m-b10">The overall goals of warranty management is to have one specific point of contact, to reduce warranty
                                            administration cost, and to optimally utilize main contract warranty systems through:</p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> Service contracts with supplier & manufacturers and match those with respective main contract</li>
                                            <li> specification</li>
                                            <li>Effective customer coverage for in-warranty and out-of-warranty equipment</li>
                                            <li> Ensuring that warranty information is transparent, easily accessible and up to date</li>
                                            <li> Handling invalid claims</li>
                                            <li>Reducing warranty administration and fulfillment cycle time</li>
                                            <li>Improving OEM & Supplier transaction handling speed and warranty claim success rate</li>
                                        </ul>

                                    </>
                                )}

                                {content === 'Facility Operation & Maintenance' && (
                                    <>
                                        <h2 className="title">Facility Operation & Maintenance</h2>
                                        <p className="m-b10">
                                            Based in Saudi Arabia, Bemco Services is an Operations and Maintenance leader specializing in
                                            operating and maintaining select industrial and commercial facilities. Our technical experts can
                                            implement building and equipment maintenance programs designed to optimize life cycle value,
                                            operating costs, and reliability… resulting in a more comfortable, safe, and productive workspace for
                                            employees.
                                        </p>

                                        <p className="m-b10">
                                            Facility Maintenance Services Focus On
                                        </p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Implementing rigorous maintenance practices to ensure high levels of electrical/mechanical systems integrity</li>
                                            <li>Planning and scheduling</li>
                                            <li>Work process control</li>
                                            <li>Maintenance material management</li>
                                            <li>Complying with Health, safety, and environmental requirements</li>
                                            <li>Systematic failure elimination</li>
                                            <li>Comprehensive preventive analysis for facility equipment failure modes</li>
                                            <li>Cost savings by utilizing proven facilities maintenance technology, implementing cross industry</li>
                                            <li>best practices and solutions, employing a highly trained and engaged work force</li>
                                        </ul>

                                        <p className="m-b10">
                                            Today's most successful companies focus on what they do best. By outsourcing operations &
                                            maintenance (O&M) and facilities maintenance services, you can concentrate your resources on what
                                            you do best.
                                        </p>
                                    </>
                                )}

                                {content === 'Maintenance, Repair and Overhaul (MRO)' && (
                                    <>
                                        <h2 className="title">Maintenance, Repair and Overhaul (MRO)</h2>
                                        <p className="m-b10">
                                            Bemco Services provides on-site MRO (maintenance, repair, and overhaul) as a specialized service for
                                            power plants, transmission substation and industries. Our engineers and technicians are equipped with
                                            the skills and experience you expect when trusting a maintenance provider to maximize the
                                            performance and reliability of your power plant.
                                        </p>

                                        <p className="m-b10">
                                            Our field service engineers will assist with routine and preventative maintenance, troubleshooting, and
                                            resolving unexpected problems efficiently.
                                        </p>

                                        <p className="m-b10">
                                            Plant Equipment W e Specialize In:
                                        </p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Power Transformer</li>
                                            <li>Turbine & Generator</li>
                                            <li>Boiler &Heat Exchanger</li>
                                            <li>Balance of Plant (Drives, Pumps, Applications, Pumps)</li>
                                        </ul>

                                        <p className="m-b10">
                                            Transformer Services:
                                        </p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Site Maintenance & Overhaul.</li>
                                            <li>Insulation Testing.</li>
                                            <li>Leak Repairing.</li>
                                            <li>Gasket/ Bushing Replacement, Repairing.</li>
                                            <li>Replacement Parts.</li>
                                            <li>Site Investigation, Extensive Failure Analysis</li>
                                            <li>Un-Tanking Inspection.</li>
                                            <li>Transformer Life Assessment Study</li>
                                            <li>Rigging and Transporting</li>
                                            <li>Erections/Disassembly</li>
                                            <li>Vacuum Oil Processing</li>
                                            <li>Oil Testing.</li>
                                        </ul>

                                        <p className="m-b10">
                                            Turbine & Generator Services:
                                        </p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Minor Overhauls</li>
                                            <li>Capital Overhaul of Steam and Gas turbines</li>
                                            <li>Hot Path inspection</li>
                                            <li>Inspection of bearings</li>
                                            <li>Overhaul and repair of turbine valves & servo system</li>
                                            <li>Alignment of turbine & generator rotors</li>
                                            <li>Part Replacement & Repair</li>
                                            <li>Pre-outage unit evaluation</li>
                                            <li>Start up and Commissioning Services</li>
                                            <li>NDT Services</li>
                                            <li>Boro-scope</li>
                                            <li>Vibration </li>
                                            <li>Operation and Maintenance</li>
                                        </ul>

                                        <p>Boiler & Heat Exchanger Services:</p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>Overhaul of fuel firing system</li>
                                            <li>Water jet cleaning of boiler heat transfer area</li>
                                            <li>Thickness survey of water wall, super heater, & economizer tubes</li>
                                            <li>Re-tubing of condenser & heat exchanger</li>
                                            <li>High-pressure tests on condenser heat exchanger</li>
                                            <li>Overhauling of auxiliary rotating machines (FD, ID, PA Fans)</li>
                                        </ul>

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


