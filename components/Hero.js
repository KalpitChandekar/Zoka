import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="md:flex my-20 max-w-6xl mx-auto md:px-0 px-2">
      <div className="text-center md:text-start">
        <h1 className="text-7xl font-bold">Where creative process happens</h1>
        <p className="my-8">
          Your creativity, our inspiration <br /> Whatever your story, set if
          free.
        </p>
        <Button />
      </div>
      <div className="md:w-1/2 md:flex justify-end md:mt-0 mt-10">
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
