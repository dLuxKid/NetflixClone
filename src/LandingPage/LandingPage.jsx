import React, { useState } from "react";
import "./LandingPage.css";
import tv from "../assets/tv.png";
import mobile from "../assets/mobile-0819.jpg";
import kids from "../assets/kids.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const faqSection = [
  {
    header: "What is Netflix?",
    desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week! ",
  },
  {
    header: "How much does Netflix Cost?",
    desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.",
  },
  {
    header: "Where can i watch?",
    desc: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    header: "How do i cancel?",
    desc: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    header: "What can i watch on Netflix?",
    desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    header: "Is Netflix good for kids",
    desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const LandingPage = () => {
  const [icon, setIcon] = useState(null);
  const navigate = useNavigate();

  return (
    <main>
      <section className="bg">
        <div className="getStarted_section">
          <h1>
            Unlimited movies, TV <br /> shows, and more.
          </h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="getStarted_input">
            <input type="text" placeholder="Email address" />
            <button onClick={() => navigate("/signin")}>Get Started</button>
          </div>
        </div>
      </section>
      <div className="grey_div"></div>
      <section className="features_section">
        <div className="features_text">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="features_img">
          <img src={tv} alt="TV gif" />
        </div>
      </section>
      <div className="grey_div"></div>
      <section className="features_section">
        <div className="features_img">
          <img src={mobile} alt="Mobile gif" />
        </div>
        <div className="features_text">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favorites easily and always have something to watch</p>
        </div>
      </section>
      <div className="grey_div"></div>
      <section className="features_section">
        <div className="features_text">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="features_img">
          <img src="" alt="" />
        </div>
      </section>
      <div className="grey_div"></div>
      <section className="features_section">
        <div className="features_img">
          <img src={kids} alt="" />
        </div>
        <div className="features_text">
          <h1>Create profiles for kids.</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </section>
      <div className="grey_div"></div>
      <section className="faq_section">
        <h1>Frequently Asked Questions</h1>
        {faqSection.map((item, index) => (
          <div className="faq" key={index}>
            <div className="faq_header">
              <h2>{item.header}</h2>
              {icon === item ? (
                <span onClick={() => setIcon(null)}>
                  <FaAngleDown />
                </span>
              ) : (
                <span onClick={() => setIcon(item)}>
                  <FaAngleUp />
                </span>
              )}
            </div>
            {icon === item ? (
              <div className="faq_text">
                <p>{item.desc}</p>
              </div>
            ) : null}
          </div>
        ))}
      </section>
      <div className="grey_div"></div>
    </main>
  );
};

export default LandingPage;
