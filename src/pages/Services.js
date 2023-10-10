import { Link } from 'react-router-dom';
//Layouts
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';
import Header3 from './../layouts/Header3';

//Components
import FooterSingUp from './../components/FooterSingUp';

//images
import pic1 from './../assets/Bemco/pic1.jpg';
import pic2 from './../assets/Bemco/pic2.jpg';
import pic3 from './../assets/Bemco/pic3.jpg';
import pic4 from './../assets/Bemco/pic4.jpeg';

const serviceData = [
    { title: 'Operation & Maintenance', image: pic1 },
    { title: 'Testing & Commissioning', image: pic2 },
    { title: 'Installation & Retrofitting', image: pic3 },
    { title: 'HVAC & TAB', image: pic4 },
    { title: 'Facility Management', image: pic4 },
    { title: 'Engineering Services', image: pic4 },
    { title: 'Supply MV/LV & Control Panels', image: pic4 },
    { title: 'Supply Spare Parts', image: pic4 },
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
                                            <Link to={"#"} className="btn-link">READ MORE<i className="fas fa-arrow-right"></i></Link>
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