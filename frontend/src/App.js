import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCricketerPage from "./pages/CreateCricketerPage";
// addemployee  CreateEmployeePage
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addcricketer" element={<CreateCricketerPage />} />
      </Routes>
    </div>
  );
}

export default App;
