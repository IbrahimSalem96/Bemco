import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image
import image from './../../assets/Bemco/services/pic7.jpg'

//Components
import FooterSingUp from './../../components/FooterSingUp';

export default function EngineeringServices() {
    return (
        <>
            {/* <Header /> */}
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Engineering Services' parentPage='Home' childPage='Services' />

                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-4 col-md-5 col-sm-12 m-b30">
                                <aside className="side-bar sticky-top right">
                                    <div className="service_menu_nav widget style-1">
                                        <p className='fs-4 text-dark' style={{ whiteSpace: 'nowrap' }}>Engineering Services</p>
                                    </div>
                                </aside>
                            </div>

                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <h2 className="title">Engineering Services</h2>
                                <img src={image} alt='Engineering Services' className='w-100 mb-3' style={{ height: '50vh' }} />

                                {/* <p className="m-b10">
                                </p> */}
                                <ul className="list-check primary m-b30 ms-5">
                                    <li>test</li>
                                    <li>test</li>
                                    <li>test</li>
                                    <li>test</li>
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
