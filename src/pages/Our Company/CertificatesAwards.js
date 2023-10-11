import React, { useState } from 'react';
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

//Layouts
import Header3 from './../../layouts/Header3';
import Footer from './../../layouts/Footer2';
import PageTitle from './../../layouts/PageTitle';

//Components
import FooterSingUp from './../../components/FooterSingUp';

//images
import gride1 from './../../assets/Bemco/Certificates/Certificate1.jpg';
import gride2 from './../../assets/Bemco/Certificates/Certificate2.jpg';
import gride3 from './../../assets/Bemco/Certificates/Certificate3.jpg';
import gride4 from './../../assets/Bemco/Certificates/Certificate4.jpg';
import gride5 from './../../assets/Bemco/Certificates/Certificate5.jpg';
import gride6 from './../../assets/Bemco/Certificates/Certificate6.jpg';
import gride7 from './../../assets/Bemco/Certificates/Certificate7.jpg';
import gride8 from './../../assets/Bemco/Certificates/Certificate8.jpg';


const ListBar = ({ image, date, title }) => {
    return (
        <>
            <div className="dz-card style-1 blog-half shadow m-b30">
                <div className="dz-media p-4">
                    <img src={image} alt={title} />
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
                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride1} date='August 30, 2019' title='VEOLIA - Technical Support Certificate' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride2} date='August 30, 2019' title='ALFANAR - Technical Support Certificate' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride3} date='August 30, 2019' title='GEDAC ELECTRIC Technical Support Certificate' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride4} date='August 30, 2019' title='ELECTRO TECHNIQUE - Technical Support Certificate' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride5} date='August 30, 2019' title='AI-ZAMAN - Technical Support Certificate' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride6} date='August 30, 2019' title=' ENERGY DISTRIBUTER LAB - Technical Support Certificate' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride7} date='August 30, 2019' title='MEGA - Technical Support Certificate' />
                                </div>

                                <div className="col-xl-6 col-lg-6 m-b40">
                                    <ListBar image={gride8} date='August 30, 2019' title='MEJDAF - Technical Support Certificate' />
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