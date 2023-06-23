import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
     <Routes>
      <Route 
      path="/" 
      element={ <Home /> } 
      />
      {/* Navigates to the home page incase of non existent link */}
      <Route 
      path="*" 
      element={ <Navigate to="/" /> } 
      />
     </Routes>
    </div>
  );
}

export default App;
