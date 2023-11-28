import { apiCall } from '@/components/apiCall';
import { useEffect, useState } from 'react';

// not a great way to do this but it works

export const useApiData = <T>(apiKey: string, search: string) => {
  const [apiData, setApiData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (apiKey && search) {
          const response = await apiCall(
            `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${search}`
          );
          if (response.code !== 422) {
            setApiData(response);
          } else {
            alert('Please enter valid IP address');
          }
        }
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, [apiKey, search]);

  return {
    apiData,
  };
};
