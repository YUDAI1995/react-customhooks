import { useState, useEffect } from 'react';

const useFetcher = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, [url]);
  return data;
};

export default useFetcher;
