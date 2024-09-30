import Hero from "@/components/Hero"
import KnowUs from "@/components/KnowUs"
import Navbar from "@/components/Navbar"
import Project from "@/components/Projects"
import WhyChooseUs from "@/components/WhyChooseUs"

const page = () => {
  return (
   <div>
    <Navbar />
    <Hero />
    <KnowUs />
    <WhyChooseUs />
    <Project />
   </div>
  )
}
export default page