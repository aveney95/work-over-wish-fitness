// import { Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExerciseCard from "../components/ExerciseCard";
import Navigation from "../components/Navigation";
import HeroImage from "../components/HeroImage";
import "../styles/Home.css";


const Home = () => {
  return (

    <>
    <Header />
    <Navigation />
    <HeroImage />
    <ExerciseCard />
    <Footer />
    </>

  );
};
export default Home;







