import { useEffect } from "react";
import Banner from "./components/Banner";
import DetailsPage from "./components/DetailsPage";
import Map from "./components/Map";

const api: any = process.env.REACT_APP_API;
const App = () => {
  useEffect(() => {
    const fetchIp = async () => {
      const response = await fetch(
        ` https://geo.ipify.org/api/v2/country?apiKey=${api}&ipAddress=8.8.8.8`
      );
      const data = await response.json();
      console.log(data);
    };
    fetchIp();
  });
  // https://geo.ipify.org/api/v2/country?apiKey=at_rfbhvOXSDFDoF6nWVuiBKNaUbtvGo&ipAddress=8.8.8.8
  return (
    <div className="h-screen max-h-[100vh]">
      <Banner />
      <Map />
      <DetailsPage />
    </div>
  );
};

export default App;
