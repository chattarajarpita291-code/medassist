import React from "react";
import "./assets/css/Booking.css";
import { useParams, Link } from 'react-router-dom';
const book=[
   {
      id:100,
      depname:"Cardiologist",
      docname:"Dr. John Doe",
      docimg:"https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww",
    },
    {
        id:101,
        depname:"Neurologist",
        docname:"Dr. Jane Smith",
        docimg:"https://plus.unsplash.com/premium_photo-1661396927602-fab2bb517246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    },
    {
        id:102,
        depname:"Opthalmologist",
        docname:"Dr. Emily Johnson",
        docimg:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id:103,
        depname:"Pediatrician",
        docname:"Dr. Sarah Connor",
        docimg:"https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
];
const Booking =() =>{
    const { id } = useParams();
    const app = book.find(doc => doc.id === Number(id));
    
    if (!app) {
        return <h2>Department not found</h2>;
    }
    return(
        <div className="book-page">
            <div className="book-container">
                <div className="book-head">
                    <h1 id="b-h">MediAssist+</h1>
                    <h2 id="b-sh">Book your Appointment</h2>
                </div>
                <div className="book-cards">
                    <div className="b-card1">
                        <div className="book-img"><img src={app.docimg} alt="img" id="b-img" /></div>
                        <h2 id="b-hc1">{app.docname}</h2>
                        <h3 id="b-hc2">{app.depname}</h3>
                       <button id="back-button"> <Link to="/doctors" id="doc">Back to Doctors Page</Link></button>
                    </div>
                     
                    <div className="b-card2">
                        <form id="book-form">
                            <label id="book-name">NAME:</label>
                            <input type="text" placeholder="Enter your name" id="b-n" />
                            <label id="book-phone">PHONE NUMBER:</label>
                            <input type="text" placeholder="Enter your phone number" id="b-d" />
                            <label id="book-mail">EMAIL-ID:</label>
                            <input type="text" placeholder="Enter your mail-id" id="b-m" />
                            <label id="book-date">BOOKING DATE:</label>
                            <input type="date" id="b-d" />
                            <label id="book-time">BOOKING TIME:</label>
                            <input type="time" id="b-t" />
                            <button id="book-btn">Book an Appointment</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default Booking;