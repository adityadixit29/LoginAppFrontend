import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Context, server } from '../main';
import toast from 'react-hot-toast';

import { Navigate } from 'react-router-dom';

const Home = () => {
  const staticData = [
    { id: 1, name: { name: 'Alice', image: 'albert.jpg' }, dateCreated: '2022-01-31', role: 'Admin', status: 'Active', action: 'Action 1' },
    { id: 2, name: { name: 'Bob', image: 'nith.jpg' }, dateCreated: '2022-02-01', role: 'User', status: 'Inactive', action: 'Action 2' },
    { id: 3, name: { name: 'Charlie', image: 'taylor.jpg' }, dateCreated: '2022-02-02', role: 'Guest', status: 'Active', action: 'Action 3' },
    { id: 4, name: { name: 'David', image: 'rayul.jpg' }, dateCreated: '2022-02-03', role: 'Admin', status: 'Inactive', action: 'Action 4' },
    { id: 5, name: { name: 'Emma', image: 'female.jpg' }, dateCreated: '2022-02-04', role: 'User', status: 'Active', action: 'Action 5' },
  ];

  const [data, setData] = useState(staticData);

  const { isAuthenticated } = useContext(Context);

  if (!isAuthenticated) return <Navigate to={"/login"} />
  return (
    <div className="table">
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date Created</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {/* Display name with associated image */}
                  {item.name && (
                    <div style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
                      <label htmlFor="" style={{ marginRight: "40px" }}><img src={item.name.image} alt={item.name.name} style={{ marginRight: '5px', width: '30px',height: "30px", borderRadius: "50%"  }} /></label>
                      {item.name.name}
                    </div>
                  )}
                </td>
                <td>{item.dateCreated}</td>
                <td>{item.role}</td>
                <td>{item.status}</td>
                <td>
                  <img className='action' src="gear-solid.svg" alt="" />
                  <img className='action' src="circle-solid.svg" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home