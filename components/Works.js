import Image from "next/image";

const work = [
  {
    src: "/work1.png",
  },
  {
    src: "/work2.png",
  },
  {
    src: "/work3.png",
  },
  {
    src: "/work4.png",
  },
  {
    src: "/work5.png",
  },
  {
    src: "/work6.png",
  },
  {
    src: "/work7.png",
  },
  {
    src: "/work8.png",
  },
  {
    src: "/work9.png",
  },
];
const Work = ({ src }) => {
  return <Image src={src} width={380} height={402} alt="work" className="" />;
};
const Works = () => {
  return (
    <div className="max-w-6xl mx-auto my-40">
      <h1 className="text-5xl font-bold mb-4">Our Awesome Works</h1>
      <p className="mb-10">See what we shooted</p>
      <div className="grid grid-cols-3">
        {work.map(({ src }) => (
          <Work key={src} src={src} />
        ))}
      </div>
    </div>
  );
};
export default Works;
