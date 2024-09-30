import Image from "next/image";
import WhiteButton from "./WhiteButton";

const GetStarted = () => {
  return (
    <div className="max-w-5xl rounded-[3rem] bg-[#431898] md:mx-auto mt-40 mb-20 mx-2 p-20 relative -z-20">
      <div className="text-white max-w-lg mr-auto">
        <h1 className="text-5xl font fold">Get Started With Us</h1>
        <p className="my-6">
          Your ceremony & reception venues, yourvision, your dress, your colours
          and anythingelse you would like to share with us.
        </p>
        <WhiteButton />
      </div>
      <div className="absolute md:-top-10 md:-right-12 top-0 right-0 -z-10">
        <Image
          src="/get-started.png"
          alt="get-started"
          width={568}
          height={568}
          className="w-80"
        />
      </div>
    </div>
  );
};
export default GetStarted;
