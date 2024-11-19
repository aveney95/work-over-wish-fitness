import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Work Over Wish Fitness</h1>
      </header>
      <main className="home-content">
        <h2>Welcome, choose your workout:</h2>
        <div className="options">
          <Link to="/body-part" className="option">
            <div className="icon-placeholder">:mechanical_arm:</div>
            Exercise by Body Part
          </Link>
          <Link to="/target-muscles" className="option">
            <div className="icon-placeholder">:muscle:</div>
            Target Muscles
          </Link>
          <Link to="/equipment" className="option">
            <div className="icon-placeholder">:hammer_and_wrench:</div>
            Exercise by Equipment
          </Link>
          <Link to="/all-exercises" className="option">
            <div className="icon-placeholder">:man-lifting-weights:</div>
            All Exercises
          </Link>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 Work Over Wish Fitness</p>
      </footer>
    </div>
  );
};
export default Home;







