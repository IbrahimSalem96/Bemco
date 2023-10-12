import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image
import image from './../../assets/Bemco/services/pic6.jpg'

//Components
import FooterSingUp from './../../components/FooterSingUp';

export default function FacilityManagement() {
    return (
        <>
            {/* <Header /> */}
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Facility Management' parentPage='Home' childPage='Services' />

                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-4 col-md-5 col-sm-12 m-b30">
                                <aside className="side-bar sticky-top right">
                                    <div className="service_menu_nav widget style-1">
                                        <p className='fs-4 text-dark' style={{ whiteSpace: 'nowrap' }}>Facility Management</p>
                                    </div>
                                </aside>
                            </div>

                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <img src={image} alt='Facility Management' className='w-100 mb-3' style={{ height: '50vh' }} />
                                <h2 className="title">Facility Management</h2>
                                <p className="m-b10">
                                    Based in Saudi Arabia, Bemco Services is an Operations and Maintenance leader specializing in operating and maintaining select industrial and commercial facilities. Our technical experts can implement building and equipment maintenance programs designed to optimize life cycle value, operating costs, and reliability… resulting in a more comfortable, safe, and productive workspace for employees.
                                </p>

                                <p className='fw-bold text-dark fs-4'>Facility Maintenance Services Focus On</p>


                                <ul className="list-check primary m-b30 ms-5">
                                    <li>Implementing rigorous maintenance practices to ensure high levels of mechanical systems integrity</li>
                                    <li>Planning and scheduling</li>
                                    <li>Work process control</li>
                                    <li>Maintenance material management</li>
                                    <li>Complying with Health, safety, and environmental requirements</li>
                                    <li>Systematic failure elimination</li>
                                </ul>

                                <p>
                                    Today's most successful companies focus on what they do best. By outsourcing operations & maintenance (O&M) and facilities maintenance services, you can concentrate your resources on what you do best.
                                </p>
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
