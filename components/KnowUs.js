import Image from "next/image";
import Button from "./Button";

const KnowUs = () => {
  return (
    <div className="flex mt-44 mb-20 max-w-6xl mx-auto gap-20">
      <div className="">
        <Image
          src="/knowus.png"
          width={660}
          height={680}
          alt="knowus"
          className="w-[28rem]"
        />
      </div>
      <div className="">
        <h2 className="text-secondary font-semibold">GET TO KNOW US</h2>
        <h1 className="text-5xl font-bold my-4">Why we make it happens</h1>
        <p className="mb-10">
          Your ceremony & reception venues, your vision, your <br /> dress, your
          colors and anything else you would like.
        </p>
        <Button />
      </div>
    </div>
  );
};
export default KnowUs;
