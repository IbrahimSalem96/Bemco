import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image
import image from './../../assets/Bemco/services/pic4.jpg'

//Components
import FooterSingUp from './../../components/FooterSingUp';

export default function SupplyControlPanels() {
    return (
        <>
            {/* <Header /> */}
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Extra, High & Medium Voltage Substation' parentPage='Home' childPage='Services' />

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
                                <h2 className="title">Extra, High & Medium Voltage Substation</h2>

                                <img src={image} alt='Extra, High & Medium Voltage Substation' className='w-100 mb-3' style={{ height: '50vh' }} />

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
                                    <li>13.8 and 11kV) Systems
                                        GIS & Switchgears: Circuit Breakers, Bus Bars, Current Transformers, Voltage Transformers,
                                        Surge Arrestors, Disconnect Switch, Earthing Switch, Local Control Cubicles (LCC)</li>
                                    <li>All types of protective relays, protection & control panels, fault recorder, and sequence of event
                                        recorder</li>
                                    <li>Power Transformers, Capacitor Banks & Shunt Reactors</li>
                                    <li>Primary Injection, Busbar Protection Stability, Scheme & Function, Interface Overall Interlock
                                        Test</li>
                                    <li>High & Medium Voltage Cables</li>
                                    <li>DC System, DCDB & Batteries</li>
                                    <li>Calibration of Energy Meter</li>
                                    <li>Provision of Spare Parts and Consumables</li>
                                    <li>Grounding measurement by smart ground meter, computer controlled multi-function instrument
                                        for measuring grounding systems</li>
                                    <li>Transmission Line: measure line impedances and k-factors on overhead lines and power cables </li>
                                    <li>Relay & control panels factory testing, site training, factory training</li>
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
