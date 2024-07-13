import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div>Mail ME ➡️</div>
      <div>Reach ME ⬇️
        <li></li>
        <li></li>
        <li></li>
      </div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
