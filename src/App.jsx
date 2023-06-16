//import { useState } from 'react'
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateResume from './pages/CreateResume';
import ViewResume from './pages/ViewResume';
import Navbar from './components/Navbar';
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import SkillsForm from "./components/SkillsForm";
import HeadingForm from "./components/HeadingForm";
import Summary from "./components/Summary";

function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreateResume />}></Route>
          <Route path="/view" element={<ViewResume />}></Route>
          <Route path="/create/summary" element={<Summary />}></Route>
          <Route path="/create/education" element={<EducationForm />}></Route>
          <Route path="/create/experience" element={<ExperienceForm />}></Route>
          <Route path="/create/skills" element={<SkillsForm />}></Route>
          <Route path="/create" element={<HeadingForm />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App
