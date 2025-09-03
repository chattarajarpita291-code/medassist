import React from "react";
import "./assets/css/Doctors.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
const doctor = [
    {
      id:100,
      depname:"Cardiologist",
      docname:"Dr. John Doe",
      docimg:"https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww",
      docrate:"4.5",
      docstudy:"MD, Cardiology",
      doclocation:"Los Angeles, USA",
    },
    {
        id:101,
        depname:"Neurologist",
        docname:"Dr. Jane Smith",
        docimg:"https://plus.unsplash.com/premium_photo-1661396927602-fab2bb517246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        docrate:"4.7",
        docstudy:"MD, Neurology",
        doclocation:"New York, USA",
    },
    {
        id:102,
        depname:"Opthalmologist",
        docname:"Dr. Emily Johnson",
        docimg:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
        docrate:"4.8",
        docstudy:"MD, Opthalmology",
        doclocation:"San Francisco, USA",
    },
    {
        id:103,
        depname:"Pediatrician",
        docname:"Dr. Sarah Connor",
        docimg:"https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
        docrate:"4.9",
        docstudy:"MD, Pediatrics",
        doclocation:"Chicago, USA",
    },
];

const Doctors = () => {
  return (
    <div className="doctor-page">
      <Navbar />
       <h1 className="doctor-head-text">DOCTORS PAGE</h1>
      <div className="doctor-header">       
        <img src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="doc" className="doctor-head-img" />
      </div>
      <div className="doctor-container">
        {doctor.map((doc) => (
          <div className="doctor-card" key={doc.id}>
            <img src={doc.docimg} alt={doc.docname} className="doctor-card-img" />
            <div className="doctor-card-info">
              <h2 className="doctor-card-name">{doc.docname}</h2>
              <div className="doc-dep">
 <p className="doctor-card-department">{doc.depname}</p>
              <div className="doctor-card-rating">Rating: {doc.docrate}</div>
              </div>             
              <p className="doctor-card-study">{doc.docstudy}</p>
              <p className="doctor-card-location">{doc.doclocation}</p>
                <Link to={`/doctors/${doc.id}`}><button className="doctor-card-button">Book an Appointment</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
