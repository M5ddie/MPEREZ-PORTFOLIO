import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarMP from './components/navbar';
import HeroMP from './components/hero';
import ProfileMP from './components/profile';
import SkillsMP from './components/skills';
import WorkExp from './components/workExp';
import ProjectExp from './components/projectExp';

function App() {
  return (
    <div className="App">
      <NavbarMP/>
      <HeroMP/>
      <ProfileMP/>
      <SkillsMP/>
      <WorkExp/>
      <ProjectExp/>
    </div>
  );
}

export default App;
