interface Props {
  country: string;
  ipAdd: number;
  isp: string;
  tzone: string;
  city: string;
}
const DetailsPage: React.FC<Props> = ({ country, ipAdd, isp, tzone, city }) => {
  return (
    <div className="flex flex-col space-y-8 py-8 text-[] items-center absolute top-[26%] left-[50%] -translate-x-[50%] bg-white w-[90%] mx-auto rounded-lg z-[1000] md:flex-row md:space-y-0 md:justify-between md:px-10 md:top-[30%]">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <h3 className="text-[#847C7C] text-sm font-medium">IP ADDRESS</h3>
        <p className="text-2xl text-[#242424] font-bold">{ipAdd}</p>
      </div>
      <div className="flex flex-col items-center gap-2 md:items-start md:border-l md:pl-6">
        <h3 className="text-[#847C7C] text-sm font-medium">LOCATION</h3>
        <p className="text-2xl text-[#242424] font-bold">
          {city}, {country}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 md:items-start md:border-l md:pl-6">
        <h3 className="text-[#847C7C] text-sm font-medium">TIMEZONE</h3>
        <p className="text-2xl text-[#242424] font-bold">{tzone}</p>
      </div>
      <div className="flex flex-col items-center gap-2 md:items-start md:border-l md:pl-6">
        <h3 className="text-[#847C7C] text-sm font-medium">ISP</h3>
        <p className="text-2xl text-[#242424] font-bold">{isp}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
