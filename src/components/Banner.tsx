import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Input = {
  ipAddress: string;
};

const Banner = () => {
  const [input, setInput] = useState<String>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    setInput(data.ipAddress);
    console.log(data);
  };
  console.log(input);
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
        <form
          className="w-full relative overflow-hidden rounded-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            className="w-[100%] py-4 px-4"
            {...register("ipAddress", { required: true })}
          />
          <button
            type="submit"
            className="absolute right-0 bg-black top-0 h-[100%] text-center px-5"
          >
            <img src="/icon-arrow.svg" />
          </button>
        </form>
        {errors.ipAddress && (
          <small className="text-red-600">Field can not be empty</small>
        )}
      </div>
    </div>
  );
};

export default Banner;
