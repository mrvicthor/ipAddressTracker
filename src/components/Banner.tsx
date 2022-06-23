const Banner = () => {
  return (
    <div className="h-[35vh] relative overflow-hidden">
      <img
        src="/pattern-bg.png"
        className="h-[100%] object-cover w-[100%]"
        alt="banner"
      />
      <div className="absolute mx-auto  w-[90%] top-[10%] left-[50%] space-y-6 -translate-x-[50%]">
        <h1 className="text-center text-3xl text-white font-medium">
          IP Address Tracker
        </h1>
        <form className="w-full relative overflow-hidden rounded-xl">
          <input type="text" className="w-[100%] py-4 px-4" />
          <button
            type="submit"
            className="absolute right-0 bg-black top-0 h-[100%] text-center px-5"
          >
            <img src="/icon-arrow.svg" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
