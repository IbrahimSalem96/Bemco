import { Link } from 'react-router-dom';
//Layouts
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';
import Header3 from './../layouts/Header3';

//Components
import FooterSingUp from './../components/FooterSingUp';

//images
import pic1 from './../assets/Bemco/services/pic1.jpg'
import pic2 from './../assets/Bemco/services/pic2.jpg'
import pic3 from './../assets/Bemco/services/pic3.jpg'
import pic4 from './../assets/Bemco/services/pic4.jpg'
import pic5 from './../assets/Bemco/services/pic5.jpg'
import pic6 from './../assets/Bemco/services/pic6.jpg'
import pic7 from './../assets/Bemco/services/pic7.jpg'
import pic8 from './../assets/Bemco/services/pic8.png'

const serviceData = [
    { title: 'Operation & Maintenance', image: pic1, page: '/operation-maintenance' },
    { title: 'Testing & Commissioning', image: pic2, page: '/testing-commissioning' },
    { title: 'Installation & Retrofitting', image: pic3, page: '/installation-retrofitting' },
    { title: 'HVAC & TAB', image: pic4, page: '/supply-MV/LV' },
    { title: 'Facility Management', image: pic5, page: '/HVAC-TAB' },
    { title: 'Engineering Services', image: pic6, page: '/facility-management' },
    { title: 'Supply MV/LV & Control Panels', image: pic7, page: '/engineering-services' },
    { title: 'Supply Spare Parts', image: pic8, page: '/supply-spare-parts' },
];

function Services() {
    return (
        <>
            {/* <Header /> */}
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Our Services' parentPage='Home' childPage='Pages' />
                {/* <!-- Services --> */}
                <section className="content-inner bg-gray">
                    <div className="container">
                        <div className="row">
                            {serviceData.map((data, ind) => (
                                <div className="col-lg-4 col-md-6" key={ind}>
                                    <div className="content-box2 m-b30">
                                        <div className="dz-info">
                                            <h3 className="title">{data.title}</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                                        </div>
                                        <div className="dz-media m-b30">
                                            <img src={data.image} alt={data.title} style={{ height: '25vh' }} />
                                        </div>
                                        <div className="dz-bottom">
                                            <Link to={data.page} className="btn-link">READ MORE<i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
export default Services;