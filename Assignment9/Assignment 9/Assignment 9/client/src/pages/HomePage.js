import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import image1 from "./../Image/logo.jpg"

const HomePage = () => {
  return (
    <Layout>
      <h1 className="headers">Home Page</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src={image1} className="img-fluid" />
          </div>
          <div class="col-md-6">
            <h2>Here to help you</h2>
            <p>
              An expense management system is a software platform that helps organizations manage and control their expenses. It typically includes features such as expense reporting, approval workflows, reimbursement processing, and analytics.</p>

              <p></p>Expense management systems are designed to streamline and automate the process of managing expenses, reducing the administrative burden on employees and ensuring compliance with company policies and government regulations.
            
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default HomePage;
