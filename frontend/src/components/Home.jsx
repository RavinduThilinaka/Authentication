import React, { useEffect, useState } from 'react';
import AxiosInstance from './AxiosInstance';
import { Box } from '@mui/material';

function Home() {

  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetData = () => {
    AxiosInstance.get(`users/`)
      .then((res) => {
        setMyData(res.data);
        setLoading(false);       // <-- FIXED
      })
      .catch((err) => {
        console.log("Error loading data", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading data....</p>
      ) : (
        <div>
          {myData.map((item, index) => (
            <Box key={item.id || index} sx={{ p: 2, m: 2, boxShadow: 3 }}>
              <div>ID: {item.id}</div>
              <div>Email: {item.email}</div>
            </Box>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
