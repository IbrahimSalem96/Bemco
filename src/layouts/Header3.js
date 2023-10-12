import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from './../assets/images/logo.png';
import logowhite from './../assets/Bemco/logo_bemco.png';

export default function Header3() {
    //Sidebar
    const [openToggleBtn, setOpenToggleBtn] = useState(false);

    //Header fixed
    const [headerFix, setheaderFix] = React.useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setheaderFix(window.scrollY > 50);
        });

        // Menu open {mestmenu} 
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
        function checkLi(current) {
            //SubMenu.forEach(el => (current !== el) ? el.classList.remove('none') : '');
            navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
            setTimeout(() => {
                current.classList.toggle('open');
            }, 100);
        }

    }, []);
    return (
        <>
            <header className="site-header mo-left header style-3">
                <div className="top-bar">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="dz-topbar-center">
                                <p className="help-text" style={{ color: "#062355" }}><strong>Need Help :</strong>Bemco Services Division (BSD) - A WORD of Engineering Services, For Inquires Email: <a href='mailto:Services@Bemco.net' className='fw-bold' target='_blank'>Services@Bemco.net</a> </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Main Header --> */}
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""} `}>
                    <div className="main-bar clearfix ">
                        <div className="container-fluid clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-white">
                                <Link to={"./"}><img src={logowhite} alt="Logo" width='90' height='9d0' /></Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler navicon justify-content-end ${openToggleBtn ? 'open' : 'collapsed'}`}
                                onClick={() => setOpenToggleBtn(!openToggleBtn)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    {/* <div className="search-inhead">
                                        <div className="dz-quik-search On">
                                            <form action="#">
                                                <input name="search" value="" type="text" className="form-control" placeholder="Search" />
                                                <span id="quik-search-remove"><i className="ti-close"></i></span>
                                            </form>  
                                        </div>
                                        <Link to={"#"} className="search-link" id="quik-search-btn">
                                            <i className="fas fa-search"></i>
                                        </Link>
                                    </div> */}
                                    <a href={"#Contact_Us"} className="btn text-white fw-bold d-xl-inline-block d-none btn-border   m-r10 m-b10" style={{ backgroundColor: '#ff5317' }}>Contact Us</a>
                                </div>
                            </div>
                            {/* <!-- Extra Nav --> */}
                            <div className={`header-nav navbar-collapse justify-content-start ${openToggleBtn ? ' collapse show' : ' collapse'}`}>
                                <div className="logo-header logo-dark">
                                    <Link to={"./"}><img src={logo} alt="" /></Link>
                                </div>
                                <ul className="nav navbar-nav navbar navbar-left">
                                    <li className="sub-menu-down"><Link to={"./"}>Home</Link></li>
                                    <li className="sub-menu-down"><Link to={"#"} classList="arrow"><span>Our Company</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={"./about-us"}>Our Profile</Link></li>
                                            <li><Link to={"./our-commitment"}>Our Commitment</Link></li>
                                            <li><Link to={"./quality-safety-policy"}>Quality & Safety Policy</Link></li>
                                            <li><Link to={'./certificates-awards'}>Certificates & Awards</Link></li>
                                            <li><Link to={'./our-partners'}>Our Partners</Link></li>
                                            <li><Link to={'./our-approvals'}>Our Approvals</Link></li>
                                            <li><Link to={'./our-clients'}>Our Clients</Link></li>


                                        </ul>
                                        {/* <li> <Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={'company-history'}>Company History</Link></li>
                                                    <li><Link to={'contact-us'}>Contact Us</Link></li>
                                                    <li><Link to={'error-404'}>Error 404</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={'./gallery-grid-4'}>Gallery Grid 4</Link></li>
                                                    <li><Link to={'./gallery-masonry'}>Gallery Masonry</Link></li>
                                                    <li><Link to={'./help-desk'}>Help Desk</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={'./pricing'}>Pricing Table</Link></li>
                                                    <li><Link to={'./privacy-policy'}>Privacy Policy</Link></li>
                                                    <li><Link to={'./services'}>Services</Link></li>
                                                </ul>
                                            </li> */}
                                    </li>
                                    <li className="sub-menu-down"><Link to={"./services"} classList="arrow"><span>Services</span></Link>
                                        <ul className="sub-menu" style={{ width: '270px' }}>
                                            <li><Link to={'/operation-maintenance'}>Operation & Maintenance</Link></li>
                                            <li><Link to={'/testing-commissioning'}>Testing & Commissioning</Link></li>
                                            <li><Link to={'/installation-retrofitting'}>Installation & Retrofitting</Link></li>
                                            <li><Link to={'/HVAC-TAB'}>HVAC & TAB</Link></li>
                                            <li><Link to={'/facility-management'}>Facility Management</Link></li>
                                            <li><Link to={'/engineering-services'}>Engineering Services</Link></li>
                                            <li><Link to={'/supply-MV/LV'}>Supply MV/LV & Control Panels</Link></li>
                                            <li><Link to={'/supply-spare-parts'}>Supply Spare Parts</Link></li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><Link to={"/why-us"}>Why Us ?</Link></li>
                                    <li className="sub-menu-down"><Link to={"#"} classList="arrow"><span>Our Key Projects</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./shop-grid-3'}>Shop Grid 3</Link></li>
                                            <li><Link to={'./product-details'}>Product Details</Link></li>
                                            <li><Link to={'./shop-wishlist'}>Wishlist</Link></li>
                                            <li><Link to={'./shop-checkout'}>Checkout</Link></li>
                                            <li><Link to={'./shop-cart'}>Cart</Link></li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><Link to={"./blog-list-sidebar"}>Articles</Link>
                                        {/* <ul className="sub-menu">
                                            <li><Link to={'./blog-grid'}>Blog Grid</Link></li>
                                            <li><Link to={'./blog-large-right-sidebar'}>Blog Right Sidebar</Link></li>
                                            <li><Link to={'./blog-list-sidebar'}>Blog List Sidebar</Link></li>
                                            <li><Link to={'./blog-list-left-sidebar'}>Blog List Left Sidebar</Link></li>
                                            <li><Link to={'./blog-details-post-wide'}>Post Wide View</Link></li>
                                            <li><Link to={'./blog-details'}>Blog Details</Link></li>
                                        </ul> */}
                                    </li>
                                    <li className="sub-menu-down"><Link to={"./Careers"}>Careers</Link></li>
                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                        <li><a className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                                        <li><a className="fab fa-twitter" href="https://twitter.com/?lang=en"></a></li>
                                        <li><a className="fab fa-linkedin-in" href="https://www.linkedin.com/"></a></li>
                                        <li><a className="fab fa-instagram" href="https://www.instagram.com/?hl=en"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* <!-- Main Header End --> */}
            </header >
        </>
    )
}
