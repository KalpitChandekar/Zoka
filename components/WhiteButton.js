import { CircleChevronRight } from "lucide-react";

const WhiteButton = () => {
  return (
    <button className="flex gap-2 items-center bg-white justify-center rounded-full py-3 text-secondary w-44 font-semibold">
      <h1>Get in Touch</h1>
      <CircleChevronRight size={20} />
    </button>
  );
}
export default WhiteButton