import React from 'react';

//Layouts
import Header3 from './../layouts/Header3';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//components
import AboutUsSectionIndex3 from './../components/Index3/AboutUsSectionIndex3';
import ClientsSlider from './../components/ClientsSlider';
import FooterSingUp from './../components/FooterSingUp';

//images
import bg9 from './../assets/Bemco/background/back_about.jpg';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

//Radial svg section
const radialBlog = [
    { title: 'All Maintenance', datanum: '43' },
    { title: 'Projects Completed', datanum: '73' },
    { title: 'Work Employed', datanum: '67' },
    { title: 'Work facilities', datanum: '95' },
];

function Careers() {
    return (
        <>
            <Header3 />
            <div className="page-content bg-white mb-5">
                <PageTitle title='Careers' parentPage='Home' childPage='Pages' />
                <section className="content-inner-1 section" style={{ backgroundImage: 'url(' + bg9 + ')', backgroundSize: 'cover', backgroundPosition: 'top', paddingBottom: "0" }}>
                    <div className="container">
                        <h1 style={{ color: '#ff5317' }}>CAREERS</h1>
                        <p style={{ color: '#ff5317' }}>Join Our Team: Take Your Career to the Next Level</p>
                        <div className="row g-3">
                            <div className='col-12 col-md-6 col-lg-6'>
                                <input className="w-100 p-2 border border-seconda" type="text" placeholder="Full name" aria-label="default input example" />
                            </div>

                            <div className='col-12 col-md-6 col-lg-6'>
                                <input className="w-100 p-2 border border-seconda" type="text" placeholder="Email Address" aria-label="default input example" />
                            </div>

                            <div className='col-12 col-md-6 col-lg-6'>
                                <input className="w-100 p-2 border border-seconda" type="text" placeholder="Mobile No." aria-label="default input example" />
                            </div>

                            <div className='col-12 col-md-6 col-lg-6'>
                                <input className="w-100 p-2 border border-seconda" type="text" placeholder="Type of position you are seeking" aria-label="default input example" />
                            </div>

                            <p className='mb-0'>Please attach you CV or Bio Here:</p>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <div className="mb-3">
                                    <input className="form-control border border-0" type="file" />
                                </div>
                            </div>

                            <div className='col-12 col-md-6 col-lg-6'>
                                <a className='ps-5 pe-5 pt-2 pb-2 text-white fw-bold' style={{ background: '#ff5317', cursor: 'pointer' }}>SEND</a>
                            </div>

                        </div>
                    </div>
                </section >
            </div >
            <Footer />
        </>
    )
}
export default Careers;