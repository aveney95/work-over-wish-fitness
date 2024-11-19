import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BodyPartSelection from "../pages/BodyPartSelection";
import MuscleSelection from "../pages/MuscleSelection";
import EquipmentSelection from "../pages/EquipmentSelection";
import AllExercises from "../pages/AllExercises";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/body-part" element={<BodyPartSelection />} />
        <Route path="/target-muscles" element={<MuscleSelection />} />
        <Route path="/equipment" element={<EquipmentSelection />} />
        <Route path="/all-exercises" element={<AllExercises />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;