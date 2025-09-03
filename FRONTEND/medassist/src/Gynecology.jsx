import React from "react";
import "./assets/css/Gynecology.css";
import { Link } from "react-router-dom";
const gyno=[
    {
id:202,
himg: "https://images.unsplash.com/photo-1677341279389-155310e12f21?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3luZWNvbG9neSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
htext: "GYNECOLOGY",
hhead: "Experts in Women's Health",
hsubhead: "Your health is our top priority. We provide comprehensive, affordable medical care for women.",
shead: "Gynecology Services",
stexta:"Routine Examinations",
stextb:"Pregnancy Care",
stextc:"Menstrual Disorders",
stextd:"Fertility Assessments",
stexte:"Preventative Screenings",
stextf:"Menopause Management",
wtext:"Welcome to Our Gynecology Centre",
wtexta:"Our Mission",
wtextb:"To provide exceptional, compassionate patient care tailored to your needs.",
wtextc:"Our Vision",
wtextd:"We aim to empower women through education and comprehensive healthcare.",
wtexte:"24/7 Support",
wtextf:"We're dedicated to supporting our patients anytime. Schedule your appointment at your convenience.",
dimg:"https://www.indicure.com/assets/img/best-surgeons/Gynecologist/Dr.-Veena-Bhat.webp",
dtexta:"Dr. Veena Bhat",
dtextb:"Gynecologist And Obstetrician",
dtextc:"MBBS, MD (Obs & Gynae), Dip. (Gynecological Endoscopy), USA",
dtextd:"Experience: 30+ Years",
dtexte:"Location: Gurgaon",
dtextf:"Hospital: Artemis Hospital",
dtextg:"She is the premier member of several leading associations such as the Association of Obstetricians & Gynecologists, the National Association of Voluntary Sterilization and Family Welfare, the Indian Menopause Society, and the Federation of Obstetric & Gynecological Society of India.",
ptexta:"The level of care and attention I've received has been incredible. Thank you for making my health your priority.",
ptextb:"I appreciate the thorough examinations and the time taken to address my concerns.",
ntexta:"Understanding PCOS and Its Impact",
ntextb:"Innovations in Prenatal Care",
ntextc:"Menopausal Care Options: What You Need to Know",
simga:"https://images.unsplash.com/photo-1554224155-cfa08c2a758f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um91dGluZSUyMEV4YW1pbmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
simgb:"https://plus.unsplash.com/premium_photo-1661779386672-3db9bb41faa1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJlZ25hbmN5JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
simgc:"https://plus.unsplash.com/premium_photo-1702599143950-3c89ec86cb17?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuc3RydWFsJTIwRGlzb3JkZXJzfGVufDB8fDB8fHww",
simgd:"https://plus.unsplash.com/premium_photo-1677260349772-1906c6725877?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmVydGlsaXR5JTIwQXNzZXNzbWVudHN8ZW58MHx8MHx8fDA%3D",
simge:"https://plus.unsplash.com/premium_photo-1702598970492-b95a3ce00ed9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJldmVudGF0aXZlJTIwU2NyZWVuaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
simgf:"https://plus.unsplash.com/premium_photo-1683121445096-bc58949b44e3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVub3BhdXNlJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
},
];
const Gynecology = () => {
 return(
    <>
    {gyno.map((gyn) => (
    <div className="medica" key={gyn.id}>

        <div className="header-medic">
            <img src={gyn.himg} alt="headerimage" className="header-image" />
            <div className="gradient"></div>
  <div className="header-text">{gyn.htext}</div>
</div>

<div className="hero-medic">
    <div className="hero-medic-text">
        <h2>{gyn.hhead}</h2>
        <p>{gyn.hsubhead}</p>
    </div>
   
        <img src="https://media.istockphoto.com/id/1305638866/photo/smiling-indian-young-female-doctor-standing-isolated-over-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=8O2uq-8z8HBZezVpWbLUGxVyN42xHrZ2r_HxtRYn27Q=" alt="heromedicimg" className="hero-image-medic" />
        
        </div>

<h2 className="medic-service-text">{gyn.shead}</h2>
        <div className="medic-service1">
               
             <div className="medicservcards">
                       <img src={gyn.simga} alt="hi" className="medicservimg" />
                        <h3>{gyn.stexta}</h3>
                    </div>
                    <div className="medicservcards">
                        <img src={gyn.simgb} alt="hi" className="medicservimg" />
                        <h3>{gyn.stextb}</h3>
                    </div>
                    <div className="medicservcards">
                        <img src={gyn.simgc} alt="hi" className="medicservimg" />
                        <h3>{gyn.stextc}</h3>
                    </div>
                    </div>
                <div className="medic-service2">
                    <div className="medicservcards">
                        <img src={gyn.simgd} alt="hi" className="medicservimg" />
                        <h3>{gyn.stextd}</h3>
                    </div>
                    <div className="medicservcards">
                       <img src={gyn.simge} alt="hi" className="medicservimg" />
                        <h3>{gyn.stexte}</h3>
                    </div>
                    <div className="medicservcards">
                        <img src={gyn.simgf} alt="hi" className="medicservimg" />
                        <h3>{gyn.stextf}</h3>
                    </div>
                </div>
                <div className="wel-text">{gyn.wtext}</div>
                <div className="wel-sec">
                    <div className="wel-card">
                        <h3>{gyn.wtexta}</h3>
                        <p>{gyn.wtextb}</p>
                    </div>
                    <div className="wel-card">
                        <h3>{gyn.wtextc}</h3>
                        <p>{gyn.wtextd}</p>
                    </div>
                    <div className="wel-card">
                        <h3>{gyn.wtexte}</h3>
                        <p>{gyn.wtextf}</p>
                    </div>
                </div>
                <div className="doc-sec">
                    <img src={gyn.dimg} alt="doc" className="imgdoc" />
                    <div className="doc-detail">
                        <h2>{gyn.dtexta}</h2>
                        <p style={{fontSize: '19px'}}>{gyn.dtextb}</p>
                        <p>{gyn.dtextc}</p>
                        <p>{gyn.dtextd}</p>
                        <p>{gyn.dtexte}</p>
                        <p>{gyn.dtextf}</p>
                        <p style={{fontSize: '15px'}}>{gyn.dtextg}</p>
                    </div>
                </div>
                <div className="patient">Patient Reviews</div>
                <div className="rev-sec">
                    <div className="rev-card">{gyn.ptexta}</div>
                    <div className="rev-card">{gyn.ptextb}</div>
                </div>
                 <div className="news">Latest News Update</div>
                <div className="news-sec">
                    <div className="news-card">{gyn.ntexta}</div>
                    <div className="news-card">{gyn.ntextb}</div>
                    <div className="news-card">{gyn.ntextc}</div>
                </div>
                 <Link to="/" className="anchor">Back to Home Page</Link>
    </div>
    ))}
    </>
);
};

export default Gynecology;
