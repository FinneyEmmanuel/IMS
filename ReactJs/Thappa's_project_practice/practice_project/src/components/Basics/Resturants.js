import React from "react";
import "./style.css";

const Resturants = () => {
  return (
    <>
      <div className="card-conatiner">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">Momos</h2>
            <span className="card-description subtle">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before final copy is available.
            </span>
            <div className="card-read">Read</div>
          </div>
          {/* <img src={image} alt="images" className="card-media" /> */}
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
    </>
  );
};

export default Resturants;
