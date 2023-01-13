import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_subtitle">
          <p>Questions? Contact us.</p>
        </div>

        <div className="footer_list">
          <ul>
            <li>FAQ</li>
            <li>Media Center</li>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Speed Test</li>

            <li>Help Center</li>
            <li>Investor Relations</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>

            <li>Account</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
          </ul>
        </div>

        <div className="netflix_nigeria">
          <p>Netflix Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
