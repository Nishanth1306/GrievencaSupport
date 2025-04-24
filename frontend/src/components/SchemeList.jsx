// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./SchemeList.css"; 

// const SchemeList = () => {
//   const [schemes, setSchemes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/schemes")
//       .then(res => {
//         setSchemes(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h3 className="loading-text">Loading schemes...</h3>;

//   return (
//     <div className="scheme-container">
//       <h2>Government Schemes</h2>
//       <ul className="scheme-list">
//         {schemes.map(scheme => (
//           <li key={scheme.id} className="scheme-card">
//             <h3>{scheme.name}</h3>
//             <p>{scheme.description}</p>
//             <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
//             <p><strong>Benefits:</strong> {scheme.benefits}</p>
//             <a href={scheme.link} target="_blank" rel="noopener noreferrer">Learn More</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SchemeList;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SchemeList.css'; 

const SchemeList = () => {
  const { categoryName } = useParams();  
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/schemes?category=${categoryName}`)
      .then((res) => setSchemes(res.data))
      .catch((err) => console.error('Error fetching schemes:', err));
  }, [categoryName]);

  return (
    <div className="scheme-list-container">
      <h2>Schemes under "{categoryName}"</h2>

      {schemes.length > 0 ? (
        <div className="schemes-grid">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="scheme-card">
              <h4>{scheme.name}</h4>
              <p>{scheme.description}</p>
              <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No schemes found under this category.</p>
      )}
    </div>
  );
};

export default SchemeList;



