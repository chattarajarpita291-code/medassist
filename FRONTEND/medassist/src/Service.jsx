import React from "react";
import "./assets/css/Service.css";
import serve from './assets/images/service.avif';
import Navbar from "./Navbar";

function Service() {
    return (
        <div className="services">
        <Navbar />
        <div className="main-text">Our Services</div>
        <div className="service-content">
            <div className="serv1">
                <div className="s1">
                    <h2>Echocardiograms</h2>
                    <p>Echocardiograms are non-invasive ultrasound tests that create images of the heart's structure and function, allowing doctors to assess its size, shape, and movement.</p>
                </div>
                <div className="s1"><h2>Pediatric Services</h2>
                    <p>Pediatric services encompass a wide range of medical care for infants, children, and adolescents, addressing their unique health needs.</p></div>
                <div className="s1"><h2>Women's Healthcare</h2>
                    <p>Women's healthcare refers to medical services and treatments specifically designed to address the unique health needs of women throughout their lives.</p></div>
            </div>
            <div className="serv2"><img src={serve} alt="bg" className="service-image" /></div>
            <div className="serv1">
                <div className="s1"><h2>Dermatology</h2>
                    <p>Dermatology is the branch of medicine that focuses on diagnosing and treating skin, hair, and nail conditions.</p></div>
                <div className="s1"><h2>Laboratory Testing</h2>
                    <p>Laboratory testing involves analyzing samples, such as blood or urine, to diagnose diseases and monitor health.</p></div>
                <div className="s1"><h2>CT Scans</h2>
                    <p>CT scans are imaging tests that use X-rays to create detailed pictures of the inside of the body.</p></div>
            </div>
            </div>
        </div>
    );
}

export default Service;