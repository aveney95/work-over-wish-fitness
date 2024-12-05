import PropTypes from 'prop-types'; 
import '../styles/BodyPartExerciseItem.css'; 

const BodyPartExerciseItem = ({ exercise }) => {
  return (
    <div className="bodypart-exercise-item">
      <img src={exercise.gifUrl} alt={exercise.name} className="exercise-image" />
      <div className="exercise-details">
        <h3 className="exercise-name">{exercise.name}</h3>
        <p className="exercise-target"><strong>Target Muscle:</strong> {exercise.target}</p>
        <p className="exercise-equipment"><strong>Equipment:</strong> {exercise.equipment}</p>
      </div>
    </div>
  );
};


BodyPartExerciseItem.propTypes = {
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
  }).isRequired,
};

export default BodyPartExerciseItem;
