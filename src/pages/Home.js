import React from "react";
import Layout from '../component/layout/layout'
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../style/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>TastyTreasure</h1>
          <p>Discover a treasure of flavors</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;