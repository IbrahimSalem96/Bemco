import { Link } from 'react-router-dom';
//Layouts
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';
import Header3 from './../../layouts/Header3';

//Image
import image from './../../assets/Bemco/services/pic4.jpg'

//Components
import FooterSingUp from './../../components/FooterSingUp';

export default function SupplyControlPanels() {
    return (
        <>
            {/* <Header /> */}
            <Header3 />

            <div className="page-content bg-white">
                <PageTitle title='Supply MV/LV & Control Panels' parentPage='Home' childPage='Services' />

                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-4 col-md-5 col-sm-12 m-b30">
                                <aside className="side-bar sticky-top right">
                                    <div className="service_menu_nav widget style-1">
                                        <p className='fs-4 text-dark' >Supply MV/LV & Control Panels</p>
                                    </div>
                                </aside>
                            </div>

                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <h2 className="title">Supply MV/LV & Control Panels</h2>

                                <img src={image} alt='Extra, High & Medium Voltage Substation' className='w-100 mb-3' style={{ height: '50vh' }} />
                                <p className="m-b10">
                                    Bemco Services and Gulf Electrical Distribution Apparatuses Co. Ltd. (BSD & GEDAC) is a leading providers of power distribution equipment, solutions and services in the Middle East. It offers products from its own design, GE and Wistinghouse IEC & ANSI/NEMA products and other international partners such as EFACEC (Portugal).
                                </p>

                                <p className="m-b10">
                                    BSD & GEDAC has a long-term strategic partnership with the OEM's Manufacurer, enabling it to offer solutions approved Low Voltage Switchboard and Medium Voltage Switchgear technologies. GEDAC also manufactures and supplies its own type tested LV Switchboard and MV Switchgear in the region.
                                </p>

                                <p className="m-b10">
                                    GEDAC operates a 21000m2 factory since 1978, delivering turnkey customized engineered solutions for Low and Medium Voltage power distribution, protection & control and after sales services. It follows International Standards such as IEC, ANSI/NEMA and ISO.
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
