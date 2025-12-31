import React from 'react';
function ContactPage() {
  return (
    <div className="container">
      <div className="page-header">
        <h2>Contact Us</h2>
        <p className="page-subtitle">
          Have a question or need help? Get in touch with us.
        </p>
      </div>

      <div className="contact-layout">
        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message..." required />
          </div>

          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> info@estateagentapp.com</p>
          <p><strong>Phone:</strong> +94 77 123 4567</p>
          <p><strong>Office:</strong> London, United Kingdom</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
