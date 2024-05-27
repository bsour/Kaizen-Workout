import About from "../components/About"
import { Example } from "../components/MouseImageTrail"
import Navbar from "../components/Navbar"
import Pricing from "../components/Pricing"
import Reviews from "../components/Reviews"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import Features from "../components/Features"


const HomePage = () => {
  return <div>
    <Navbar />
    <Example />
    <About />
    <Features />
    <Pricing />
    <Reviews />
    <Faq />
    <Footer />
 
  </div>
}

export default HomePage