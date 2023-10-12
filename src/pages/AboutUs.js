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

//Radial svg section
const radialBlog = [
    { title: 'All Maintenance', datanum: '43' },
    { title: 'Projects Completed', datanum: '73' },
    { title: 'Work Employed', datanum: '67' },
    { title: 'Work facilities', datanum: '95' },
];

function AboutUs() {
    return (
        <>
            <Header3 />
            <div className="page-content bg-white">
                <PageTitle title='Our Profile' parentPage='Home' childPage='Pages' />
                <section className="content-inner-1 section" style={{ backgroundImage: 'url(' + bg9 + ')', backgroundSize: 'cover', backgroundPosition: 'top', paddingBottom: "0" }}>
                    <div className="container">
                        <AboutUsSectionIndex3 />
                    </div>
                </section>

                <section className="section-full content-inner-5">
                    <div className="container">
                        <ClientsSlider />
                    </div>
                </section>
                <section className="section-full bg-white dz-subscribe style-1">
                    <FooterSingUp />
                </section>
            </div>
            <Footer />
        </>
    )
}
export default AboutUs;