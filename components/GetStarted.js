import Image from "next/image";
import WhiteButton from "./WhiteButton";

const GetStarted = () => {
  return (
    <div className="max-w-5xl rounded-3xl bg-secondary mx-auto my-40 py-20 px-8 relative">
      <div className="text-white max-w-lg mr-auto">
        <h1 className="text-5xl font fold">Get Started With Us</h1>
        <p className="my-6">
          Your ceremony & reception venues, yourvision, your dress, your colours
          and anythingelse you would like to share with us.
        </p>
        <WhiteButton />
      </div>
      <div className="absolute -top-14 -right-16">
        <Image
          src="/get-started.png"
          alt="get-started"
          width={568}
          height={568}
          className="w-96"
        />
      </div>
    </div>
  );
};
export default GetStarted;
