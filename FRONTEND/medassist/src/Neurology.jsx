import React from "react";
import "./assets/css/Neurology.css";
import { Link } from "react-router-dom";
const neuro=[{
id:201,
himg: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
htext: "NEUROLOGY",
hhead: "Experts in Brain Health",
hsubhead: "Your brain health is our top priority with comprehensive, affordable medical care.",
shead: "Neurology Services",
stexta:"Diagnostic Neurology",
stextb:"Vascular Neurology",
stextc:"Invasive Procedures",
stextd:"Neurodegenerative Disorders",
stexte:"Headache Clinic Services",
stextf:"Electrodiagnostic Studies",
wtext:"Welcome to Our Neurology Center",
wtexta:"Our Mission",
wtextb:"Dedicated to improving brain health and patient well-being with highly experienced neurologists.",
wtextc:"Our Vision",
wtextd:"To provide innovative and effective neurological care to ensure all patients achieve the best possible outcomes.",
wtexte:"24 Hours Support",
wtextf:"We offer a consultative service to patients who need guidance in choosing their specialty appointment based on their needs.",
dimg:"https://d35oenyzp35321.cloudfront.net/vinnysood_1_0d5d927b7d.jpg",
dtexta:"Dr. Vinny Sood",
dtextb:"Associate Director-Neurosciences, Neurology",
dtextc:"MBBS,MD,DM(Neurology)",
dtextd:"Experience: 18+ Years",
dtexte:"Location: Gurgaon",
dtextf:"Hospital: Max Hospital",
dtextg:"She has speciality interest in Epilepsy,Stoke,Neuropathies,Headaches,Neurodegenerative disorders,Parkinson’s disease,Electrophysiology,Neuromuscular disorders (Myasthenia gravis),Movement disorders",
ptexta:"The treatment options provided were incredibly effective. I appreciate the attention to detail and care I received.",
ptextb:"Thank you for your compassion and expertise during my visits. I felt prioritized and cared for.",
ntexta:"Understanding Migraines: Causes and Treatments",
ntextb:"Advancements in Neurological Disorder Management",
ntextc:"The Importance of Early Diagnosis in Neurological Conditions",
simga:"https://images.unsplash.com/photo-1709651669999-57741c9bf085?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGlhZ25vc3RpYyUyME5ldXJvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
simgb:"https://images.unsplash.com/photo-1681661278717-d751fbd62862?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmFzY3VsYXIlMjBOZXVyb2xvZ3l8ZW58MHx8MHx8fDA%3D",
simgc:"https://plus.unsplash.com/premium_photo-1661769293963-ca86714d4d5c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
simgd:"https://plus.unsplash.com/premium_photo-1681487552878-7324588399bb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV1cm9kZWdlbmVyYXRpdmUlMjBEaXNvcmRlcnN8ZW58MHx8MHx8fDA%3D",
simge:"https://plus.unsplash.com/premium_photo-1671656349204-950bf60fdadb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVhZGFjaGUlMjBDbGluaWMlMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
simgf:"https://images.unsplash.com/photo-1535612731405-1348d22b842f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3Ryb2RpYWdub3N0aWMlMjBTdHVkaWVzfGVufDB8fDB8fHww",
},
];
const Neurology = () => {
  return(
    <>
    {neuro.map((nerve) => (
    <div className="medica" key={nerve.id}>
        
        <div className="header-medic">
            <img src={nerve.himg} alt="headerimage" className="header-image" />
            <div className="gradient"></div>
  <div className="header-text">{nerve.htext}</div>
</div>

<div className="hero-medic">
    <div className="hero-medic-text">
        <h2>{nerve.hhead}</h2>
        <p>{nerve.hsubhead}</p>
    </div>
   
        <img src="https://media.istockphoto.com/id/1305638866/photo/smiling-indian-young-female-doctor-standing-isolated-over-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=8O2uq-8z8HBZezVpWbLUGxVyN42xHrZ2r_HxtRYn27Q=" alt="heromedicimg" className="hero-image-medic" />
        
        </div>

<h2 className="medic-service-text">{nerve.shead}</h2>
        <div className="medic-service1">
               
             <div className="medicservcards">
                       <img src={nerve.simga} alt="hi" className="medicservimg" />
                        <h3>{nerve.stexta}</h3>
                    </div>
                    <div className="medicservcards">
                        <img src={nerve.simgb} alt="hi" className="medicservimg" />
                        <h3>{nerve.stextb}</h3>
                    </div>
                    <div className="medicservcards">
                        <img src={nerve.simgc} alt="hi" className="medicservimg" />
                        <h3>{nerve.stextc}</h3>
                    </div>
                    </div>
                <div className="medic-service2">
                    <div className="medicservcards">
                        <img src={nerve.simgd} alt="hi" className="medicservimg" />
                        <h3>{nerve.stextd}</h3>
                    </div>
                    <div className="medicservcards">
                       <img src={nerve.simge} alt="hi" className="medicservimg" />
                        <h3>{nerve.stexte}</h3>
                    </div>
                    <div className="medicservcards">
                        <img src={nerve.simgf} alt="hi" className="medicservimg" />
                        <h3>{nerve.stextf}</h3>
                    </div>
                </div>
                <div className="wel-text">{nerve.wtext}</div>
                <div className="wel-sec">
                    <div className="wel-card">
                        <h3>{nerve.wtexta}</h3>
                        <p>{nerve.wtextb}</p>
                    </div>
                    <div className="wel-card">
                        <h3>{nerve.wtextc}</h3>
                        <p>{nerve.wtextd}</p>
                    </div>
                    <div className="wel-card">
                        <h3>{nerve.wtexte}</h3>
                        <p>{nerve.wtextf}</p>
                    </div>
                </div>
                <div className="doc-sec">
                    <img src={nerve.dimg} alt="doc" className="imgdoc" />
                    <div className="doc-detail">
                        <h2>{nerve.dtexta}</h2>
                        <p style={{fontSize: '19px'}}>{nerve.dtextb}</p>
                        <p>{nerve.dtextc}</p>
                        <p>{nerve.dtextd}</p>
                        <p>{nerve.dtexte}</p>
                        <p>{nerve.dtextf}</p>
                        <p style={{fontSize: '15px'}}>{nerve.dtextg}</p>
                    </div>
                </div>
                <div className="patient">Patient Reviews</div>
                <div className="rev-sec">
                    <div className="rev-card">{nerve.ptexta}</div>
                    <div className="rev-card">{nerve.ptextb}</div>
                </div>
                 <div className="news">Latest News Update</div>
                <div className="news-sec">
                    <div className="news-card">{nerve.ntexta}</div>
                    <div className="news-card">{nerve.ntextb}</div>
                    <div className="news-card">{nerve.ntextc}</div>
                </div>
                 <Link to="/" className="anchor">Back to Home Page</Link>
    </div>
    ))}
    </>
);
};

export default Neurology;
