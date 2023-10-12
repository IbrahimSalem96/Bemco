import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image 
import image from './../../assets/Bemco/services/pic2.jpg';

//Components
import FooterSingUp from './../../components/FooterSingUp';
import { useState } from 'react';

export default function TestingCommissioning() {
    const [content, setContent] = useState('Testing & Commissioning')

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
                                        <p className='fs-4 text-dark'>Testing & Commissioning</p>
                                        <ul className="menu">
                                            <li className="menu-item" onClick={() => setContent('EHV, HV & MV Substations')}><Link to={"#"}>EHV, HV & MV Substations</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Power Plants')}><Link to={"#"}>Power Plants</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Protection & Control')}><Link to={"#"}>Protection & Control</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Power Transformers')}><Link to={"#"}>Power Transformers</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Testing, Adjusting & Balancing — TAB')}><Link to={"#"}>Testing, Adjusting & Balancing — TAB</Link></li>
                                            <li className="menu-item" onClick={() => setContent('Service')}><Link to={"#"}>Service</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <img src={image} alt='Testing & Commissioning' className='w-100 mb-3' style={{ height: '50vh' }} />

                                {content === 'Testing & Commissioning' && (
                                    <>
                                        <h2 className="title">Testing & Commissioning</h2>
                                        <p className="m-b10">
                                            Armed with the most state of the art testing equipment for reliable and efficient results, the engineers at Bemco Services are skilled in testing & commissioning a broad range of electrical systems including: simple or combined cycle power plants, high voltage substations, GIS and various switchgears, protective relays, protection and control panels, power transformers
                                        </p>
                                        <p className="m-b10">
                                            We specialize in testing & commissioning services for:
                                        </p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>EHV, HV & MV Substations</li>
                                            <li>Power Plants</li>
                                            <li>Protection & Control</li>
                                            <li>Power Transformers</li>
                                            <li>Testing, Adjusting & Balancing—TAB Service</li>
                                        </ul>
                                    </>
                                )}

                                {content === 'EHV, HV & MV Substations' && (
                                    <>
                                        <h2 className="title">Extra, High & Medium Voltage Substation Testing & Commissioning</h2>
                                        <p className="m-b10">
                                            Bemco Services Substation Testing & Commissioning engineers are experienced with acceptance,
                                            testing and commissioning services of complete substations including: wiring check, power
                                            transformers, CT/VT and circuit breakers, metering, protective relays, control schemes, and verifying
                                            correct operation of all status and interlocking elements in voltages ranging up to 380 kV.
                                        </p>
                                        <p className="m-b10">
                                            We have a responsive and dynamic team, equipped with state of the art testing equipment, which has
                                            made Bemco Services the testing & commission service provider of choice for many of the largest
                                            construction companies in the market. Under the pressure of a deadline? We’ll get the job done right
                                            and on time!
                                        </p>
                                        <p className="m-b10">
                                            Substation Testing & Commissioning Services:
                                        </p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>High Voltage Substations (380kV, 132kV, 110kV) indoor and outdoor & Medium Voltage (33,
                                                13.8 and 11kV) Systems</li>
                                            <li>GIS & Switchgears: Circuit Breakers, Bus Bars, Current Transformers, Voltage Transformers,
                                                Surge Arrestors, Disconnect Switch, Earthing Switch, Local Control Cubicles (LCC)</li>
                                            <li>All types of protective relays, protection & control panels, fault recorder, and sequence of event
                                                recorder</li>
                                            <li>Power Transformers, Capacitor Banks & Shunt Reactors</li>
                                            <li>Primary Injection, Busbar Protection Stability, Scheme & Function, Interface Overall Interlock Test</li>
                                            <li>High & Medium Voltage Cables</li>
                                            <li>DC System, DCDB & Batteries</li>
                                            <li>Calibration of Energy Meter</li>
                                            <li>Grounding measurement by smart ground meter, computer controlled multi-function instrument for measuring grounding systems </li>
                                            <li>Transmission Line: measure line impedances and k-factors on overhead lines and power cables </li>
                                            <li>Relay & control panels factory testing, site training, factory training</li>
                                        </ul>
                                    </>
                                )}

                                {content === 'Power Plants' && (
                                    <>
                                        <h2 className="title">Power Plant Testing & Commissioning</h2>
                                        <p className="m-b10">
                                            Bemco Services has undertaken the testing & commissioning of the largest and most challenging power plant projects in Saudi Arabia.
                                        </p>
                                        <p className="m-b10">
                                            Total capacity tested exceeds 18,000 MW representing 30% of Saudi Arabia’s Power Generation Capacity:
                                        </p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> Riyadh PP12 Combined Cycle (2,175 MW)</li>
                                            <li> Qurayyah PP Combined Cycle Project (4,600 MW)</li>
                                            <li> Riyadh PP10 Combined Cycle (4,600 MW)</li>
                                            <li> Riyadh PP9 Combined Cycle (5,980 MW)</li>
                                            <li> Qassim PP Project Extension-II & III (704 MW)</li>
                                            <li> Qurayyat PP Extension (120 MW)</li>
                                        </ul>

                                        <p className="m-b10">
                                            Power Plant construction projects are always under time pressure, and that’s why Bemco Services is the leading testing & commissioning service provider of choice for many of the largest construction companies in the market.
                                        </p>

                                        <p className="m-b10">
                                            Choosing a proper testing and commissioning service provider is the key to avoiding delays, cost overruns and potential safety hazards. Backed by a dedicated staff and the resources available to administer proven commissioning for any power plant project, Bemco Services will directly influence the ultimate success of an entire project.
                                        </p>

                                        <p className="m-b10">
                                            We offer testing and commissioning services for various types of power generation systems, like gas, diesel, steam and combine cycle units.
                                        </p>

                                        <p className="m-b10">
                                            Our Power Plant Testing and Commissioning Services include:
                                        </p>

                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> GSU, UAT, STG, Excitation, Isolation, LV, Distribution Transformers</li>
                                            <li> Generator Circuit Breakers</li>
                                            <li> 13.8KV/4.16KV SWGR, 480V Low Voltage Switch Board</li>
                                            <li> Generator & Transformer Protection Panel, RTCC Panel & Metering Panels</li>
                                            <li> Generator/Genac/Gleac, Generator VT/CT cubicle & ISO Phase Bus Duct-IPBD</li>
                                            <li> 480V MCC’s, Generator MCCB, and Generator DC System & Distribution Boards</li>
                                            <li> Turbine Auxiliaries</li>
                                            <li> Boilers Pump Motors</li>
                                            <li> Medium Voltage Cables</li>
                                            <li> Station DC systems.</li>
                                            <li> Calibration of Instrumentation</li>
                                            <li> Rotors, Stators & Exciter</li>
                                            <li> DCS</li>
                                            <li> Plant Performance Test</li>
                                        </ul>
                                    </>
                                )}

                                {content === 'Protection & Control' && (
                                    <>
                                        <h2 className="title">Protection and Control Testing & Commissioning </h2>
                                        <p className="m-b10">
                                            Protection systems play a key role in the safe and reliable operation of today’s electricity power systems. Properly working protection devices work to maintain the safety of the system and to safeguard assets from damage. In order to ensure reliable operation, protective relays must be tested by specialized staff.
                                        </p>

                                        <p className="m-b10">
                                            Bemco Services specializes in testing and setting of protection devices, our engineers are experts in testing all kinds of protection schemes and control systems no matter how sophisticated, and they are equipped with the most state of art testing equipment using reliable, time-saving test automation to keep deadlines in time.
                                        </p>

                                        <p className="m-b10">
                                            Protection System Testing & Commissioning Services:
                                        </p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li>All kinds of Numerical Protection Relays (including Siemens, ABB and Alstom)</li>
                                            <li>Generator Protection</li>
                                            <li>Transformer Protection</li>
                                            <li>OHL/UGC Feeder Protection</li>
                                            <li>Bus Bar protection</li>
                                            <li>Capacitor/Reactor Protection</li>
                                            <li>Auto Bus Transfer Scheme (ABTS)</li>
                                            <li>Auto Synchronizing Relays</li>
                                            <li>Auto Voltage Regulation (AVR)</li>
                                            <li>SAS/SCADA Systems</li>
                                            <li>Fault recorders, Sequence of events recorders</li>
                                            <li>Annunciation Panels</li>
                                            <li>Metering & Energy Meters Panels </li>
                                        </ul>
                                    </>
                                )}

                                {content === 'Power Transformers' && (
                                    <>
                                        <h2 className="title">Power Transformer Testing & Commissioning </h2>
                                        <p className="m-b10">
                                            Transformers are the central hub in the field of energy distribution, generation, and transmission. As such, the testing and commissioning of these systems should be done by a qualified team of engineers—equipped with state of the art testing equipment—in order to accurately assess key assets, ensure optimal performance and identifying potential faults before they lead to failure.
                                        </p>

                                        <p>
                                            Bemco Services offers a comprehensive range of Power Transformer services including (but not limited to) diagnostic tests assessing the condition. The test results can be used to: identify transformers at risk of failure, improve performance, and extend transformer life.
                                        </p>

                                        <p className="m-b10">
                                            Power Transformer Services:
                                        </p>

                                        <div>
                                            <p className='ps-5 text-dark fw-bold'>A) Testing & Commissioning:</p>
                                            <div className='row'>
                                                <div className='col-12 col-lg-6'>
                                                    <ul className="list-check primary m-b30 ms-5">
                                                        <li>Winding Resistance Measurement</li>
                                                        <li>Insulation Resistance / Polarization Index</li>
                                                        <li>Turns Ratio</li>
                                                        <li>Voltage Ratio</li>
                                                        <li>Sweep Frequency Response Analysis (SFRA)</li>
                                                        <li>On Line Partial Discharge Test</li>
                                                    </ul>
                                                </div>
                                                <div className='col-12 col-lg-6'>
                                                    <ul className="list-check primary m-b30 ms-5">
                                                        <li>Open & Short Circuit</li>
                                                        <li>Magnetic Balance</li>
                                                        <li>Vector Group</li>
                                                        <li>Calibration of temperature gauges</li>
                                                        <li>Capacitance & Dissipation Factor ( Tan-Delta )</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <p className='ps-5 text-dark fw-bold'>B) Oil Testing:</p>
                                            <ul className="list-check primary m-b30 ms-5">
                                                <li>Collection of Samples at Site</li>
                                                <li>Arrange Comprehensive Laboratory Oil Analysis Report</li>
                                                <li>Provide Transformer Condition Assessment, based on the oil analysis results</li>
                                            </ul>

                                            <p className='ps-5 text-dark fw-bold'>C) Oil filtration, Vacuum & Regeneration with high Capacity Oil Machines.</p>
                                            <ul className="list-check primary m-b30 ms-5">
                                                <li>(3) Vacuum Oil Purification Machine with built in Vacuum Pump– 10,000l/h-Enervac.</li>
                                                <li>(1) Vacuum Oil Purification Machine with built in Vacuum Pump – 6,000 l/h-Enervac.</li>
                                                <li>(1) Vacuum Oil Purification Machine with built in Vacuum Pump – 4,000 l/h.</li>
                                                <li>(1) Oil Regeneration Machine– 10,000l/h-Enervac (24 Column).</li>
                                                <li>Vacuum Pump Set - 2700 m3/h-Filtervac.</li>
                                            </ul>
                                        </div>
                                    </>
                                )}

                                {content === 'Testing, Adjusting & Balancing — TAB' && (
                                    <>
                                        <h2 className="title">Testing, Adjusting & Balancing — TAB</h2>
                                        <p className="m-b10">
                                            Successful HVAC installation relies on testing, adjusting, and balancing services to ensure the design
                                            and performance of your system are achieved on every level. Bemco Services provides a complete
                                            testing & commissioning service for all types and sizes of HVAC systems.
                                        </p>
                                        <p className="m-b10">
                                            Testing, Adjusting and Balancing Specialities:
                                        </p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> Pre-Commissioning and Setting to Work</li>
                                            <li> Air Systems Balancing and Regulation</li>
                                            <li> Water Systems Balancing and Regulation</li>
                                            <li> VAV System Testing</li>
                                            <li>  Performance Testing</li>
                                            <li>Temperature and Humidity analyses</li>
                                            <li> Sound Level Readings</li>
                                        </ul>
                                    </>
                                )}

                                {content === 'Service' && (
                                    <>
                                        <h2 className="title">Service</h2>
                                        <p className="m-b10">
                                            Successful HVAC installation relies on testing, adjusting, and balancing services to ensure the design
                                            and performance of your system are achieved on every level. Bemco Services provides a complete
                                            testing & commissioning service for all types and sizes of HVAC systems.
                                        </p>
                                        <p className="m-b10">
                                            Testing, Adjusting and Balancing Specialities:
                                        </p>
                                        <ul className="list-check primary m-b30 ms-5">
                                            <li> Pre-Commissioning and Setting to Work</li>
                                            <li> Air Systems Balancing and Regulation</li>
                                            <li> Water Systems Balancing and Regulation</li>
                                            <li> VAV System Testing</li>
                                            <li>  Performance Testing</li>
                                            <li>Temperature and Humidity analyses</li>
                                            <li> Sound Level Readings</li>
                                        </ul>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </section >

                <section className="section-full dz-subscribe style-1 bg-gray">
                    <FooterSingUp />
                </section>
            </div >
            <Footer />
        </>
    )
}


