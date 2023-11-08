import React, { useState } from "react";
import Dashboard from "./Dashboard";
import MonthlyEarnings from "./MonthlyEarnings";
import Cards from "./Cards";
import Buttons from "./Buttons";
import Colors from "./Colors";
import Borders from "./Borders";
import Animations from "./Animations";
import Other from "./Other";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import ForgotPassword from "./ForgotPassword";
import Page404 from "./Page404";
import BlankPage from "./BlankPage";
import ChartPage from "./ChartPage";
import Tables from "./Tables";
import IncomeForm from "./IncomeForm";

function SidePanelDevider() {
  return <hr className="sidebar-divider" />;
}

function SidePanel({ income, setElement, homePage, setHomePage }) {
  const handleSidePanelClick = (event) => {
    let navElement = document.querySelectorAll(".nav-item");
    let collapse_Item = document.querySelectorAll(".collapse-item");

    collapse_Item.forEach((element) => {
      element.classList.remove("active");
    });
    event.target.classList.add("active");
    let elementName = event.target.textContent;
    navElement.forEach((eachData) => {
      eachData.classList.remove("active");
      eachData.addEventListener("click", (e) => {
        e.target.classList.add("active");
      });
    });

    event.target.parentElement.classList.add("active");
    if (elementName == "Dashboard") {
      setElement(<Dashboard income={income} />);
    } else if (elementName == "Monthly Earnings") {
      setElement(<MonthlyEarnings income={income} />);
    } else if (elementName == "Cards") {
      setElement(<Cards />);
    } else if (elementName == "Buttons") {
      setElement(<Buttons />);
    } else if (elementName == "Colors") {
      setElement(<Colors />);
    } else if (elementName == "Borders") {
      setElement(<Borders />);
    } else if (elementName == "Animations") {
      setElement(<Animations />);
    } else if (elementName == "Other") {
      setElement(<Other />);
    } else if (elementName == "Login") {
      setHomePage(<Login homePage={homePage} setHomePage={setHomePage} />);
    } else if (elementName == "Register") {
      setHomePage(
        <CreateAccount homePage={homePage} setHomePage={setHomePage} />
      );
    } else if (elementName == "Forgot Password") {
      setHomePage(
        <ForgotPassword homePage={homePage} setHomePage={setHomePage} />
      );
    } else if (elementName == "404 Page") {
      setElement(<Page404 setElement={setElement} />);
    } else if (elementName == "Blank Page") {
      setElement(<BlankPage setElement={setElement} />);
    } else if (elementName == "Charts") {
      setElement(<ChartPage setElement={setElement} income={income} />);
    } else if (elementName == "Tables") {
      setElement(<Tables />);
    } else if (elementName == "Income Form") {
      setElement(<IncomeForm income={income} />);
    }
  };

  return (
    <div>
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <>
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href=""
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </a>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />
        </>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <button
            className="nav-link btn"
            onClick={(e) => {
              setElement(<Dashboard income={income} />);
              let navElement = document.querySelectorAll(".nav-item");
              navElement.forEach((el) => {
                el.classList.remove("active");
              });
              document.querySelector(".nav-item").classList.add("active");
              e.target.parentElement.classList.add("active");
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </button>
        </li>
        {/* <!-- Divider --> */}
        <SidePanelDevider />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>
        <li className="nav-item sidePanelNav_Main">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
            onClick={handleSidePanelClick}
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a
                className="collapse-item"
                style={{ cursor: "pointer" }}
                onClick={handleSidePanelClick}
              >
                Income Form
              </a>
              <a
                className="collapse-item"
                style={{ cursor: "pointer" }}
                onClick={handleSidePanelClick}
              >
                Monthly Earnings
              </a>
              <a
                className="collapse-item"
                style={{ cursor: "pointer" }}
                onClick={handleSidePanelClick}
              >
                Cards
              </a>
              <a
                className="collapse-item"
                style={{ cursor: "pointer" }}
                onClick={handleSidePanelClick}
              >
                Buttons
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item sidePanelNav_Main">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
            onClick={handleSidePanelClick}
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a
                className="collapse-item"
                onClick={handleSidePanelClick}
                style={{ cursor: "pointer" }}
              >
                Colors
              </a>
              <a
                className="collapse-item"
                onClick={handleSidePanelClick}
                style={{ cursor: "pointer" }}
              >
                Borders
              </a>
              <a
                className="collapse-item"
                onClick={handleSidePanelClick}
                style={{ cursor: "pointer" }}
              >
                Animations
              </a>
              <a
                className="collapse-item"
                onClick={handleSidePanelClick}
                style={{ cursor: "pointer" }}
              >
                Other
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item sidePanelNav_Main">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
            style={{ cursor: "pointer" }}
            onClick={handleSidePanelClick}
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a
                className="collapse-item"
                style={{ cursor: "pointer" }}
                onClick={handleSidePanelClick}
              >
                Login
              </a>
              <a
                className="collapse-item"
                style={{ cursor: "pointer" }}
                onClick={handleSidePanelClick}
              >
                Register
              </a>
              <a
                className="collapse-item"
                style={{ cursor: "pointer" }}
                onClick={handleSidePanelClick}
              >
                Forgot Password
              </a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a
                className="collapse-item"
                style={{ cursor: "pointer" }}
                onClick={handleSidePanelClick}
              >
                404 Page
              </a>
              <a
                className="collapse-item"
                style={{ cursor: "pointer" }}
                onClick={handleSidePanelClick}
              >
                Blank Page
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item sidePanelNav_Main">
          <a
            className="nav-link"
            style={{ cursor: "pointer" }}
            onClick={handleSidePanelClick}
          >
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item sidePanelNav_Main">
          <a
            className="nav-link"
            onClick={handleSidePanelClick}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="/undraw_rocket.svg"
            alt="..."
          />

          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
      {/*  <!-- End of Sidebar --> */}
    </div>
  );
}

export default SidePanel;
