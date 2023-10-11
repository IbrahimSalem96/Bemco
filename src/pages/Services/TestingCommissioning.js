import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image 
import image from './../../assets/Bemco/services/pic2.jpg';

//Components
import FooterSingUp from './../../components/FooterSingUp';

export default function TestingCommissioning() {
    return (
        <>
            {/* <Header /> */}
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
                                <h2 className="title">Testing & Commissioning</h2>

                                <img src={image} alt='Testing & Commissioning' className='w-100 mb-3' style={{ height: '50vh' }} />

                                <p className="m-b10">
                                    Armed with the most state of the art testing equipment for reliable and efficient results, the engineers
                                    at Bemco Services are skilled in testing & commissioning a broad range of electrical systems including:
                                    simple or combined cycle power plants, high voltage substations, GIS and various switchgears,
                                    protective relays, protection and control panels, power transformers.
                                </p>
                                <p className="m-b10">
                                    W e specialize in testing & commissioning services for:
                                </p>
                                <ul className="list-check primary m-b30 ms-5">
                                    <li>EHV, HV & MV Substations</li>
                                    <li>Power Plants</li>
                                    <li>Protection & Control</li>
                                    <li>Power Transformers</li>
                                    <li>Testing, Adjusting & Balancing—TAB Service</li>
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


