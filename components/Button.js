import { CircleChevronRight } from "lucide-react";

const Button = () => {
  return (
    <button className="flex gap-2 items-center text-white bg-secondary justify-center rounded-full py-3 w-44 mx-auto md:mx-0">
      <h1>Get in Touch</h1>
      <CircleChevronRight fill="#3F41A6" size={20} />
    </button>
  );
};
export default Button;
