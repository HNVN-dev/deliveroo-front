import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

/* import pictures */

import logo from "./assets/img/deliveroo-logo.png";

/* import components */

import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setstate] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://my-deli-back.herokuapp.com/");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Header
        logo={logo}
        restaurantname={data.restaurant.name}
        restaurantdescription={data.restaurant.description}
        restaurantpicture={data.restaurant.picture}
      />
      <main>
        <Menu datacategories={data.categories} />
      </main>
    </>
  );
}

export default App;
