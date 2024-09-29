import { Play } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto my-6">
      <h1 className="text-3xl tracking-tighter">ZOKA</h1>
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
      <div className="flex items-center text-secondary font-semibold border-2 border-secondary justify-center rounded-full py-1 px-4">
        <h1 className="text-lg">Youtube</h1> <Play  fill="#3F41A6" size={20} />
      </div>
    </div>
  );
};
export default Navbar;
