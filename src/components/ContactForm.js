import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-gray-100 flex flex-col md:flex-row min-h-[500px] p-6 md:p-12">
      {/* Map */}
      <div className="w-full md:w-1/2 h-[400px] md:h-auto">
        <iframe
          title="Clôture Plante Map"
          src="https://www.google.com/maps?q=Cl%C3%B4ture+Plante,+1201+Bd+Saint-Joseph,+Gatineau,+QC+J8Z+2C3,+Canada&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full min-h-[400px]"
        ></iframe>
      </div>
      {/* Form */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center p-8">
        {submitted ? (
          <div className="w-full max-w-lg mx-auto text-center text-2xl text-orange-600 font-semibold py-16">
            Thank you for contacting us!<br />We will get back to you soon.
          </div>
        ) : (
          <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-8">
              <label className="block text-black font-bold mb-2" htmlFor="name">Name : *</label>
              <input className="w-full border-0 border-b-2 border-orange-500 bg-transparent focus:outline-none py-2 mb-4" id="name" name="name" type="text" required />
            </div>
            <div className="mb-8">
              <label className="block text-black font-bold mb-2" htmlFor="email">E-mail : *</label>
              <input className="w-full border-0 border-b-2 border-orange-500 bg-transparent focus:outline-none py-2 mb-4" id="email" name="email" type="email" required />
            </div>
            <div className="mb-8">
              <label className="block text-black font-bold mb-2" htmlFor="phone">Phone : *</label>
              <input className="w-full border-0 border-b-2 border-orange-500 bg-transparent focus:outline-none py-2 mb-4" id="phone" name="phone" type="tel" required />
            </div>
            <div className="mb-8">
              <label className="block text-black font-bold mb-2" htmlFor="message">Message:</label>
              <textarea className="w-full border-0 border-b-2 border-orange-500 bg-transparent focus:outline-none py-2 mb-4 min-h-[100px]" id="message" name="message" />
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition text-lg">Send</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm; 