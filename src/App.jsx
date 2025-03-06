import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AchievementSection from "./components/Achivement.jsx";
import CompanySection from "./components/Company.jsx";


const App = () => {
  return (
    <div>
      <CompanySection/>
      < AchievementSection/>
    </div>
  );
};

export default App;
