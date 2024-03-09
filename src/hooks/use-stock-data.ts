import axios from 'axios';
import { useEffect, useState } from 'react';

const useDataFetch = () => {
  const [stockData, setStockData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const stockPrice = parseFloat(stockData?.['Global Quote']['05. price'] ?? '0');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo'
      );
      setStockData(response.data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { stockPrice, isLoading, setStockData };
};

export default useDataFetch;
