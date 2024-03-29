// List/index.js
import React from 'react';
import "./style.css";

const data = [
  {
    name: "Pranjal",
    serviceName: "PM",
    date: "2011/11/28",
    profit: "$162,700",
  },
  {
    name: "paritosh",
    serviceName: "PM",
    date: "2007/10/09",
    profit: "$1,200,000",
  },
  { name: "palav", serviceName: "B2b", date: "2009/01/12", profit: "$86,000" },
  {
    name: "Moumita",
    serviceName: "HR",
    date: "2012/10/13",
    profit: "$132,000",
  },
  {
    name: "Mitesh",
    serviceName: "Graphics",
    date: "2011/06/07",
    profit: "$206,850",
  },
  {
    name: "Srinivas",
    serviceName: "Frontend",
    date: "2012/12/02",
    profit: "$372,000",
  },
  {
    name: "hritik",
    serviceName: "Graphics",
    date: "2011/05/03",
    profit: "$163,500",
  },
  { name: "abc", serviceName: "HR", date: "2011/12/12", profit: "$106,450" },
  { name: "xyz", serviceName: "B2b", date: "2011/12/06", profit: "$145,600" },
  { name: "bcd", serviceName: "B2b", date: "2012/03/29", profit: "$433,060" },
];

const List = () => (

  <>
    <div className="dashboard-container">

    <div className="entries-search-container">
      <div className="show-entries-count-container">
        <p className="show-text">Show</p>
        <div className="entries-count-container">
          <p className="entries-count">10</p>
        </div>
        <p className="show entries">Entries</p>
      </div>
      <div className="search-entries-container">
        <p className="show-text">Search</p>
        <input type="search" className="search-input" />
      </div>
    </div>

    <table className="data-table">
      <thead>
        <tr className="table-head">
          <th className="name-head">Name</th>
          <th className="service-head">Service Name</th>
          <th className="service-date">Date</th>
          <th className="service-profit">Profit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="table-row">
            <td>{item.name}</td>
            <td>{item.serviceName}</td>
            <td>{item.date}</td>
            <td>{item.profit}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="previous-pagination-container">
      <p className="show-total-text">Showing 1 to 10 of 57 entries</p>
      <div className="buttons">
        <button className="previous-btn">Previous</button>
        <button className="pagination highlighted">1</button>
        <button className="pagination">2</button>
        <button className="pagination">3</button>
        <button className="pagination">4</button>
        <button className="pagination">5</button>
        <button className="pagination">6</button>
        <button className="pagination">Next</button>
      </div>
    </div>
    </div>
  </>
);

export default List;
