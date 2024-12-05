import PropTypes from "prop-types"
import "../styles/Hero.css"


const Hero = ({ imgSrc, title, subtitle }) => { 
    return (
        <div className="hero">
            <img src={imgSrc} alt={title || 'Hero image'} className="hero-image" />
            <div className="hero-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

Hero.propTypes = {
    imgSrc: PropTypes.string.isRequired, // imgSrc is required and should be a string
    title: PropTypes.string,             // title is optional but must be a string
    subtitle: PropTypes.string,          // subtitle is optional but must be a string
};

Hero.defaultProps = {
    title: '',      // Default value for title if not provided
    subtitle: '',   // Default value for subtitle if not provided
};

export default Hero;


// import "../styles/AllExercisesHero.css"; // Import the CSS file for styling

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-overlay">
//         <h2 className="hero-title">All Exercises</h2>
//       </div>
//     </div>
//   );
// };

// export default Hero;
