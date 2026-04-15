function Contact() {
    return (
      <section id="contact" className="section">
        <h2>Contact Me</h2>
  
        <p>Email: yaraalhammouri33@gmail.com</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/yaraalhammouri" target="_blank" rel="noreferrer">
            github.com/yaraalhammouri
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/yaraalhammouri/" target="_blank" rel="noreferrer">
          https://www.linkedin.com/in/yaraalhammouri/
          </a>
        </p>
  
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    );
  }
  
  export default Contact;