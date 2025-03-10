import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SchemeList.css"; 

const SchemeList = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/schemes")
      .then(res => {
        setSchemes(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3 className="loading-text">Loading schemes...</h3>;

  return (
    <div className="scheme-container">
      <h2>Government Schemes</h2>
      <ul className="scheme-list">
        {schemes.map(scheme => (
          <li key={scheme.id} className="scheme-card">
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
            <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
            <p><strong>Benefits:</strong> {scheme.benefits}</p>
            <a href={scheme.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchemeList;
