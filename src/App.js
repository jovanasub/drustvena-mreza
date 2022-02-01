import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeStrana from "./HomeStrana";
import Navbar from "./Navbar";
import Profil from "./Profil";

import profilPodaci from "./profilPodaci";

function App() {
  const [profil, setProfil] = useState(profilPodaci);

  const izmenaProfile = (prop, vrednost) => {
    setProfil(prev => {
      return {
        ...prev,
        [prop]: vrednost,
      }
    });
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/profil">
          <Profil izmenaProfile={izmenaProfile} profil={profil} />
        </Route>
        <Route path="/">
          <HomeStrana />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
