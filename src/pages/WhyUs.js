import { Link } from 'react-router-dom';

//Layouts
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';
import Header3 from './../layouts/Header3';

//images
import image from './../assets/Bemco/whyUs/why-us3.jpg';



export default function WhyUs() {
    return (
        <>
            {/* <Header /> */}
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Why Us' parentPage='Home' childPage='Pages' />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="m-b30 align-self-center">
                                    <div className="about-content">
                                        <div className="section-head style-1">
                                            <h3 className="title m-b20">Why Choose BEMCO Services ?</h3>
                                            <p>
                                                When it comes to choosing and independent service provider to install, test, commission, maintain and operate your electrical equipment, you have many options to choose from. In fact, it’s not uncommon to put your project out there for various companies to bid on. It’s nice to have choices, and here are the reasons client’s end up choosing Bemco Services Co:
                                            </p>
                                        </div>
                                        <p>
                                            We Offer large scale project delivery capabilitiesWe have over 46 years of experience under our parent Company-Arabian BEMCOWe utilize only state of the art testing equipmentWe are prequalified with Saudi electricity company (SEC) and large EPC contractorThe engineers and technicians employed at Bemco Services were hired for their skills and experience, because we put quality above all else.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 m-b30">
                                <div className="worker">
                                    <img src={image} alt="work" />
                                </div>
                            </div>
                            <p className="m-b30">
                                Finally, clients who choose Bemco Services end up choosing our company again for future needs-and that speaks volumes to the level of quality service and customer satisfaction.
                                Clients who Choose Bemco Services care about quality assurance and timely delivery.
                            </p>
                            <p className='fw-bold'>
                                Clients who Choose Bemco Services care about quality assurance and timely delivery.
                            </p>
                        </div>
                        <div className="m-b30">
                            <Link to={'./about-us'} className="btn btn-primary btn-border m-r10 m-b10">More About us </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}