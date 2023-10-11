import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image
import image from './../../assets/Bemco/services/pic1.jpg'

//Components
import FooterSingUp from './../../components/FooterSingUp';

export default function OperationMaintenance() {
    return (
        <>
            {/* <Header /> */}
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Operation & Maintenance' parentPage='Home' childPage='Services' />

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
                                <h2 className="title">Operations & Maintenance - O & M</h2>

                                <img src={image} alt='Operations & Maintenance - O & M' className='w-100 mb-3' style={{ height: '50vh' }} />

                                <p className="m-b10">
                                    Based in Saudi Arabia, Bemco Services is a leading provider of operations and maintenance (O&M)
                                    services for the Energy, Manufacturing industries and facilities. These services typically include:
                                </p>
                                <ul className="list-check primary m-b30 ms-5">
                                    <li>Plant Maintenance</li>
                                    <li>Facility Management</li>
                                    <li>Operations Support (24/7)</li>
                                    <li>Asset Performance Improvement</li>
                                    <li>Operations Readiness</li>
                                    <li>Start Up & Commissioning</li>
                                    <li>Small Capital Project Design & Construction</li>
                                    <li>Preventive & Corrective Maintenance</li>
                                    <li>Provision of Spare Parts and Consumables</li>
                                    <li>Repair and Refurbishment of major components</li>
                                    <li>Execution of scheduled Outages</li>
                                    <li>Condition Monitoring</li>
                                    <li>Remote Monitoring</li>
                                </ul>

                                <p>
                                    The benefits of an Operation & Maintenance contract include minimizing owner risk and reducing overall
                                    operating cost, while also maximizing plant productivity and profitability.
                                    More importantly, the added benefits included when you choose Bemco Services for your Operation &
                                    Maintenance needs are that you will have a full team of qualified experts—equipped with state of the
                                    art technology-- who care about your bottom line and comply with international Quality, Health &
                                    Safety, and Environmental standards.
                                </p>

                                <p className='mb-0'>Operation, maintenance and w arranty services include </p>
                                <ul className="list-check primary ms-5">
                                    <li>Power Plants (Steam Turbines, Gas Turbines, Combined Cycle & Diesel Generators)</li>
                                    <li>District Cooling Plants</li>
                                    <li>Start Up & Warranty Service</li>
                                    <li>Facilities Operation & Maintenance</li>
                                    <li>Maintenance, Repair and Overhaul (MRO)</li>
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


