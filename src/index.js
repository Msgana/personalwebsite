import "./ContentCard.css";
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div>
      <div className="ui-container">
        <img src={faker.image.avatar()} alt="a person"></img>
        <h1>
          {faker.name.findName()} {faker.name.lastName()}
        </h1>
        <h5>{faker.name.jobTitle()}</h5>

        <div className="ui-container-button">
          <button className="ui-aboutMe-button">About.me</button>
          <button className="ui-resume-button">Resume</button>
        </div>

        <div className="ui-container-logo">
          <div className="ui-container-github">
            <img
              src="githubplus.png"
              alt="Github"
              height="50%"
              width="50%"
            ></img>
          </div>
          <div className="ui-container-linkedin">
            <img
              src="linkedin.svg"
              alt="linkedin"
              height="50%"
              width="50%"
            ></img>
          </div>
        </div>
      </div>
      <div className="ui-container-footer">
        <span className="ui-container-footer-paragraph">
          <p>{faker.address.city()}</p>
          <p>
            {faker.address.state()} {faker.address.countryCode()}{" "}
            {faker.address.zipCode()}
          </p>
        </span>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
