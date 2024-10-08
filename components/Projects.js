import Image from "next/image";

const Project = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20 relative">
      <div className="md:flex mt-44 md:max-w-6xl mr-auto gap-20">
        <div className="">
          <Image
            src="/project.png"
            width={647}
            height={638}
            alt="project"
            className="w-[28rem]"
          />
        </div>
        <div className="max-w-md mx-auto md:px-0 px-2">
          <h1 className="text-5xl font-bold my-4">
            Experiments and personal projects.
          </h1>
          <p className="">
            Your ceremony & reception venues, your vision, your dress, your
            colours and anything else you would like to share with us. I am a
            Gold Coast and Brisbane.
          </p>
        </div>
      </div>
      <div className="bg-[#F6F5FB] w-full md:absolute py-10 bottom-0 -z-10 mt-4 md:mt-0">
        <div className="flex justify-center md:justify-end gap-10 text-center max-w-5xl">
          <div>
            <h1 className="text-5xl font-bold">58+</h1>
            <h2 className="text-primary">Cute Customer</h2>
          </div>
          <div>
            <h1 className="text-5xl font-bold">38+</h1>
            <h2 className="text-primary">Rewards</h2>
          </div>
          <div>
            <h1 className="text-5xl font-bold">98+</h1>
            <h2 className="text-primary">Project Complete</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
