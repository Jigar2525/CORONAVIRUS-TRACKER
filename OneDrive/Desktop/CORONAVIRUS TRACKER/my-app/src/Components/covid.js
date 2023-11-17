import React, { useEffect, useState } from "react";
import './covid.css';

export const Covid = () => {

    const[data,setData] = useState([])
  

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise[0])
      console.log(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
    
  }, []);

  return (
    <>
    <section >
      <div className="livenow">
        <div></div>
        <div></div>
        <div></div>
        {/* <h1>LIVE</h1> */}
      </div>
      <div className="headone">LIVE</div>
      <br/>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      <ul>
        <li className="card">
            <div className="card_main colorone">
              <div className="card_inner">
                <p className="card_name">
                <span>OUR</span>COUNTRY
                </p>
                <p className="card_total card_small">INDIA</p>
              </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main colortwo">
              <div className="card_inner">
                <p className="card_name">
                <span>TOTAL</span>RECOVERED
                </p>
                <p className="card_total card_small">{data.recovered}</p>
              </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main colorthree">
              <div className="card_inner">
                <p className="card_name">
                <span>TOTAL</span>CONFIRMED
                </p>
                <p className="card_total card_small">{data.confirmed}</p>
              </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main colorfour">
              <div className="card_inner">
                <p className="card_name">
                <span>TOTAL</span>DEATH
                </p>
                <p className="card_total card_small">{data.deaths}</p>
              </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main colorfive">
              <div className="card_inner">
                <p className="card_name">
                <span>TOTAL</span>ACTIVE
                </p>
                <p className="card_total card_small">{data.active}</p>
              </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main colorsix">
              <div className="card_inner">
                <p className="card_name">
                <span>LAST</span>UPDATE
                </p>
                <p className="card_total card_small">{data.lastupdatedtime}</p>
              </div>
            </div>
        </li>
      </ul>
      </section>
    </>
  );
};
