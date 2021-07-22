// @flow
import React, { useContext } from "react";
import "./style.scss";
import { interfaceOptionContext } from "../../../../../../contexts/interfaceOptionContext";

export const Dashboard = (props) => {
  const { setInterfaceOption } = useContext(interfaceOptionContext);

  const handleClickBtnDashboard = (e) => {
    setInterfaceOption(+e.currentTarget.getAttribute("data-id"));
  };

  return (
    <div className="dashboard">
      <div className="dashboard__title">Actions</div>
      <div className="dashboard__content">
        {dataDashboard.map((item, index) => {
          return (
            <div
              data-id={index + 2}
              className={`dashboard__content-item ${item.style}`}
              style={{ backgroundImage: `url('${item.bgUrl}')` }}
              onClick={handleClickBtnDashboard}
            >
              <div className="content-text">
                <p>
                  {item.topTitle} <br></br>
                  {item.bottomTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const dataDashboard = [
  {
    bgUrl:
      "https://mycoinblockchain.s3.sa-east-1.amazonaws.com/img/stars.3cbb3e11.svg",
    topTitle: "Send",
    bottomTitle: "Transaction",
    style: "",
  },
  {
    bgUrl:
      "https://mycoinblockchain.s3.sa-east-1.amazonaws.com/img/garlands.1b378c1b.png",
    topTitle: "Transaction",
    bottomTitle: "History",
    style: "content-item--light",
  },
];
