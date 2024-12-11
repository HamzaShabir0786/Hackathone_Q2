import "./contact.css";
export default function Contact() {
  return (
    <>
      <div className="max-w">
        <nav className="contact-nav">
          <h3>Bandage</h3>
          <div className="ul-div">
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="contact-btns-div">
            <button className="login-btn">Login</button>
            <button className="member-btn">
              Become a member <i className="fa-solid fa-solid-contact-nav fa-arrow-right"></i>
            </button>
          </div>
        </nav>
        <div className="heading-for-contact">
            <h5>WHAT WE DO</h5>
            <h1>Innovation tailored for you</h1>
        </div>
      </div>
    </>
  );
}
