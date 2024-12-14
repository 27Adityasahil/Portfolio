import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="inner-about">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profile-image"
        />
        <div className="about-me">
          <p>
            My name is Aditya Raj, and I am a third-year B.Tech undergraduate at
            Bengal College of Engineering and Technology, pursuing Computer
            Science and Engineering (CSE). I have a strong interest in
            developing software solutions and solving complex problems. I'm
            constantly exploring new technologies and expanding my skill set.
            Currently, I am actively looking for projects to contribute to, with
            the goal of gaining hands-on experience and broadening my knowledge.
            I consider myself a lifelong learner, always eager to embrace new
            challenges and learn from every situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
