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

export default function OurCommitment() {
    return (
        <>
            <Header3 />
            <div className="page-content bg-white">
                <PageTitle title='Our Commitment' parentPage='Home' childPage='Our Company' />
                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="side-bar sticky-top right">
                            <div className="service_menu_nav widget style-1">
                                <p className='fs-2 m-0 fw-bold text-dark' style={{ whiteSpace: 'nowrap' }}>OurCommitment</p>
                            </div>
                            <p className='text-dark'>
                                <article className='mb-3'>
                                    The mission of BEMCO SERVICES is to provide reliable, efficient and sustainable solutions for our clients in the fields of engineering services, operation & maintenance and testing & commissioning.
                                </article>

                                <article className='mb-3'>
                                    We strive to meet the highest standards of quality and safety in every project we undertake. Therefore, we commit ourselves to follow the best practices and comply with the relevant regulations and specifications of our clients, who are our top priority.
                                </article>

                                <article className='mb-3'>
                                    We achieve our mission by implementing a quality management system based on ISO-9001, 14001 & OHSAS 18001. These policies guide our actions and decisions throughout the company and ensure that we deliver quality results in a timely and cost-effective manner.
                                </article>

                                <article className='mb-3'>
                                    The company’s leaders at all levels are responsible for enforcing the quality management system within their scope of work. All staff involved in quality related tasks adhere to the procedures and instructions of the quality manual in accordance with the ISO standards.
                                </article>
                            </p>
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


