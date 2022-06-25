interface Props {
  country: string;
  ipAdd: number;
  isp: string;
  tzone: string;
  city: string;
}
const DetailsPage: React.FC<Props> = ({ country, ipAdd, isp, tzone, city }) => {
  return (
    <div className="flex flex-col space-y-8 py-8 text-[] items-center absolute top-[24%] left-[50%] -translate-x-[50%] bg-white w-[90%] mx-auto rounded-lg z-[1000] md:flex-row md:space-y-0 md:justify-between md:px-10">
      <div>
        <h3>IP ADDRESS</h3>
        <p>{ipAdd}</p>
      </div>
      <div>
        <h3>LOCATION</h3>
        <p>
          {city}, {country}
        </p>
      </div>
      <div>
        <h3>TIMEZONE</h3>
        <p>{tzone}</p>
      </div>
      <div>
        <h3>ISP</h3>
        <p>{isp}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
