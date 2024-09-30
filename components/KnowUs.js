import Image from "next/image";
import Button from "./Button";

const KnowUs = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse   mt-44 mb-20 max-w-6xl mx-auto gap-20 md:px-0 px-2">
      <div className="md:mb-0">
        <Image
          src="/knowus.png"
          width={660}
          height={680}
          alt="knowus"
          className="w-[28rem]"
        />
      </div>
      <div className="md:max-w-sm mx-auto">
        <h2 className="text-secondary font-semibold">GET TO KNOW US</h2>
        <h1 className="text-5xl font-bold my-4">Why we make it happens</h1>
        <p className="mb-10">
          Your ceremony & reception venues, your vision, your dress, your colors
          and anything else you would like.
        </p>
        <Button />
      </div>
    </div>
  );
};
export default KnowUs;
