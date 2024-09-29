import { Camera, Images, LocateFixed } from "lucide-react";

const features = [
  {
    icon: Images,
    title: "Professional editing",
    description: "Your creativity our inspiration. Whatever you want.",
  },
  {
    icon: LocateFixed,
    title: "Long hour shoots",
    description: "Your creativity our inspiration. Whatever you want.",
  },
  {
    icon: Camera,
    title: "Extensive equipment",
    description: "Your creativity our inspiration. Whatever you want.",
  },
];

const Feature = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="mb-4 text-secondary rounded-full border-2 border-secondary p-4">
      <Icon size={28} />
    </div>
    <h1 className="font-semibold mb-2">{title}</h1>
    <p className="w-56 text-sm">{description}</p>
  </div>
);

const WhyChooseUs = () => (
  <div className="max-w-6xl mx-auto text-center my-40">
    <h1 className="text-4xl mb-16 font-semibold">Why Choose Us</h1>
    <div className="grid grid-cols-3 gap-8">
      {features.map(({ icon, title, description }) => (
        <Feature
          key={title}
          Icon={icon}
          title={title}
          description={description}
        />
      ))}
    </div>
  </div>
);

export default WhyChooseUs;
