import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex my-20 max-w-6xl mx-auto">
      <div className="">
        <h1 className="text-7xl font-bold">Where creative process happens</h1>
        <p className="my-8">
          Your creativity, our inspiration <br /> Whatever your story, set if
          free.
        </p>
        <Button />
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          src="/hero.png"
          width={670}
          height={680}
          alt="hero"
          className="w-[28rem]"
        />
      </div>
    </div>
  );
};
export default Hero;
