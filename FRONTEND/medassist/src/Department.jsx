import React, { useState } from "react";
import "./assets/css/Department.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const departments = [
    {
        id: 1,
        name: "Cardiology",
        image: "https://images.unsplash.com/photo-1715111183948-ee02f78b9175?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcmRpb2xvZ3l8ZW58MHx8MHx8fDA%3D",
        title: "Your Heart Your Priority",
        description: "Expert Cardiology Care at your fingertips.",
        s1: "Board-Certified Cardiologist",
        s2: "Advanced Diagnostic and Treatment",
        s3: "24/7 Emergency Cardiac Support",
    },
    {
        id: 2,
        name: "Neurology",
        image: "https://plus.unsplash.com/premium_photo-1718290509869-d5f3f1a09e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        title: "Your Brain, Our Expertise",
        description: "Comprehensive Neurological Care for All Ages.",
        s1: "Experienced Neurologists",
        s2: "State-of-the-Art Neurodiagnostics",
        s3: "Personalized Treatment Plans",
    },
    {
        id: 3,
        name: "Orthopedics",
        image: "https://images.unsplash.com/photo-1612888073644-c9d8fa45df5b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Move Freely, Live Fully",
        description: "Expert Orthopedic Care for Active Lives.",
        s1: "Board-Certified Orthopedic Surgeons",
        s2: "Advanced Joint Replacement Techniques",
        s3: "Comprehensive Sports Medicine Services",
    },
    {
        id: 4,
        name: "Pediatrics",
        image: "https://images.unsplash.com/photo-1632053003385-245d2569568a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVkaWF0cmljc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Caring for Your Little Ones",
        description: "Compassionate Pediatric Care for Infants and Children.",
        s1: "Board-Certified Pediatricians",
        s2: "Child-Friendly Facilities",
        s3: "Comprehensive Developmental Assessments",
    },
    {
        id: 5,
        name: "Dermatology",
        image: "https://plus.unsplash.com/premium_photo-1661779386497-1f7b9ec4d8f3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Your Skin, Our Priority",
        description: "Expert Dermatological Care for All Skin Types.",
        s1: "Board-Certified Dermatologists",
        s2: "Advanced Skin Cancer Screening",
        s3: "Personalized Skincare Treatments",
        
    },
    {
        id: 6,
        name: "Gastroenterology",
        image: "https://images.unsplash.com/photo-1666085596925-c40a62661f04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdhc3Ryb2VudGVyb2xvZ3l8ZW58MHx8MHx8fDA%3D",
        title: "Your Digestive Health Matters",
        description: "Comprehensive Gastroenterological Care.",
        s1: "Board-Certified Gastroenterologists",
        s2: "Advanced Endoscopic Procedures",
        s3: "Personalized Dietary and Treatment Plans",
    },
    {
        id: 7,
        name: "Anesthesiology",
        image: "https://images.unsplash.com/photo-1651186857043-f857917c6d6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        title: "Safe and Comfortable Anesthesia Care",
        description: "Expert Anesthesiology Services for Surgical Procedures.",
        s1: "Board-Certified Anesthesiologists",
        s2: "Advanced Pain Management Techniques",
        s3: "Personalized Anesthesia Plans for Every Patient",    
    },
    {
        id: 8,
        name: "Psychiatry",
        image: "https://plus.unsplash.com/premium_photo-1722684650552-bfaf747e3c9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHN5Y2hpYXRyeXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Mental Health Matters",
        description: "Compassionate Psychiatric Care for All Ages.",
        s1: "Board-Certified Psychiatrists",
        s2: "Comprehensive Mental Health Assessments",
        s3: "Personalized Therapy and Medication Management",
    },
    {
        id: 9,
        name: "Urology",
        image: "https://images.unsplash.com/photo-1591563720884-3a44a069b56c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVyb2xvZ3l8ZW58MHx8MHx8fDA%3D",
        title: "Your Urological Health,Our Priority",
        description: "Expert Urological Care for Men and Women.",
        s1: "Board-Certified Urologists",
        s2: "Advanced Minimally Invasive Techniques",
        s3: "Comprehensive Urological Services",
    },
    {
        id: 10,
        name: "Endocrinology",
        image: "https://plus.unsplash.com/premium_photo-1661779717978-d7937fa08250?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RW5kb2NyaW5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Balancing Your Hormones, Enhancing Your Life",
        description: "Comprehensive Endocrine Care for All Ages.",
        s1: "Board-Certified Endocrinologists",
        s2: "Advanced Diabetes Management",
        s3: "Personalized Hormonal Therapy",
    },
    {
        id: 11,
        name: "Ophthalmology",
        image: "https://plus.unsplash.com/premium_photo-1661365823982-85547db4d212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3B0aGFsbW9sb2d5fGVufDB8fDB8fHww",
        title: "Your Vision, Our Mission",
        description: "Expert Ophthalmological Care for All Ages.",
        s1: "Board-Certified Ophthalmologists",
        s2: "Advanced Cataract and LASIK Surgery",
        s3: "Comprehensive Eye Exams and Treatments",
    },
    {
        id: 12,
        name: "Pulmonology",
        image: "https://plus.unsplash.com/premium_photo-1722947097108-9af829cf1ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        title: "Breathe Easy, Live Better",
        description: "Comprehensive Pulmonary Care for All Ages.",
        s1: "Board-Certified Pulmonologists",
        s2: "Advanced Respiratory Diagnostics",
        s3: "Personalized Treatment Plans for Lung Health",
    },
    {
        id: 13,
        name: "Rheumatology",
        image: "https://plus.unsplash.com/premium_photo-1718294739214-e2215ba4c163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmhldW1hdG9sb2d5fGVufDB8fDB8fHww",
        title: "Your Joint Health,Our Priority",
        description: "Expert Rheumatological Care for All Ages.",
        s1: "Board-Certified Rheumatologists",
        s2: "Advanced Arthritis Disease Management",
        s3: "Personalized Treatment Plans for Joint Health",
    },
    {
        id: 14,
        name: "Gynecology",
        image: "https://images.unsplash.com/photo-1691934338603-af553029aaa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3luZWNvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Your Health, Our Priority",
        description: "Comprehensive Gynecological Care for Women of All Ages.",
        s1: "Board-Certified Gynecologists",
        s2: "Advanced Women's Health Screenings",
        s3: "Personalized Reproductive Health Plans",
    },
    {
        id: 15,
        name: "Nephrology",
        image: "https://plus.unsplash.com/premium_photo-1722947097131-7b3a90198c40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        title: "Your Kidney Health Matters",
        description: "Comprehensive Nephrological Care for All Ages.",
        s1: "Board-Certified Nephrologists",
        s2: "Advanced Kidney Disease Management",
        s3: "Personalized Dialysis and Transplant Services",
    },
    {
        id: 16,
        name: "Hematology",
        image: "https://plus.unsplash.com/premium_photo-1671827108313-eaffae392085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVtYXRvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Your Blood Health,Our Priority",
        description: "Expert Hematological Care for All Ages.",
        s1: "Board-Certified Hematologists",
        s2: "Advanced Blood Disorder Diagnostics",
        s3: "Personalized Treatment Plans for Blood Health",
    },
    {
        id: 17,
        name: "Radiology",
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFkaW9sb2d5fGVufDB8fDB8fHww",
        title: "Your Health, Our Mission",
        description: "Comprehensive Radiological Care for All Ages.",
        s1: "Board-Certified Radiologists",
        s2: "Advanced Imaging Techniques",
        s3: "Personalized Treatment Plans for Radiological Health",
    },
    {
        id: 18,
        name: "Oncology",
        image: "https://plus.unsplash.com/premium_photo-1674086619163-54bd6379f538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25jYWxvZ3l8ZW58MHx8MHx8fDA%3D",
        title: "Fighting Cancer Together",
        description: "Comprehensive Cancer Care and Support.",
        s1: "Board-Certified Oncologists",
        s2: "Advanced Cancer Screening and Treatment",
        s3: "Supportive Care Services",
    },
    {
        id: 19,
        name: "Geriatrics",
        image: "https://plus.unsplash.com/premium_photo-1661573482597-9e5de5964c6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VyaWF0cmljc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Caring for Our Seniors",
        description: "Comprehensive Geriatric Care for Older Adults.",
        s1: "Board-Certified Geriatricians",
        s2: "Advanced Senior Health Assessments",
        s3: "Personalized Care Plans for Aging Gracefully",
    },
    {
        id: 20,
        name: "Allergy and Immunology",
        image: "https://images.unsplash.com/photo-1710878175684-552dabbd6be1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFsbGVyZ3klMjBhbmQlMjBJbW11bm9sb2d5fGVufDB8fDB8fHww",
        title: "Your Allergy Health Matters",
        description: "Comprehensive Allergy and Immunology Care.",
        s1: "Board-Certified Allergists",
        s2: "Advanced Allergy Testing and Treatment",
        s3: "Personalized Immunotherapy Plans",
    },
];


const Department = () => {
     const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const filteredDepartments = departments.filter(dept =>
        dept.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(search);
    };
    return (
        <div className="dep">
            <Navbar />
<div className="header">
                <h1>Our Medical Departments</h1>
                <p>Comprehensive healthcare services provided by our team of highly skilled specialists across various medical disciplines.</p>
           <form
  onSubmit={handleSearch}
  style={{
    display: "flex",           // Add this line
    justifyContent: "center",  // Optional: center horizontally
    alignItems: "center",      // Optional: align vertically
    margin: "20px 0"
  }}>
  <input
    type="text"
    placeholder="Search department..."
    value={search}
    onChange={e => setSearch(e.target.value)}
    style={{
      padding: "8px",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc"
    }}
  />
  <button className="search-button" type="submit">
    Search
  </button>
</form>
</div>
             
            <div className="grid-container">
                {filteredDepartments.length > 0 ? filteredDepartments.map((dept) => (
                    <div key={dept.id} className="card">
                        <div className="card-image">
                            <img src={dept.image} alt={dept.name} />
                        </div>
                        <div className="card-content">
                            {/* Make sure these classNames match your CSS */}
                            <h2 className="department-name">{dept.name}</h2>
                            
                            <h3 className="department-title">{dept.title}</h3>
                            
                            <p className="department-description">{dept.description}</p>
                            <ul className="department-features">
                                <li>{dept.s1}</li>
                                <li>{dept.s2}</li>
                                <li>{dept.s3}</li>
                            </ul>
                            <Link to={`/department/${dept.id}`} className="learn-more-btn">
                                Learn More
                            </Link>
                        </div>
                                             
                    </div>
                )) : (
                    <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#888" }}>
                        No departments found.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Department;