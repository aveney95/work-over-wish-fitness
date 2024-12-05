
import { Link } from 'react-router-dom';
import '../styles/ExerciseCard.css';

const ExerciseCard = () => {
    return (
        <div className="exercise-card">
            <Link to="/all-exercises" className="exercise-link">
                All Exercises
            </Link>
            <Link to="/body-part-selection" className="exercise-link">
                Body Part Selection
            </Link>
            <Link to="/equipment-selection" className="exercise-link">
                Equipment Selection
            </Link>
            <Link to="/muscle-selection" className="exercise-link">
                Muscle Selection
            </Link>
        </div>
    );
};

export default ExerciseCard;
