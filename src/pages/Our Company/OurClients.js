//Layouts
import Header3 from './../../layouts/Header3';
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';

//Components
import FooterSingUp from './../../components/FooterSingUp';

//images
import gride1 from './../../assets/Bemco/OurClients/Excel-logo.png'

const ListBar = ({ image, download, title }) => {
    return (
        <>
            <div className="dz-card style-1 blog-half shadow m-b30 align-items-center">
                <div className="dz-media p-4">
                    <img src={image} alt={title} />
                </div>
                <div className="dz-info">
                    <h3 className="dz-title">{title}</h3>
                    <div className="dz-meta">
                        <ul>
                            <li className="post-date" style={{ width: '200px' }}><a className='text-white fs-2' href={require('../../assets/Bemco/OurClients/Customers.xlsx')} download="Approvals">{download}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function OurClients() {
    return (
        <>
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Our Clients' parentPage='Home' childPage='Our Company' />

                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <aside className="side-bar sticky-top right">
                            <div className="service_menu_nav widget style-1">
                                <h2 className="title">Bemco Services Division-Customer List:</h2>
                                <p className="m-b10">
                                    Below listed some of our valuable customers where we are proud to serve:
                                </p>
                            </div>
                        </aside>

                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-6 col-md-6 col-sm-12 inner-text">
                                <ul className="list-check primary m-b30 ms-5">
                                    <li>Saudi Electricity Company - SEC</li>
                                    <li>Siemens</li>
                                    <li>Iscosa</li>
                                    <li>Alstom ( Areva)</li>
                                    <li>ABB Contracting</li>
                                    <li>Arabian Bemco Contracting</li>
                                    <li>Saudi Bin Ladin Group</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 inner-text">
                                <ul className="list-check primary m-b30 ms-5">
                                    <li>Advanced Vision</li>
                                    <li>Alfanar Electrical Factory</li>
                                    <li>CEPCO</li>
                                    <li>SSEM</li>
                                    <li>GEDAC Electric</li>
                                    <li>Saudi Chevron Factory</li>
                                    <li>Innovative System</li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-inner">
                            <ListBar image={gride1} download='Download' title='For full information, please download the file' />
                        </div>
                    </div>
                </section>
                <section className="section-full dz-subscribe style-1">
                    <FooterSingUp />
                </section>
            </div >
            <Footer />
        </>
    )
}
export default OurClients;


