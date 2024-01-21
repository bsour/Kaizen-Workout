import About from "../components/About"
import FAQ from "../components/Faq"
import { Example } from "../components/MouseImageTrail"
import Navbar from "../components/Navbar"
import Pricing from "../components/Pricing"
import Reviews from "../components/Reviews"
import Faq from "../components/Faq"
import Footer from "../components/Footer"


const HomePage = ({}) => {
  return <div>
    <Navbar />
    <Example />
    <About />
    <Pricing />
    <Reviews />
    <Faq />
    <Footer />
 
  </div>
}

export default HomePage