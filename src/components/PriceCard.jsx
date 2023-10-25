import React from "react";
import "../App.css";

function PriceCard(props) {
  // Destructure the cardDetails prop from the props object
  const { cardDetails } = props;

  
  return (
    <div className="mainDiv">
      <div className="priceCardBox">
        {cardDetails.map((eachCardData) => {
          return (
            <div className="priceCard" key={eachCardData.id}>
              <h5 className="planName">{eachCardData.packageName}</h5>
              <h1 className="price">{eachCardData.price}</h1>
              <hr />
              <ul>
                <li>✔ {eachCardData.user} </li>
                <li>✔ {eachCardData.storage}</li>
                <li className={eachCardData.publicProjects ? "" : "denied"}>
                  {eachCardData.publicProjects ? "✔ " : "✖ "}Unlimited Public
                  Projects
                </li>
                <li className={eachCardData.comunityAccess ? "" : "denied"}>
                  {eachCardData.comunityAccess ? "✔ " : "✖ "}Community Access
                </li>
                <li className={eachCardData.privateProjects ? "" : "denied"}>
                  {eachCardData.privateProjects ? "✔ " : "✖ "}Unlimited Private
                  Projects
                </li>
                <li className={eachCardData.support ? "" : "denied"}>
                  {eachCardData.support ? "✔ " : "✖ "} Dedicated Phone Support
                </li>
                <li className={eachCardData.subDomain ? "" : "denied"}>
                  {eachCardData.subDomain ? "✔ " : "✖ "}Free Subdomine
                </li>
                <li className={eachCardData.reports ? "" : "denied"}>
                  {eachCardData.reports ? "✔ " : "✖ "}Monthly Status Reports
                </li>
              </ul>
              <button className="btn">Button</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PriceCard;
