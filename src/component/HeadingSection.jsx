import React from "react";

const HeadingSection = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h5 className="text-uppercase small-title">{props.smalltitle}</h5>
              <h4 className="mb-3 title">{props.titles}<span className="pl-3">{props.subtitle}</span></h4>
            <p>{props.contain}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
