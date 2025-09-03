import React, { useState } from "react";
import "./assets/css/feedbackform.css";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      description: ""
    });
  };

  return (
    <div className="Feedback">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label className="name">Name:</label>
          <input className="nm" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div >
          <label className="phone">Phone Number:</label>
          <input className="ph" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div >
          <label className="mail">Email:</label>
          <input className="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="desrip">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <button className="feed-btn" type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
