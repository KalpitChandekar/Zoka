import Image from "next/image";
import Button from "./Button";

const Project = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="flex mt-44 max-w-6xl mr-auto gap-20">
        <div className="">
          <Image src="/project.png" width={647} height={638} alt="project" className="w-[28rem]"/>

        </div>
        <div className="max-w-md mx-auto">
          <h1 className="text-5xl font-bold my-4">
            Experiments and personal projects.
          </h1>
          <p className="mb-10">
            Your ceremony & reception venues, your vision, your dress, your
            colours and anything else you would like to share with us. I am a
            Gold Coast and Brisbane.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default Project;
