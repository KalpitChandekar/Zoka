import FloralDesign from "@/components/FloralDesign"
import Footer from "@/components/Footer"
import GetStarted from "@/components/GetStarted"
import Hero from "@/components/Hero"
import KnowUs from "@/components/KnowUs"
import Navbar from "@/components/Navbar"
import Project from "@/components/Projects"
import WhyChooseUs from "@/components/WhyChooseUs"
import Works from "@/components/Works"

const page = () => {
  return (
   <div>
    <Navbar />
    <Hero />
    <KnowUs />
    <WhyChooseUs />
    <Project />
    <FloralDesign />
    <Works />
    <GetStarted />
    <Footer />
   </div>
  )
}
export default page