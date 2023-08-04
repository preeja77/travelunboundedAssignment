import './index.css'

const Contact = () => (
  <div className="contact-container">
    <div className="add-container">
      <h1 className="name">Travel Unbounded World Private Limited</h1>
      <div className="email-container">
        <p className="email-heading">Email us at: </p>
        <p className="title">
          ck@travelunbounded.com (or) sk@travelunbounded.com
        </p>
      </div>
      <div className="contact-and-title-container">
        <div className="phone-and-title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
            alt="contact"
            className="contact-img"
          />
          <p className="contact-title">Ph No: </p>
        </div>
        <p className="title">+91 9845090014 /</p>
        <p className="title"> +91 9739255255</p>
      </div>
      <div className="address-container">
        <p className="address"> Address:</p>
        <p className="title">
          No 10, 8th Main, 12th Cross, Vinayaka Nagar B block, Konena Agrahara,
          Bangalore 560017, Karnataka, India Vinayakanagar , Bangalore ,
          Karnataka - 560017
        </p>
      </div>
    </div>
  </div>
)

export default Contact
