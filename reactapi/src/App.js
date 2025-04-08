import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Login from "./Login";
import Managejs from  './Managejs';
import ManageStudent from "./Managestudent"; // Make sure this is the correct import
import ManageTeacher from "./Manageteacher";

function App() {
  return (
    <Router>
      <Layout/>
      <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/Managejs" element={<Managejs />} />
                {/* other routes */}
            </Routes>
    </Router>
  );
}

export default App;
