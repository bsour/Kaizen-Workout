import CalorieCalc from "../components/CalorieCalc"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"




const NutritionPage = ({}) => {
  return <div>
    <Navbar />
    <Loader />
    <CalorieCalc />
    <Footer isBlack={true} />
  </div>
}

export default NutritionPage