import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image 
import image from './../../assets/Bemco/SafetyPolicy/Safety_and-Environment-01.jpg';
import image1 from './../../assets/Bemco/SafetyPolicy/Safety_and_Environment-02.jpg';

//Components
import FooterSingUp from './../../components/FooterSingUp';

export default function QualitySafetyPolicy() {
    return (
        <>
            <Header3 />
            <div className="page-content bg-white">
                <PageTitle title='Quality Safety Policy' parentPage='Home' childPage='Services' />

                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="side-bar sticky-top right">
                            <div className="service_menu_nav widget style-1">
                                <p className='fs-2 m-0 fw-bold text-dark' style={{ whiteSpace: 'nowrap' }}>Health, Safety and Environment</p>
                            </div>
                            <p className='text-dark'>
                                Arabian Bemco requires that all practical efforts be taken to provide a work environment that is free from recognized safety and health hazards. Accordingly, we are committed to achieving and sustaining a “Zero Accident Tolerance” policy through continuous improvement practices. Furthermore, we are dedicated to meeting and exceeding the expectations and requirements of our clients. Arabian Bemco HSE management system has been certified and is compliant with the requirements of the OHSAS 18001 : 2007.
                            </p>

                            <p className='mb-3'>We utilize the following principles to implement our HSE management system:</p>

                            <article className='mb-2'>
                                <p className='title fw-bold m-0'>1. Accountability</p>
                                All employees and related parties working on Arabian Bemco projects are accountable for their actions to work safely and endanger their health and others’.
                            </article>

                            <article className='mb-2'>
                                <p className='title fw-bold m-0'>2. Responsibility</p>
                                All employees on Arabian Bemco projects must share the responsibilities for the maintenance of a safe and healthy work environment. We ensure that our staff continues to be motivated and committed to meet the company’s targets and objectives.
                            </article>

                            <article className='mb-2'>
                                <p className='title fw-bold m-0'>3. Continuity</p>
                                In order to ensure the highest industry standards, Arabian Bemco benchmarks its system with the industry leaders and continuously develops training programs for its employees and so promoting an atmosphere of continuous improvements.
                            </article>

                            <article className='mb-2'>
                                <p className='title fw-bold m-0'>4. Integrity</p>
                                The Safety and Health aspects of this system are an integral part of our operations. No job is so important or unusual that it cannot be performed in a safe and healthful manner. For that purpose, risk assessment will be implemented. All management including supervisors are accountable to the top management as leaders and overseers of HSSE matters and shall provide proper working environment, working procedures and facilities as well as establish strong awareness throughout Arabian Bemco projects.
                            </article>

                        </div>


                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                                <img src={image} alt='Testing & Commissioning' className='w-100 mb-3' />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 inner-text">
                                <img src={image1} alt='Testing & Commissioning' className='w-100 mb-3' />
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


