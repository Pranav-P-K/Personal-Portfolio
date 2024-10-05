import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', rating: 0 });

  useEffect(() => {
    emailjs.init('1FheU-bODqCS2nFID');
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (rating) => {
    setForm({ ...form, rating });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const params = {
      name: form.name,
      email: form.email,
      message: [form.message, form.rating]
    };

    const serviceId = "service_129hdl9";
    const templateId = "template_b9sl0ne";
    emailjs.send(serviceId, templateId, params).then(() => {
      alert("Thanks for submitting a response");
      setForm({ name: '', email: '', message: '', rating: 0 });
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="sidebar">
          <div className="mail"><h1>Contact ME ➡️</h1></div>
          <div className="reach">
            <h1>Reach ME ⬇️</h1>
            <div className="reach-footer">
              <a href="https://www.linkedin.com/in/pranavpk6/"><img src="https://img.icons8.com/bubbles/500/linkedin.png" alt="linkedin" /></a>
              <a href="https://github.com/Pranav-P-K"><img src="https://img.icons8.com/bubbles/500/github.png" alt="github" /></a>
            </div>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <div className='submit-container'>
            <div className="rating-box">
              <div className="rating-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= form.rating ? 'filled' : ''}`}
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <button type="submit" className="submit-button">
              Send
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
