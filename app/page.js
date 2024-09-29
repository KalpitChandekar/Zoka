import Hero from "@/components/Hero"
import KnowUs from "@/components/KnowUs"
import Navbar from "@/components/Navbar"
import WhyChooseUs from "@/components/WhyChooseUs"

const page = () => {
  return (
   <div>
    <Navbar />
    <Hero />
    <KnowUs />
    <WhyChooseUs />
   </div>
  )
}
export default page