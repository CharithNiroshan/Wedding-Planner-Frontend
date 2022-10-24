import React from "react";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/images/phone.png";
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineCopyrightCircle} from "react-icons/ai";
import {IoLogoAndroid} from "react-icons/io";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top d-flex flex-wrap justify-content-around p-4">
                <div className="footer-top-left d-flex flex-column align-items-center p-3">
                    <img className="footer-top-left-logo" src={logo} alt="logo"/>
                    <div className="d-flex align-items-center">
                        <AiFillFacebook className="footer-top-left-social-media-icon"/>
                        <AiFillInstagram className="footer-top-left-social-media-icon"/>
                        <AiFillTwitterCircle className="footer-top-left-social-media-icon"/>
                    </div>
                </div>
                <div className="footer-top-center p-3">
                    <h2 className="footer-top-center-title">Discover</h2>
                    <ul className="footer-top-center-list">
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/about-us">Categories</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/terms-of-services">Terms of Services</a></li>
                    </ul>
                </div>
                <div className="footer-top-center p-3">
                    <h2 className="footer-top-center-title">Company</h2>
                    <ul className="footer-top-center-list">
                        <li><a href="/privacy">Pricing</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/faq">Contact Us</a></li>
                        <li><a href="/terms-of-services">Affiliate Register</a></li>
                    </ul>
                </div>
                <div className="footer-top-right d-flex flex-column align-items-center p-3">
                    <div className="footer-top-right-text d-flex flex-wrap align-items-center justify-content-center">
                        <h2>Click to Download Mobile App</h2>
                        <IoLogoAndroid className="footer-top-right-logo"/>
                    </div>
                    <img className="footer-top-right-image" src={phone} alt="logo"/>
                </div>
            </div>
            <div className="footer-bottom d-flex flex-column align-items-center p-3">
                <p className="footer-bottom-text">Copyright <AiOutlineCopyrightCircle/> 2022 MyWeddingPlanner.lk</p>
                <p className="footer-bottom-text">Designed by Charith Wijebandara</p>
            </div>
        </div>
    );
}

export default Footer;