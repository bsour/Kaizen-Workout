import { Form } from "react-router-dom"
import Navbar from "../components/Navbar"
import WorkoutForm from "../components/WorkoutForm"
import Footer from "../components/Footer"




const WorkoutPage = ({}) => {
  return <div>
    <Navbar />
    <WorkoutForm />
    <Footer isBlack={true} />
  </div>
}

export default WorkoutPage