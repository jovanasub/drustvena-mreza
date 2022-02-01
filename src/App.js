import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeStrana from "./HomeStrana";
import Navbar from "./Navbar";
import Profil from "./Profil";

import profilPodaci from "./profilPodaci";

function App() {
  const [profil, setProfil] = useState(profilPodaci);

  const izmenaProfile = (prop, vrednost) => {
    setProfil({
      ...profil,
      [prop]: vrednost,
    });
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeStrana />
        </Route>
        <Route path="/profil">
          <Profil izmenaProfile={izmenaProfile} profil={profil} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
