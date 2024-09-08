import React, { useState, useEffect } from 'react';

const Table = ({ userEmail }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //const sheetId = 'YOUR_GOOGLE_SHEET_ID';
      //const apiKey = 'YOUR_API_KEY';
      const url = `https://script.google.com/macros/s/AKfycbwEfzIiauUnR0G1eDyxihlccOP52NqSoycUKk6dvAkFKDXNaFRMOUy5H-LjtRO8qx3lfw/exec?email=${userEmail}`;
      
      try {
        const response = await fetch(url);
        const result = await response.json();
        //const filteredData = result.values.filter(row => row.includes(userEmail));
        setData(result);
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchData();
  }, [userEmail]);

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Label</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
