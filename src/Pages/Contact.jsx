import React from 'react';

function Contact() {
  return (
    <>
      <article className="contact" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9547188726992!2d77.6311182111777!3d12.974748037288153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a17cc69619%3A0x451aba0f78216e10!2sEshwara%20Layout%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560008!5e0!3m2!1sen!2sin!4v1755146566516!5m2!1sen!2sin" width="400" height="300" loading="lazy"></iframe>
            {/* <iframe src="https://www.google.com/maps/place/Eshwara+Layout,+Indiranagar,+Bengaluru,+Karnataka+560008/@12.974748,77.6311182,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae16a17cc69619:0x451aba0f78216e10!8m2!3d12.9754566!4d77.6342819!16s%2Fg%2F1hjhftgyt?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D" width="400" height="300" loading="lazy"></iframe> */}
          </figure>
        </section>
        <section className="contact-info">
          <h3 style={{marginBottom:"16px"}} className="h3 contact-title">Contact Information</h3>
          <ul className="contacts-list gap-2">
            <li style={{marginTop:"20px !important"}} className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:mavaniankit67@gmail.com" className="contact-link">
                  mavaniankit67@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+919081278991" className="contact-link">
                  +919081278991
                </a>
              </div>
            </li>
          </ul>
        </section>
        {/* <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

              <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
            </div>

            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

            <button className="form-btn" type="submit" disabled data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </section> */}
      </article>
    </>
  );
}

export default Contact;
