import React, { useState } from 'react';
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

//Layouts
import Header3 from './../../layouts/Header3';
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';

//Components
import FooterSingUp from './../../components/FooterSingUp';

//images
import gride1 from './../../assets/Bemco/Certificates/Certificate-01.jpg';
import gride2 from './../../assets/Bemco/Certificates/Certificate-02.jpg';
import gride3 from './../../assets/Bemco/Certificates/Certificate-03.jpg';
import gride4 from './../../assets/Bemco/Certificates/Certificate-04.jpg';
import gride5 from './../../assets/Bemco/Certificates/Certificate-05.jpg';
import gride6 from './../../assets/Bemco/Certificates/Certificate-06.jpg';
import gride7 from './../../assets/Bemco/Certificates/Certificate-07.jpg';
import gride8 from './../../assets/Bemco/Certificates/Certificate-08.jpg';
import gride9 from './../../assets/Bemco/Certificates/Certificate-09.jpg';
import gride10 from './../../assets/Bemco/Certificates/Certificate-10.jpg';


const ListBar = ({ image, date, title }) => {
    return (
        <>
            <div className="dz-card style-1 blog-half shadow m-b30 align-items-center">
                <div className="dz-media p-4">
                    <img src={image} alt={title} />
                </div>
                <div className="dz-info">
                    <div className="dz-meta">
                        <ul>
                            <li className="post-date">{date}</li>
                        </ul>
                    </div>
                    <h3 className="dz-title" style={{ fontSize: '18px' }}>{title}</h3>
                </div>
            </div>
        </>
    )
}

const ListBar2 = ({ image1, image2, date, title }) => {
    return (
        <>
            <div className="dz-card style-1 blog-half shadow m-b30 align-items-center d-md-block d-lg-flex">
                <div className="p-4 d-xl-flex">
                    <img src={image1} alt={title} className='img-fluid' style={{ width: '250px', height: '340px' }} />
                    <img src={image2} alt={title} className='img-fluid' style={{ width: '250px', height: '340px' }} />
                </div>
                <div className="dz-info">
                    <div className="dz-meta">
                        <ul>
                            <li className="post-date">{date}</li>
                        </ul>
                    </div>
                    <h3 className="dz-title">{title}</h3>
                </div>
            </div>
        </>
    )
}

function CertificatesAwards() {
    const { openLightbox, } = useLightbox()
    const options = {
        settings: {
            slideAnimationType: 'slide',
        }
    };

    return (
        <>
            <Header3 />
            <div className="page-content bg-white">
                <PageTitle title='Certificates & Awards' parentPage='Home' childPage='Our Company' />

                <section className="content-inner">
                    <div className="container">
                        <SRLWrapper options={options}>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 m-b40">
                                    <ListBar2 image1={gride2} image2={gride3} date='Jan 3, 2021' title='INMA Appreciation Certificate-Operation & Maintenance for Load Centre (C) for King Abdulaziz International Airport at Jeddah City' />
                                </div>

                                <div className="col-xl-12 col-lg-12 m-b40">
                                    <ListBar2 image1={gride4} image2={gride5} date='Jan 3, 2021' title='KAAU Appreciation Certificate-Operation & Maintenance for Central Utility Plant No.2 (CUP-2) at king Abdulaziz University at Jeddah City' />
                                </div>


                                <div className="col-xl-12 col-lg-12 m-b40">
                                    <ListBar2 image1={gride6} image2={gride7} date='Jan 3, 2021' title='OMAS Alzahid Appreciation Certificate-Operation & Maintenance for Generator Building Electrical System for Load Centre C for King Abdulaziz International Airport at Jeddah City' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride8} date='April 8, 2015' title='MEJDAF - Altoukhi Appreciation Certificate-T&C of 132/33/13.8 Kv Tabarjal S/S' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride9} date='April 7, 2015' title='Alstom Appreciation Certificate-T&C of 110/13.8 KV Tiyam-2 S/S' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride10} date='June 26, 2014' title='ABB Appreciation Certificate – T&C of 8135 S/S at Riyadh' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride1} date='- -, -' title='NATIONAL GUARD Appreciation Certificate- Overall performance of testing & commissioning subcontractor in project  132/33/13.8 Kv Tabarjal S/S' />
                                </div>
                            </div>
                        </SRLWrapper>
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
export default CertificatesAwards;