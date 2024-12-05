import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import BodyPartSelection from "../src/pages/BodyPartSelection";
import MuscleSelection from "../src/pages/MuscleSelection";
import EquipmentSelection from "../src/pages/EquipmentSelection";
import AllExercises from "../src/pages/AllExercises";
const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-exercises" element={<AllExercises />} />
            <Route path="/body-part-selection" element={<BodyPartSelection />} />
            <Route path="/equipment-selection" element={<EquipmentSelection />} />
            <Route path="/muscle-selection" element={<MuscleSelection />} />
        </Routes>
    </Router>
  );
};
export default App;