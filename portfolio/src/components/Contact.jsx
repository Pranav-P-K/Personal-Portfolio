import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className='contact-content'>
        <div className='sidebar'>
          <div className='mail'><h1>Contact ME ➡️</h1></div>
          <div className='reach'>
            <h1>Reach ME ⬇️</h1>
            <div className='reach-footer'>
              <a href="https://www.linkedin.com/in/pranavpk6/"><img src="https://img.icons8.com/bubbles/500/linkedin.png" alt="linkedin" /></a>
              <a href="https://github.com/Pranav-P-K"><img src="https://img.icons8.com/bubbles/500/github.png" alt="github" /></a>
            </div>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
