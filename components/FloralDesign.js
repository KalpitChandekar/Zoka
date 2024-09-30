import Image from "next/image";
import Button from "./Button";
import { ChevronRight } from "lucide-react";

const FloralDesign = () => {
  return (
    <div className="max-w-6xl mx-auto mt-40 mb-20 relative">
      <div className="max-w-xl mr-auto">
        <h1 className="text-5xl font-bold my-4">
          Floral Design in a event planning company
        </h1>
        <p className="mb-10 max-w-sm">
          Your ceremony & reception venues, your vision, your dress, your
          colours and anything else you would like to share with us. I am a Gold
          Coast and Brisbane.
        </p>
        <Button />
      </div>
      <div className="mt-10 flex justify-between ">
        <div className="">
          <Image
            src="/planning1.png"
            width={300}
            height={400}
            alt="planning"
            className="w-60"
          />
          <h1 className="text-4xl font-bold mt-4">
            01<span className="font-normal text-sm">/18</span>
          </h1>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/planning2.png"
            width={300}
            height={400}
            alt="planning"
            className="w-60 
          "
          />
          <h1 className="text-4xl font-bold mt-4">
            01<span className="font-normal text-sm">/18</span>
          </h1>
        </div>
        <div className="absolute top-0 right-0">
          <Image
            src="/planning3.png"
            width={300}
            height={400}
            alt="planning"
            className="w-60 "
          />
          <h1 className="text-4xl font-bold mt-4">
            01<span className="font-normal text-sm">/18</span>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center absolute bottom-0 right-0 border-2 rounded-xl py-4 px-10">
        <Image
          src="/line.png"
          width={262}
          height={0}
          alt="planning"
          className="w-60 mr-10"
        />
        <h1 className="font-bold">Next </h1>
        <ChevronRight size={16} />
      </div>
    </div>
  );
};
export default FloralDesign;
