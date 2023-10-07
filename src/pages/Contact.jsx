import React, { useState } from "react";
import Herotext from "../components/Herotext";

const Contact = () => {
  const contacts = [
    {
      name: "Aleksa Papic",
      description: "Founder - CEO",
      phone: "067822754",
    },
    {
      name: "Ksenija Acimovic",
      description: "Co-Founder - CEO",
      phone: "90394902",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovde možete dodati logiku za slanje forme, na primer, pozvati API za slanje e-pošte ili dodatno rukovati formom.
    console.log("Podaci forme:", formData);
    // Resetujemo formu
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-gray-50">
      <div
        className="bg-cover bg-center h-96 flex items-center relative"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/colleagues-business-meeting_23-2148738273.jpg?w=1800&t=st=1696608241~exp=1696608841~hmac=5817e4f07a823ba81106c27a0c1ad0707ffd5dff541153b9b348fa107d7ae350')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl text-white font-semibold">Contact Us</h1>
          <p className="text-xl text-white mt-4">We're here to assist you.</p>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="text-4xl text-gray-700 font-semibold text-center pb-5">
          We're Here to Help You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto max-w-screen-lg">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {contact.name}
              </h3>
              <p className="text-lg text-gray-700">{contact.description}</p>
              <a
                href={`tel:${contact.phone}`}
                className="text-blue-500 font-semibold text-xl mt-4 inline-block hover:text-blue-700"
              >
                {contact.phone}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-screen-md mx-auto">
          <h2 className="text-4xl text-gray-700 font-semibold text-center pb-5">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
