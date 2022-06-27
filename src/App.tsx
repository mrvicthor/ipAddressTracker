import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import DetailsPage from "./components/DetailsPage";
import Map from "./components/Map";

const api: any = process.env.REACT_APP_API;

const App = () => {
  const [ipAddress, setIpAdress] = useState<Number>();
  const [lat, setLat] = useState<Number>();
  const [long, setLong] = useState<Number>();
  const [location, setLocation] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [isp, setIsp] = useState<string>("");
  const [defaultIP, setDefaultIP] = useState<Number>();

  useEffect(() => {
    const fetchIp = async () => {
      const response = await fetch(
        ` https://geo.ipify.org/api/v2/country,city?apiKey=at_rfbhvOXSDFDoF6nWVuiBKNaUbtvGo&ipAddress=${
          !ipAddress ? "" : ipAddress
        }
          `
      );
      const data = await response.json();
      console.log(data);
      const { ip, location, isp } = data;
      setDefaultIP(ip);
      setLocation(location.city);
      setCountry(location.country);
      setLat(location.lat);
      setLong(location.lng);
      setIsp(isp);
      setTimezone(location.timezone);
      console.log(location);
    };

    fetchIp();
  }, [ipAddress]);

  console.log(lat);
  console.log(long);

  return (
    <div className="h-screen max-h-[100vh]">
      <Banner setIpAdd={setIpAdress} />
      <Map lat={lat as number} long={long as number} city={location} />
      <DetailsPage
        country={country}
        city={location}
        tzone={timezone}
        isp={isp}
        ipAdd={!ipAddress ? (defaultIP as number) : (ipAddress as number)}
      />
    </div>
  );
};

export default App;
