import React from "react";
import "./InstaPost.css";

const InstaPost = () => {
  return (
    <div className="Insta-container">
      <div className="outer-box">
        <div className="head-section">
          <img src="https://cdn-icons-png.flaticon.com/512/4413/4413622.png" id="skill-icon" alt="skill-icon" />
          <div className="head-info">
            <p className="username">Skills</p><span className="skill-userName">@aditya-skills</span>
          </div>
        </div>
        <div className="skills-details">
          <div className="skill-desc Programming Languages">
            <h4>Programming Languages</h4>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png"
              alt="c-language"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              alt="c++-language"
            />
            <img
              src="https://www.csestack.org/wp-content/uploads/2023/08/java-logo.webp"
              alt="java language"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="javascript language"
            />
          </div>
          <hr />
          <div className="skill-desc frontend tools">
            <h4>Frontend Tools</h4>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              alt="HTML"
            />
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png"
              alt="css"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="React"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
              alt="bootstrap"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Github"
            />
          </div>
          <hr />
          <div className="skill-desc backend tools">
            <h4>Backend Tools</h4>
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
              alt="Node"
            />
            <img
              src="https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp"
              alt="express"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp"
              alt="Mongo-DB"
            />
          </div>
          <hr />
          <div className="skill-desc IDEs">
            <h4>Familiar IDEs</h4>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
              alt="VS-code"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png"
              alt="express"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaPost;
