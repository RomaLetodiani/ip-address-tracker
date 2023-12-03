import { useEffect, useState } from 'react';
import Header from './components/header';
import MapDiv from './components/map';
import { useApiData } from './hooks/useApiData';
import { ApiData } from './components/shared/types';

const App = () => {
  const apiKey = import.meta.env.VITE_G_API_KEY;
  const [search, setSearch] = useState<string>('');

  const { apiData } = useApiData<ApiData>(apiKey, search);
  let values: string[] = [];
  let ordinats: number[] = [];

  useEffect(() => {
    // Fetch the user's IP address
    fetch('https://api64.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setSearch(data.ip); // Set the user's IP address as the search value
      })
      .catch((error) => {
        console.error('Error fetching user IP:', error);
      });
  }, []); // Run only once on mount

  if (apiData) {
    const {
      ip,
      city,
      country_code2,
      zipcode,
      time_zone,
      isp,
      latitude,
      longitude,
    } = apiData;

    values = [
      ip,
      `${city}, ${country_code2} ${zipcode}`,
      `UTC ${time_zone.offset}`,
      isp,
    ];

    ordinats = [latitude, longitude];
  }
  return (
    <div className="w-full min-h-screen min-w-[280px] flex flex-col">
      <Header values={values} setSearch={setSearch} />
      <MapDiv
        lng={ordinats[1]}
        lat={ordinats[0]}
        mapApiKey={import.meta.env.VITE_M_API_KEY}
      />
    </div>
  );
};

export default App;
