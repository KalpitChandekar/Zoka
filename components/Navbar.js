import { Play } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto my-6">
      <a href="/" className="text-3xl font-semibold tracking-tighter">ZOKA</a>
      <div className="flex gap-8 font-semibold">
        <a href="/">Home</a>
        <a href="/" className="text-primary">
          Pages
        </a>
        <a href="/" className="text-primary">
          Photography
        </a>
        <a href="/" className="text-primary">
          Photoshoots
        </a>
      </div>
      <button className="flex items-center text-secondary font-semibold border-2 border-secondary justify-center rounded-full py-1 px-4 text-lg">
        <h1>Youtube</h1> <Play  fill="#3F41A6" size={20} />
      </button>
    </div>
  );
};
export default Navbar;
