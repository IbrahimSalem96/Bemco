
//Layouts
import Header3 from './../../layouts/Header3';
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';

//Components
import FooterSingUp from './../../components/FooterSingUp';

//images
import gride1 from './../../assets/Bemco/OurApprovals/PDF-logo.png';

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
                            <li className="post-date" style={{ width: '200px' }}><a className='text-white fs-2' href={require('../../assets/Bemco/OurApprovals/+Tab_5_Approval Letters.pdf')} download="Approvals">{download}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function OurApprovals() {
    return (
        <>
            <Header3 />
            <div className="page-content bg-white">
                <PageTitle title='Our Approvals' parentPage='Home' childPage='Our Company' />

                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 m-b40">
                                <ListBar image={gride1} download='Download' title='Testing & Commissioning Third Party Pre-qualification Documents' />
                            </div>
                        </div>
                    </div>
                </section >
                <section className="section-full dz-subscribe style-1">
                    <FooterSingUp />
                </section>
            </div >
            <Footer />
        </>
    )
}
export default OurApprovals;