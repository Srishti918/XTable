import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date !== b.date) {
        return new Date(b.date) - new Date(a.date); // Sort by latest date first
      }
      return b.views - a.views; // If dates are same, sort by views (highest first)
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views !== b.views) {
        return b.views - a.views; // Sort by highest views first
      }
      return new Date(b.date) - new Date(a.date); // If views are same, sort by latest date first
    });
    setData(sortedData);
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews} style={{ marginLeft: "10px" }}>
        Sort by Views
      </button>
      <table border="0"  style={{ marginTop: "20px", width: "40%" , textAlign: "center",marginLeft:"auto",marginRight:"auto"}}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody >
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
