// Load default home content
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("home-link").addEventListener("click", loadHome);
    document.getElementById("contact-link").addEventListener("click", loadContact);
  });
  
  function loadHome() {
    document.getElementById("main-content").innerHTML = `
      
    `;
  }
  
  function loadContact() {
    document.getElementById("main-content").innerHTML = `
      <section class="contact-section">
        <h1 class="contact-heading">Contact Us</h1>
        <div class="contact-row">
          <div class="contact-image">
            <img src="./images/contact.jpg" alt="Contact" />
          </div>
          <div class="contact-form-container">
            <form>
              <div class="input-pair">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }
  